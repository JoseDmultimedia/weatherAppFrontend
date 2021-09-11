import React from 'react';
import "./inicioApp.css";

function inicioApp() {
    return (
        <div className="o-inicio-card">
            <h1 className="o-text-inicio">Weather App</h1>
            <h3 className="o-text-inicio">Ingresa la Key</h3>
            <input type="text" placeholder="Numero de key" className="o-input-inicio"></input>
            <button className="o-btn-inicio">Ingresar</button>
        </div>
    )
}

export default inicioApp
