import './App.css';
import WeatherComponent from './components/weather-component/weatherComponent.js';
import InicioComponent from './components/inicio-app/inicioApp.js'


function App() {
  return (
    <div className="o-container-all">
      {/* <WeatherComponent></WeatherComponent> */}
          <InicioComponent></InicioComponent>
    </div>
  );
}

export default App;
