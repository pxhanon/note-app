import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import GlobalContext from "../../context/calendarCon/GlobalContext";
import axios from "axios";
import { Context } from "../../context/Context";

const labelsClasses = [
    "indigo",
    "yellow"
];

export default function EventModal() {

    const { user } =  useContext(Context);

    const {
        setShowEventModal,
        daySelected,
        dispatchCalEvent,
        selectedEvent,
      } = useContext(GlobalContext);
    
    const [title, setTitle] = useState(
        selectedEvent ? selectedEvent.title : ""
    );
    const [description, setDescription] = useState(
        selectedEvent ? selectedEvent.description : ""
    );
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent
          ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
          : labelsClasses[0]
    );
    const [event, setEvent] = useState({});

    const isAuth = () => {

        if (localStorage.getItem('user')) {
            return JSON.parse(localStorage.getItem('user'));
        } else {
            return false;
        }
    }

    const username = isAuth() ? isAuth().username : '999'

    useEffect(() => {
        const getEvents = async() => {
            const res = await axios.get("/events/?user="+username);
            setEvent(res.data)
            console.log(res.data);
        };
        getEvents();
    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const calendarEvent = {
          username: user.username,
          title,
          description,
          label: selectedLabel,
          day: daySelected.valueOf(),
          id: selectedEvent ? selectedEvent.id : Date.now(),
        };
        await axios.post("/events", calendarEvent)
            .then(res => {
              console.log(res.data);
            }
            );

        if (selectedEvent) {
            let len = event.length;
            for (let i = 0; i < len; i++) {
                if (selectedEvent.id === event[i].id && selectedEvent.day === event[i].day) {
                    await axios.put(`/events/${event[i]._id}`, {
                        username: user.username,
                    });
                    break;
                }
            }
            dispatchCalEvent({ type: "update", payload: calendarEvent });
        } else {
            dispatchCalEvent({ type: "push", payload: calendarEvent });
        }
        setShowEventModal(false);
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        let len = event.length;
        for (let i = 0; i < len; i++) {
            if (selectedEvent.id === event[i].id && selectedEvent.day === event[i].day) {
                await axios.delete(`/events/${event[i]._id}`);
                break;
            }
        }
        window.location.replace("/calendar");
        dispatchCalEvent({type: "delete", payload: selectedEvent});
        setShowEventModal(false);
    }

    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
            <form className="bg-white ml-60 mt-32 rounded-lg shadow-2xl w-1/4 ">
                <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                    <span className="material-icons-outlined text-gray-400">
                        drag_handle
                    </span>
                    <div>
                        {selectedEvent && (
                            <span
                            onClick={handleDelete}
                            className="material-icons-outlined text-gray-400 cursor-pointer"
                            >
                            delete
                            </span>
                        )}
                        <button onClick={() => setShowEventModal(false)}>
                            <span className="material-icons-outlined text-gray-400">
                            close
                            </span>
                        </button>
                    </div>
                </header>

                <div className="p-3">
                    <div className="grid grid-cols-1/5 items-end gap-y-7">
                    <div></div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Add title"
                        value={title}
                        required
                        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <span className="material-icons-outlined text-gray-400">
                        schedule
                    </span>
                    <p>{daySelected.format("dddd, MMMM DD")}</p>
                    <span className="material-icons-outlined text-gray-400">
                        segment
                    </span>
                    <input
                        type="text"
                        name="description"
                        placeholder="Add a description"
                        value={description}
                        required
                        className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <span className="material-icons-outlined text-gray-400">
                        bookmark_border
                    </span>
                    <div className="flex gap-x-2">
                        {labelsClasses.map((lblClass, i) => (
                        <span
                            key={i}
                            onClick={() => setSelectedLabel(lblClass)}
                            className={`bg-${lblClass}-300 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                        >
                            {selectedLabel === lblClass && (
                            <span className="material-icons-outlined text-white text-sm">
                                check
                            </span>
                            )}
                        </span>
                        ))}
                        </div>
                    </div>
                </div>

                <footer className="flex justify-end border-t p-3 mt-5">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-yellow-main hover:bg-blue-600 px-6 py-2 rounded text-black hover:bg-yellow-main"
                        >
                        Save
                    </button>
                </footer>
            </form>
        </div>
    )
}
