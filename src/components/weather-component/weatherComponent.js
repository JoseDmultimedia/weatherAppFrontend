import React from 'react';
import "./weatherComponent.css";
import TitleWeather from "./components/titleWeather/titleWeather.js";
import BodyWeathher from "./components/bodyWeather/bodyWeayher.js";

function weatherComponent() {


    return (
        <div className="o-container-weather-background">
            <div className="o-container-weather">
                <TitleWeather></TitleWeather>
                <BodyWeathher></BodyWeathher>
            </div>
        </div>
    )
}

export default weatherComponent;
