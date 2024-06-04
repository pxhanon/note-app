import { useContext, useState } from "react";
import "./settings.css";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {

    const [file, setFile] = useState(null);

    const [success, setSuccess] = useState(false);

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
          userId: user._id,
        };
        if (file) {
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          updatedUser.profilePic = filename;
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
          const res = await axios.put("/users/" + user._id, updatedUser);
          setSuccess(true);
          dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
          dispatch({ type: "UPDATE_FAILURE" });
        }
    };

    return (
        <>
        <div className="settings">
            <div className="settingsWrapper">
                    <form onSubmit={handleSubmit} class="max-w-lg bg-black-main px-5 py-8 rounded shadow-md mt-20 my-1 m-auto">
                        <h2 class="text-center text-2xl font-medium text-yellow-main mb-10">
                            Account Setting
                        </h2>
                        <div className="">
                            <div className="settingsPP">
                                <img
                                    src={file ? URL.createObjectURL(file) : PF+user.profilePic}
                                    alt=""
                                    class="ml-48 mr-1"
                                />
                                <label htmlFor="fileInput">
                                    <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                                </label>
                                <input
                                    id="fileInput"
                                    type="file"
                                    style={{ display: "none" }}
                                    className="settingsPPInput"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </div>
                        </div>
                        <label class="block text-lg text-gray-main font-medium">Username</label>
                        <p class="w-full border bg-gray-main border-gray-300 py-2 pl-3 rounded mt-2 mb-5 outline-none focus:ring-indigo-600 :ring-indigo-600" >{user.username}</p>
                        <label class="block text-lg text-gray-main font-medium">Email</label>
                        <p class="w-full border bg-gray-main border-gray-300 py-2 pl-3 rounded mt-2 mb-5 outline-none focus:ring-indigo-600 :ring-indigo-600" >{user.email}</p>
                        <label class="block text-lg text-gray-main font-medium">Password</label>
                        <p class="w-full border bg-gray-main border-gray-300 py-2 pl-3 rounded mt-2 mb-5 outline-none focus:ring-indigo-600 :ring-indigo-600" >******</p>
                        <button class="cursor-pointer mb-5 py-2 px-4 block mt-6 bg-yellow-main text-black-main hover:bg-yellow-sub font-medium w-full text-center rounded" type="submit">
                            Profile Picture Update
                        </button>
                        {success && (
                            <span class="text-center ml-40 text-sm font-medium text-green-500">
                            Profile Picture has been updated...
                            </span>
                        )}
                    </form>
            </div>
        </div>
        </>
    );
}
