import { useEffect, useState } from "react";

function useCountriesEx6() {

    const [apiCountriesList, setApiCountriesList] = useState([]);
    const [apiCountriesListLoading, setApiCountriesListLoading] = useState('');

    const fetchCountriesList = async () => {
        setApiCountriesListLoading('loading')
        try{
            const response = await fetch('https://restcountries.com/v3.1/all?fields=name')
            const data = await response.json();

            setApiCountriesList(data.name.common)

            console.log(data.name.common);
        }
        catch(err){
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchCountriesList();
    }, [])

  return {apiCountriesList, apiCountriesListLoading}
}

export default useCountriesEx6;
