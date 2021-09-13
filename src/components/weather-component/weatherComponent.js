import React from 'react';
import "./weatherComponent.css";
import TitleWeather from "./components/titleWeather/titleWeather.js";
import BodyWeathher from "./components/bodyWeather/bodyWeather.js";

function WeatherComponent() {
    var date = new Date().toLocaleDateString();

    return (
        <div className="o-container-weather-background">
            <div className="o-container-weather">
                <TitleWeather temp="" city="" date={date}></TitleWeather>
                <BodyWeathher humedad="" temp="" velocidad=""></BodyWeathher>
            </div>
        </div>
    )
}

export default WeatherComponent;
