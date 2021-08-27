import React, { useEffect, useState } from 'react';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ForecastVisual = ({ latitude, longitude, dependncy }) => {
    const [visualData, setVisualData] = useState([])
    useEffect(() => {
        loadData();
    }, [dependncy]);

    const loadData = async () => {

        await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,daily&appid=c353cb8d347d6fea12bf0a7afa191d63`)
            .then(res => res.json())
            .then(data => setVisualData(data.hourly))

    }

    const hourlyData = visualData.slice(0,12)

    return (
        <div>
            <ResponsiveContainer width="100%" aspect={3} >
                <LineChart data={hourlyData}>
                    <CartesianGrid />
                    <Tooltip />
                    <Legend />
                    <XAxis />
                    <Line dataKey={"temp"}  activeDot={{ r: 8 }}/>
                    <Line dataKey={"humidity"}  activeDot={{ r: 8 }}/>
                    
                    <YAxis />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ForecastVisual;