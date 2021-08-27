import React from 'react';

const ForecastInfo = ({ forecastInfo, cityData }) => {

    return (

        <div className="col-md-4">
            <div className="card text-light bg-secondary mb-3" style={{ Width: '18rem' }}>
            <div className="card-header text-center">{cityData.name}</div>
                <div className="card-body">
                  <p><span className="fw-bold">GEO COORD: </span>lat {cityData?.coord?.lat}, lon {cityData?.coord?.lon}</p>
                 <p><span className="fw-bold">MAX TEMP: </span>{(Math.round((forecastInfo?.main?.temp_max) - (273)))}&deg;C</p>
                 <p><span className="fw-bold">MIN TEMP: </span>{(Math.round((forecastInfo?.main?.temp_min) - (273)))}&deg;C</p>
                 <p><span className="fw-bold">SUNRISE: </span>{new Date(cityData.sunrise * 1000).getHours()}AM</p>
                 <p><span className="fw-bold">SUNSET: </span>{new Date(cityData.sunset * 1000).getHours()}PM</p>
                 <p><span className="fw-bold">HUMIDITY: </span>{forecastInfo?.main?.humidity}</p>
               
                </div>
            </div>
        </div>

    );
};

export default ForecastInfo;