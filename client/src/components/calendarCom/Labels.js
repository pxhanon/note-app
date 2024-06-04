import React, { useContext } from "react";
import GlobalContext from "../../context/calendarCon/GlobalContext";

export default function Labels() {
    const { labels, updateLabel } = useContext(GlobalContext);
    return (
        <React.Fragment>
            {/* {labels.map(({ label: lbl, checked }, idx) => (
                <label key={idx} className="items-center ml-2 block">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                    updateLabel({ label: lbl, checked: !checked })
                    }
                    className={`border-0 form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
                />
                <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
                </label>
            ))} */}
        </React.Fragment>
    );
}
