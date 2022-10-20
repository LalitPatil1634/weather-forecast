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
            
        </div>
    );
}
