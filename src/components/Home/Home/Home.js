import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css';

const Home = () => {
    const [searchInput, setSearchInput] = useState("");
    const [inputData, setInputData] = useState("");
    const [weatherData, setWeather] = useState({});
    useEffect(() => {
        loadData();

    }, [searchInput]);

    const loadData = async () => {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=c353cb8d347d6fea12bf0a7afa191d63`)
            .then(res => res.json())
            .then(data => setWeather(data))
    }

    // console.log(searchInput);
    // console.log(weatherData);

    return (
        <div className="home-container">
            <NavBar></NavBar>
            <div className="d-flex justify-content-center pt-5">
                <div>
                    <input onChange={(e) => setInputData(e.target.value)} required  type="name" placeholder="Enter The City Name" />
                </div>
                <div>
                    <button onClick={() => setSearchInput(inputData)} className="btn-custom">Search</button>
                </div>

            </div>
            {
                weatherData.name && <div className="text-white pt-5 text-center">

                    <img style={{width: '100px'}} src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}.png`} alt="" />

                    <h1>{weatherData?.name}</h1>
                    <h3><span>{(Math.round((weatherData?.main?.temp) - (273)))}</span>&deg;C</h3>
                    <h1 class="lead">{weatherData?.weather[0]?.description}</h1>
                </div>
            }

        </div>
    );
};

export default Home;