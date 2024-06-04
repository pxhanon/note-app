import React, { useState, useContext, useEffect } from "react";
import "./calendar.css";

// Calendar
import { getMonth } from "./util";
import CalendarHeader from "../../components/calendarCom/CalendarHeader";
import Month from "../../components/calendarCom/Month";
import GlobalContext from "../../context/calendarCon/GlobalContext";
import EventModal from "../../components/calendarCom/EventModal";

export default function Calendar() {

    const [currenMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, showEventModal } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    return (
        <React.Fragment>
            {showEventModal && <EventModal />}
            <div className="calendar">
                <div className="h-screen flex flex-col">
                    <CalendarHeader />
                    <p className="ml-72 text-gray-400 font-medium">plan your day in seconds with Catlist's calendar</p>
                    <div className="flex flex-1">
                        <Month month={currenMonth} />
                    </div>
                </div>
            </div>   
        </React.Fragment>
    )
}
