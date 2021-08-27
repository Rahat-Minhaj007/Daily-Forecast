import React, { useEffect, useState } from 'react';
import NavBar from '../../Home/NavBar/NavBar';
import ForecastVisual from '../../Visual/ForecastVisual/ForecastVisual';
import ForecastInfo from '../ForecastInfo/ForecastInfo';
import './ForecastData.css';

const ForecastData = () => {
    const [searchInput2, setSearchInput2] = useState("");
    const [inputData2, setInputData2] = useState("");
    const [forecastData, setForecastData] = useState({});
    useEffect(() => {
        loadData();

    }, [searchInput2]);

    const loadData = async () => {
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchInput2}&appid=c353cb8d347d6fea12bf0a7afa191d63`)
            .then(res => res.json())
            .then(data => setForecastData(data))
    }

  


    let listData = (forecastData?.list);
    let fiveDaysData = listData?.slice(0, 5)

    return (
        <div className={forecastData?.city?.name? "forecast":"forecastData"}>
            <NavBar></NavBar>
            <div className="d-flex justify-content-center pt-5 ">
                <div>
                    <input onChange={(e) => setInputData2(e.target.value)} required type="name" placeholder="Enter The City Name" />
                </div>
                <div>
                    <button onClick={() => setSearchInput2(inputData2)} className="btn-custom">Search</button>
                </div>

            </div>
            {

                forecastData?.city?.name &&

                <div className="d-flex justify-content-center">
                    <div className="container row pt-5">
                        {
                            fiveDaysData.map((information) => <ForecastInfo forecastInfo={information} cityData={forecastData.city} key={information?.dt}></ForecastInfo>)
                        }

                    </div>
                </div>

            }

            {
                forecastData?.city?.name && <div className="container pt-5 pb-5">
                            <ForecastVisual latitude={forecastData?.city?.coord?.lat} longitude={forecastData?.city?.coord?.lon} dependncy={searchInput2}></ForecastVisual>
                </div>

            }



        </div>
    );
};

export default ForecastData;