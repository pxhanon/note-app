import "./horoscope.css";
import React, { useState, useEffect } from "react";
import {currentMonth ,Default, Capricorn, Aquarius, Pisces, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius} from "./dataHoro";

export default function Horoscope() {

    const [selected, setSelected] = useState();
    const [final, setFinal] = useState();
    const [horoscope, setHoroscope] = useState({});
    // var now = "";

    const handleChange = (event) => {
        const birthday = event.target.value;
        setSelected(birthday);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const dayString = selected.substring(0, 2);
        const day = parseInt(dayString);
        const monthString = selected.substring(3, 5);
        const month = parseInt(monthString);
        var result = "";
        console.log(typeof day);
        if (month === 1) {
            if (day >= 1 && day <= 15) {
                result = "Sagittarius";
            } else if (day >= 16 && day <= 31) {
                result = "Capricorn";
            }
        } else if (month === 2) {
            if (day >= 1 && day <= 15) {
                result = "Capricorn";
            } else if (day >= 16 && day <= 29) {
                result = "Aquarius";
            }
        } else if (month === 3) {
            if (day >= 1 && day <= 15) {
                result = "Aquarius";
            } else if (day >= 16 && day <= 31) {
                result = "Pisces";
            }
        } else if (month === 4) {
            if (day >= 1 && day <= 12) {
                result = "Pisces";
            } else if (day >= 13 && day <= 30) {
                result = "Aries";
            }
        } else if (month === 5) {
            if (day >= 1 && day <= 13) {
                result = "Aries";
            } else if (day >= 14 && day <= 31) {
                result = "Taurus";
            }
        } else if (month === 6) {
            if (day >= 1 && day <= 14) {
                result = "Taurus";
            } else if (day >= 15 && day <= 30) {
                result = "Gemini";
            }
        } else if (month === 7) {
            if (day >= 1 && day <= 15) {
                result = "Gemini";
            } else if (day >= 16 && day <= 31) {
                result = "Cancer";
            }
        } else if (month === 8) {
            if (day >= 1 && day <= 15) {
                result = "Cancer";
            } else if (day >= 16 && day <= 31) {
                result = "Leo";
            }
        } else if (month === 9) {
            if (day >= 1 && day <= 15) {
                result = "Leo";
            } else if (day >= 16 && day <= 30) {
                result = "Virgo";
            }
        } else if (month === 10) {
            if (day >= 1 && day <= 15) {
                result = "Virgo";
            } else if (day >= 16 && day <= 31) {
                result = "Libra";
            }
        } else if (month === 11) {
            if (day >= 1 && day <= 15) {
                result = "Libra";
            } else if (day >= 16 && day <= 30) {
                result = "Scorpio";
            }
        } else if (month === 12) {
            if (day >= 1 && day <= 15) {
                result = "Scorpio";
            } else if (day >= 16 && day <= 31) {
                result = "Sagittarius";
            }
        }

        // if (currentMonth === 5) {
        //     now = "jun";
        // } else if (currentMonth === 6 ) {
        //     now = "jul";
        // } else if (currentMonth === 7 ) {
        //     now = "aug";
        // } else if (currentMonth === 8 ) {
        //     now = "sep";
        // } else if (currentMonth === 9 ) {
        //     now = "oct";
        // } else if (currentMonth === 10 ) {
        //     now = "nov";
        // } else if (currentMonth === 11 ) {
        //     now = "dec";
        // }
        setFinal(result)
    }

    useEffect(() => {
        switch (final) {
            case "Capricorn":
                setHoroscope(Capricorn);
                break;
            case "Aquarius":
                setHoroscope(Aquarius);
                break;
            case "Pisces":
                setHoroscope(Pisces);
                break;
            case "Aries":
                setHoroscope(Aries);
                break;
            case "Taurus":
                setHoroscope(Taurus);
                break;
            case "Gemini":
                setHoroscope(Gemini);
                break;
            case "Cancer":
                setHoroscope(Cancer);
                break;
            case "Leo":
                setHoroscope(Leo);
                break;
            case "Virgo":
                setHoroscope(Virgo);
                break;
            case "Libra":
                setHoroscope(Libra);
                break;
            case "Scorpio":
                setHoroscope(Scorpio);
                break;
            case "Sagittarius":
                setHoroscope(Sagittarius);
                break;
            default:
                setHoroscope(Default);
        }

    }, [final])
    
    return (
        <div className="horoscope">
            <section class="">
                <div className="formHoro">
                    <form onSubmit={handleSubmit} class="max-w-sm bg-black-main px-3 py-5 rounded shadow-md my-10 m-auto">
                        <h2 class="text-center text-2xl font-medium text-yellow-main mb-2">
                        Monthly Horoscope
                        </h2>
                        <div class="flex flex-col space-y-3">
                            <div class="flex items-center bg-white rounded px-2">
                            <input
                                type="text"
                                placeholder=" Type your birthday: dd-mm-yyyy (ex: 10-12-2000)"
                                class="border-none w-full py-2 px-1 placeholder-gray-400 outline-none placeholder-opacity-70"
                                autocomplete="off"
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" class="text-black font-medium bg-yellow-main px-4 py-2 rounded hover:bg-yellow-sub hover:text-black-main">
                            Go
                        </button>
                        </div>
                    </form>
                </div>
                <div className="divHoro">
                    <div class="">
                        <div class="w-full bg-black-main rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                            <div class="w-full h-80">
                                <img class="object-center h-full" src={horoscope.img} alt="photo" />
                            </div>
                            <div class="w-full md:w-5/5 text-left p-6 md:p-4 space-y-2">
                                <p class="text-xl text-gray-main font-bold">{horoscope.title}</p>
                                <p class="text-base text-yellow-main font-normal">{horoscope.range}</p>
                                <p class="text-base leading-relaxed text-gray-main font-extralight">{horoscope === Default ? horoscope.desc : horoscope.nov}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
