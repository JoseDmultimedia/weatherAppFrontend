import React from 'react';
import "./titleWeather.css";

const TitleWeather = (props) => {
    const {temp, city, date} = props;
    return (
        <div className="o-container-titles">
            <h3 className="o-city">SANTIAGO DE CALI {city}</h3>
            <p className="o-date">{date}</p>
            <h1 className="o-temp">31°{temp}</h1>
        </div>
    )
}

export default TitleWeather
