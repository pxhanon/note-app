import "./weather.css";
import axios from "axios";
import React, { useState, useEffect, useRef, } from "react";

const URL = "http://localhost:9000/";

export default function Weather() {

    const locationRef = useRef();
    const [weather, setWeather] = useState({});
    const [error, setError] = useState(false);

    const locationSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
          const res = await axios.post("/users/weather",{cityName:locationRef.current.value});
          console.log(res.data);
          setWeather(res.data);
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    const imageURL = "http://openweathermap.org/img/wn/" + weather.Icon + "@2x.png";

    return (
        <div className="weather">
            <div className="inputFormWeather">
                <form class="max-w-sm bg-black-main px-5 py-8 rounded shadow-md mt-32 my-10 m-auto" onSubmit={locationSubmit}>
                    <h2 class="text-center -mt-3 text-2xl font-medium text-yellow-main mb-5">
                        Current Weather
                    </h2>
                    <label className="font-normal text-gray-main text-base" for="cityInput">City Name: </label>
                    <input placeholder="Type your City Name" className="ml-4 appearance-none border-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cityInput" type="text" name="cityName" ref={locationRef}/>
                    <button class="ml-4 bg-yellow-main text-black-main font-medium hover:bg-yellow-sub hover:text-black-main  py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="submit">Go</button>
                    <a href="https://www.jangwat.com/knowledge/112/" target="_blank" className="text-gray-400 font-medium hover:text-gray-500 text-sm ml-12">* you can check city name in Thailand at this</a>
                    {error ? 
                        <p class="text-center ml-5 text-sm font-medium text-red-500 mt-4">
                            Please check your City Name again !
                        </p> : null}
                </form>
            </div>
            <span>
                <div className="divWeather">
                    <div class="w-full max-w-xs mt-20">
                            <form class="bg-yellow-main shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                {weather.Temp ? 
                                    <p className="text-center font-bold text-2xl"> {weather.Temp} °C</p>
                                : 
                                    <p className="text-center font-bold text-2xl">Temperature</p>
                                }
                                {weather.Description ? 
                                    <p className="mt-8 font-bold text-xl text-center"> {weather.Description}</p>
                                :
                                    <p className="mt-8 font-bold text-xl text-center">Description</p>
                                }
                                {weather.Icon ?
                                    <img className="mt-8 ml-20" src={imageURL} alt=""></img>
                                :
                                    <img className="mt-8 ml-20" src="assets/example.png" alt=""></img>
                                }
                            </form>                
                    </div> 
                </div>
            </span>
        </div> 
    )
}
