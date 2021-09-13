import React, { useState } from 'react';
import "./inicioApp.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";


function InicioApp() {
    const [key, setKey] = useState("0");
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    let history = useHistory();


    const getKey = () =>{
        axios.get("http://localhost:8080/key/"+input).then((response) =>{
            setKey(response.data);
        })
        if(key === "Ok"){
            history.push("/weather");
            
        }else{
            setError("Key invalida");
            console.log(key, "algo");
        }
    }

    return (
        <div className="o-inicio-card">
            <h1 className="o-text-inicio">Weather App</h1>
            <h3 className="o-text-inicio">Ingresa la Key</h3>
            <input value={input} onInput={e => setInput(e.target.value)} type="text" placeholder="Numero de key" className="o-input-inicio"></input>
            <button className="o-btn-inicio" onClick={getKey}>Ingresar</button>
            {(error !== "") ? (<div>{error}</div>) : ""}
        </div>
    )
}

export default InicioApp



