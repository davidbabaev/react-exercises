import { useEffect, useState } from "react";

function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // we'll add the fetch logics here
    useEffect(() => {
        const fetchData = async () =>{
            try{
                setLoading(true);
                const response = await fetch(url)
                const data = await response.json();
                setData(data);
                console.log(data);
                
                setLoading(false);
            }
            catch(err){
                console.log(err.message);
                setLoading(false)
            }
        }
        fetchData();
    }, [url])
    //   ↑ When URL changes, fetch again!

    return {data, loading, error};
}

export default useFetch;