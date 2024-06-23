import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAPI = async () => {

            try {
                let result = await fetch(url);

                if (!result.ok) {
                    throw new Error(`HTTP error! status: ${result.status}`);
                }

                const response = await result.json();

                setdata(response);
            }
            catch(err) {
                setError(err)
            }
            finally{
                setLoading(false);
            }

        }

        fetchAPI();
        
    }, [url]);

    return  {data, error, loading};

}

export default useFetch;