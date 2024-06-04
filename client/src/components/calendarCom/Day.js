import React, { useContext, useState, useEffect } from "react";
import dayjs from "dayjs";
import GlobalContext from "../../context/calendarCon/GlobalContext";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Day({ day, rowIdx }) {

    // const [event, setEvent] = useState({});

    // const isAuth = () => {

    //     if (localStorage.getItem('user')) {
    //         return JSON.parse(localStorage.getItem('user'));
    //     } else {
    //         return false;
    //     }
    // }
    // const username = isAuth() ? isAuth().username : '999'

    // useEffect(() => {
    //     const getEvents = async() => {
    //         const res = await axios.get("/events/?user="+username);
    //         setEvent(res.data);
    //     };
    //     getEvents();
    // },);

    const [dayEvents, setDayEvents] = useState([]);

    const {
        setDaySelected,
        setShowEventModal,
        filteredEvents,
        setSelectedEvent,
    } = useContext(GlobalContext);

    const isAuth = () => {

        if (localStorage.getItem('user')) {
            return JSON.parse(localStorage.getItem('user'));
        } else {
            return false;
        }
    }
    const username = isAuth() ? isAuth().username : '999'

    const { user } =  useContext(Context);

    // const fetchEvents = async() => {
    //     const res = await axios.get("/events/?user"+username);
    
    // }
    // fetchEvents(); 

    useEffect(() => {
        // const fetchEvents = async() => {
        //     const res = await axios.get("/events/?user"+username);
        //     setDayEvents(res);
        // }
        // fetchEvents(); 

        const events = filteredEvents.filter( (evt) =>
            dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
        );
        //if (events.data.username === user.username || events.data.username === null) {
            //events.map(evt => {
                //let len = event.length;
                //for (let i = 0; i < len; i++) {
                    //if (evt.username === user.username || evt.username === null) {
                        setDayEvents(events);
                    //}
                    //console.log(evt.id);
                    //console.log(event[i].id);
                //}
            //});
        //}
        
    }, [filteredEvents, day]); 
    
    console.log(dayEvents);

    function getCurrentDayClass() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
          ? "bg-yellow-main rounded-full w-7 text-black-main"
          : "";
    }
    

    return (
        <div className="bg-black-main pt-2 border-4 border-gray-main flex flex-col">
            <header className="flex flex-col items-center">
            {rowIdx === 0 && (
                <p className="text-sm font-medium text-yellow-main mt-1">
                {day.format("ddd").toUpperCase()}
                </p>
            )}
                <p className={`text-sm text-gray-main p-1 my-1 text-center ${getCurrentDayClass()} `}>{day.format("DD")}</p>
            </header>
            <div
                className="flex-1 cursor-pointer"
                onClick={() => {
                    setDaySelected(day);
                    setShowEventModal(true);
                }}
                >
                {dayEvents.map((evt, idx) => (
                    <div
                    key={idx}
                    onClick={() => setSelectedEvent(evt)}
                    className={`bg-${evt.username === user.username ? evt.label : "white"}-200 p-1  mx-1 text-gray-600 text-sm rounded mb-1 truncate`}
                    >
                    {evt.username === user.username ? evt.title  : null}
                    </div>
                ))}
            </div>
        </div>
    )
}
