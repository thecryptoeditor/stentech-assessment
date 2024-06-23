import React, {useState} from 'react';
import SearchInput from './components/searchCities'
import WeatherInfo from './components/weatherInfo';

function App() {

    const [parentWeatherInfo, setParentWeatherInfo] = useState(null);

    const handleDataFromChild = (data) => {
        setParentWeatherInfo(data);
      };

    return (
        <div className="App">
            <SearchInput parentWeatherInfo={handleDataFromChild} />
            { parentWeatherInfo != null ? <WeatherInfo weatherData={parentWeatherInfo}/> : `` } 
        </div>
    );
}

export default App;
