import React from 'react';
import "./bodyWeather.css";
import imgTemp from "../../../../img/icons/temp.png";
import imgWind from "../../../../img/icons/wind.png";
import imgHum from "../../../../img/icons/humidity.png";;

const bodyWeayher = () => {
    return (
        <div className="o-container-body">
            <div className="o-title-body-container">
                <p className="o-title-text-body o-title-text-body-first">Clima/</p><p className="o-title-text-body o-title-text-body-second"> Datos</p>
            </div>
            <div className="o-body-text-container">
                <div className="o-container-all-details">
                    <div className="o-container-details">
                        <img src={imgTemp} alt="temperatura" className="o-img-temp"></img>
                        <p className="o-items-body o-items-body-left">Temperatura</p>
                    </div>
                    <p className="o-items-body o-item-datos">Datos</p>
                </div>
                <hr className="o-line"/>
                <div className="o-container-all-details">
                    <div className="o-container-details">
                        <img src={imgWind} alt="temperatura" className="o-img-temp"/>
                        <p className="o-items-body o-items-body-left">Húmedad</p>
                    </div>
                    <p className="o-items-body o-item-datos">Datos</p>
                </div>
                <hr className="o-line"/>
                <div className="o-container-all-details">
                    <div className="o-container-details">
                        <img src={imgHum} alt="temperatura" className="o-img-temp"/>
                        <p className="o-items-body o-items-body-left">Velocidad Viento</p>
                    </div>
                    <p className="o-items-body o-item-datos">Datos</p>
                </div>       
            </div>
        </div>
    )
}

export default bodyWeayher;
