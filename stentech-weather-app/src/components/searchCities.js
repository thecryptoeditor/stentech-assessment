import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const SearchByCities = ({ parentWeatherInfo }) => {

    const [url, setUrl] = useState(null);

    const {data, error, loading} = useFetch(url);

    const [inputValue, setInputValue] = useState('');

    const [ state, setState ] = useState('Search');

    const [ disabled, setDisabled ] = useState(false);


    const inputHandler = (event) => {
        setInputValue(event.target.value);
    }
    
    const handleSearch = () => {
        setState('Fetching Details');
        setDisabled(true)
        setUrl(`http://api.positionstack.com/v1/forward?access_key=f0f649f70b71f26e55608d63b219b2be&query=${inputValue}`)
    }

    useEffect(() => {

        if(data != null && data.data.length) {

            let lat = JSON.stringify(data.data[0].latitude);
            let lng = JSON.stringify(data.data[0].longitude);

            getWeatherData(lat, lng);
        }

    }, [data]);

   // this useEffect use for find out weather related info from open weather APIs
    const getWeatherData = (lat, lng) => { 

        (async () => {

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=46d1711f5c49c9b2ca9607500c0c75bc`)
            const weatherInfo = await response.json();

            parentWeatherInfo(weatherInfo);
            setState('Search')
            setDisabled(false)

        })()
    }


    return (
        <>
            <div className="search-city-weather-container">
                <h2>Weather App</h2>
                <div className="search-input">
                    <input
                        type="search"
                        value={inputValue}
                        placeholder="Seach by city"
                        input="searchValue"
                        onChange={inputHandler}
                    />
                    <button disabled={disabled} onClick={handleSearch}>{state}</button>
                </div>
            </div>
        </>
    )

}

export default SearchByCities;