import React, { useState, useEffect } from 'react';
import "./weatherComponent.css";
import TitleWeather from "./components/titleWeather/titleWeather.js";
import BodyWeathher from "./components/bodyWeather/bodyWeather.js";
import axios from 'axios';

function WeatherComponent() {
   const [datos, setDatos] = useState("");
   


   useEffect(() => {
    axios.get("http://localhost:8080/last-weather").then((response) => {
        setDatos(response.data); 
    });
    }, []);
    
    
    console.log(datos);


    var date = new Date().toLocaleDateString();

    return (
        <div className="o-container-weather-background">
            <div className="o-container-weather">
                <TitleWeather temp={datos.temp} city={datos.ciudad} date={date}></TitleWeather>
                <BodyWeathher humedad={datos.humedad} temp={datos.temp} velocidad={datos.velocidad}></BodyWeathher>
            </div>
        </div>
    )
}

export default WeatherComponent;
