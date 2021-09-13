import React from 'react';
import "./bodyWeather.css";
import DetailsBody from './components/detailsBody';
import imgTemp from "../../../../img/icons/temp.png";
import imgWind from "../../../../img/icons/wind.png";
import imgHum from "../../../../img/icons/humidity.png";;

const BodyWeather = (props) => {
    const {temp, humedad, velocidad} = props;
    return (
        <div className="o-container-body">
            <div className="o-title-body-container">
                <p className="o-title-text-body o-title-text-body-first">Clima/</p><p className="o-title-text-body o-title-text-body-second"> Datos</p>
            </div>
            <div className="o-body-text-container">
                <DetailsBody img={imgTemp} variable="Temperatura" datos={temp + "°"}/>
                <hr className="o-line"/>
                <DetailsBody img={imgWind} variable="Húmedad" datos={humedad + "%"}/>
                <hr className="o-line"/>     
                <DetailsBody img={imgHum} variable="Velocidad Viento" datos={velocidad + "m/s"}/>  
            </div>
        </div>
    )
}

export default BodyWeather;
