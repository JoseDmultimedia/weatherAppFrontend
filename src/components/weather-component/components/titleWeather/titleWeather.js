import React from 'react';
import "./titleWeather.css";

const TitleWeather = (props) => {
    const {temp, city, date} = props;
    return (
        <div className="o-container-titles">
            <h3 className="o-city">{city}</h3>
            <p className="o-date">{date}</p>
            <h1 className="o-temp">{temp}°</h1>
        </div>
    )
}

export default TitleWeather
