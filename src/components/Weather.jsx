import React, { useState } from 'react'

export const Weather = () => {
    const [city, setCity] = useState(false);
    const [search, setSearch] = useState("");
    const [response, setResponse] = useState("");


    async function fetchApi() {
        let url =
            "http://api.weatherstack.com/current?access_key=11e42dade7af105e7cf39db8b3458b51&query=" +
            search;
        let res = await fetch(url);
        let jsonData = await res.json();
        setResponse(jsonData);
        setCity(true);
    }

    return (
        <div className="main-container">
            <header>Weather App</header>
            <section className="search-city">
                <p className="info-txt"></p>
                <div className="content">
                    <input
                        type="text"
                        required
                        onChange={function (e) {
                            setSearch(e.target.value);
                        }}
                    />
                    <div className="separator"></div>
                    <button
                        onClick={function () {
                            fetchApi();
                        }}
                    >
                        Search
                    </button>
                </div>
            </section>
            {city ? (
                <section className="weather-details">
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
                        alt="Weather Icon"
                    />
                    <div className="weather">{response.current.weather_descriptions[0]}</div>
                    <div className="temp">
                        <span className="numb">{response.current.temperature}</span>
                        <span className="deg">°</span>C
                    </div>
                    <div className="time">
                        <span>
                            <span>{response.location.localtime}</span>
                        </span>
                    </div>
                    {/* <div className="">
                        <span>
                            <span>{response.current.mintemp}</span>
                            <span>{response.current.maxtemp}</span>
                        </span>
                    </div> */}
                    <div className="bottom-details">
                        <div className="column feels">
                            <div className="details">
                                <div className="temp">
                                    <span className="numb-2">{response.current.feelslike}</span>
                                    <span className="deg">°</span>C
                                </div>
                                <p>Feel Like</p>
                            </div>
                        </div>
                        <div className="column humidity">
                            <div className="details">
                                <span>{response.current.wind_dir}</span>&nbsp;
                                <span>{response.current.wind_speed}mi/h</span>
                                <p>Wind</p>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
}
