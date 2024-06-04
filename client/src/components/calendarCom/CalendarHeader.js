import React, { useContext } from 'react'
import GlobalContext from "../../context/calendarCon/GlobalContext";
import dayjs from "dayjs";
import Labels from './Labels';

export default function CalendarHeader() {

    const { monthIndex, setMonthIndex } = useContext(GlobalContext);

    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1);
      }

      function handleNextMonth() {
        setMonthIndex(monthIndex + 1);
      }
      
      function handleReset() {
        setMonthIndex(
          monthIndex === dayjs().month()
            ? monthIndex + Math.random()
            : dayjs().month()
        );
      }

    return (
        <header className="pl-72 pt-24 flex items-center">
            <h1 className="mr-10 text-3xl text-black font-medium">
                Calendar
            </h1>
            <button
                onClick={handleReset}
                className="border border-gray-200 bg-yellow-main text-black-main hover:bg-black-main hover:text-yellow-main font-medium rounded py-2 px-4 mr-5 ml-64"
            >
                Today
            </button>
            <button onClick={handlePrevMonth}>
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                chevron_left
                </span>
            </button>
            <button onClick={handleNextMonth}>
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                chevron_right
                </span>
            </button>
            <h2 className="ml-4 mr-52 text-xl text-black-main font-semibold">
                {dayjs(new Date(dayjs().year(), monthIndex)).format(
                "MMMM YYYY"
                )}
            </h2>
            <Labels />
        </header>
    )
}
