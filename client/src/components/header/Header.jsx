import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header" id="header">
            <div className="leftHeader">
                <div className="imgContainerHeader">
                    <img className="imgHeader" src="assets/demo9.png" alt="" />
                    <h2 className="h2Header1">Meowww ~~</h2>
                </div> 
            </div>
            <div className="rightHeader">
                <div className="subRightHeader">
                    <h2 className="h2Header2 text-gray-main">take note | planner | to do list</h2>
                    <h1 className="h1Header text-yellow-main font-medium">catlist</h1>
                    <h3 className="h3Header text-gray-main">let's plan for your productive life</h3>
                    <Link to="/register" className="formHeader">
                        {/* <input className="inputHeader rounded" type="text" placeholder="'' Type Your Email To Get Start ''" /> */}
                        {/* <p class="bg-gray-main rounded p-1 px-20 font-medium text-lg">Click it to Sing Up !</p> */}
                        <button className="buttonHeader text-black-main py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="submit">Click here to Get Start</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
