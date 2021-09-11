import React from 'react';
import "./titleWeather.css";

const titleWeather = (props) => {
    const {temp, city, date} = props;
    return (
        <div className="o-container-titles">
            <h3 className="o-city">SANTIAGO A CALI {city}</h3>
            <p className="o-date">1O Septiembre 2021{date}</p>
            <h1 className="o-temp">31°{temp}</h1>
        </div>
    )
}

export default titleWeather
