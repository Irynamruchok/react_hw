import React, {useEffect, useState} from 'react';

const UseFetch = (endpoint) => {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=> {
            try {
                setLoading(true)
                setError(null)
                const response = await fetch(`https://jsonplaceholder.typicode.com${endpoint}`)
                const jsonData = await response.json()

                setData(jsonData)
                setLoading(false);
            }catch (error){
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [endpoint])
    return { data, loading, error };
};

export default UseFetch;