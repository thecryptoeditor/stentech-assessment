import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';

const SearchByCities = (url) => {

    const {weatherData, error, loading} = useFetch(url);

    const [inputValue, setInputValue] = useState(null);

    const inputHandler = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    return (

        <input
            type="search"
            placeholder="Seach by city"
            input="searchValue"
            onChange={inputHandler}
        />
    )

}

export default SearchByCities;