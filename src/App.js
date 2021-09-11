import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import WeatherComponent from './components/weather-component/weatherComponent.js';
import InicioComponent from './components/inicio-app/inicioApp.js'


function App() {
  return (
    <div className="o-container-all">
      
      
      <Router>
        <Switch>
          <Route exact path="/">
            <InicioComponent></InicioComponent>
          </Route>
          <Route path="/weather">
            <WeatherComponent></WeatherComponent>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
