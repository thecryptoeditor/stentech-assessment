import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const SearchByCities = () => {

    const [url, setUrl] = useState(null);

    const {data, error, loading} = useFetch(url);

    const [inputValue, setInputValue] = useState();

    const [weatherDetails, setWeatherDetails] = useState({})


    const inputHandler = (event) => {
        setInputValue(event.target.value);
        setUrl(`http://api.positionstack.com/v1/forward?access_key=f0f649f70b71f26e55608d63b219b2be&query=${event.target.value}`)
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

            const result = await fetch(`http://api.positionstack.com/v1/reverse?access_key=f0f649f70b71f26e55608d63b219b2be&query=${lat},${lng}`);
            const data = await result.json();

            console.log(weatherInfo, data.data[0].locality, data.data[0].country (data.data[0].postal_code || null));

            setWeatherDetails(
                { weatherData: weatherInfo, 
                    search: { 
                        city:data.data[0].locality, 
                        country: data.data[0].country, 
                        pincode: data.data[0].postal_code
                    }
                }
            )

        })()
    }


    return (

        <>
            <input
                type="search"
                value={inputValue}
                placeholder="Seach by city"
                input="searchValue"
                onChange={inputHandler}
            />

            <p>latitude : </p> {data != null && data.data.length ? (JSON.stringify(data.data[0].latitude)) : null}
            <p>longitude : </p> {data != null && data.data.length ? (JSON.stringify(data.data[0].longitude)) : null}

            {/* {weatherDetails} */}
        </>
    )

}

export default SearchByCities;