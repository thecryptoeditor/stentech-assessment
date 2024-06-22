import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiCall = async () => {

            try {
                let response = await fetch(url);
                setData(response);
            }
            catch(err) {
                setError(err)
            }
            finally{
                setLoading(false);
            }

        }

        apiCall();
    }, []);


    return { data, error, loading};

}

export default useFetch;