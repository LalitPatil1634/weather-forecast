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
        <div class="main-container">
            <header>Weather App</header>
            <section class="search-city">
                <p class="info-txt"></p>
                <div class="content">
                    <input
                        type="text"
                        required
                        onChange={function (e) {
                            setSearch(e.target.value);
                        }}
                    />
                    <div class="separator"></div>
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
                <section class="weather-details">
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
                        alt="Weather Icon"
                    />
                    <div class="weather">{response.current.weather_descriptions[0]}</div>
                    <div class="temp">
                        <span class="numb">{response.current.temperature}</span>
                        <span class="deg">°</span>C
                    </div>
                    <div class="time">
                        <span>
                            <span>{response.location.localtime}</span>
                        </span>
                    </div>
                    {/* <div class="">
                        <span>
                            <span>{response.current.mintemp}</span>
                            <span>{response.current.maxtemp}</span>
                        </span>
                    </div> */}
                    <div class="bottom-details">
                        <div class="column feels">
                            <div class="details">
                                <div class="temp">
                                    <span class="numb-2">{response.current.feelslike}</span>
                                    <span class="deg">°</span>C
                                </div>
                                <p>Feel Like</p>
                            </div>
                        </div>
                        <div class="column humidity">
                            <div class="details">
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
