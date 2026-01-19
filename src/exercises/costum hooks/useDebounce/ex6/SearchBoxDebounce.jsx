import React, { useEffect, useRef, useState } from 'react'

export default function SearchBoxDebounce() {

    const[search, setSearch] = useState('');
    const[delaySearch, setDelaySearch] = useState('');
    const[isLoading, setIsLoading] = useState(false);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const refSearch = useRef(null)

    useEffect(() => {
        // don't load if empty
        if(search.trim() === ''){
            setIsLoading(false);
            setDelaySearch('');
            return;
        }
        setIsLoading(true)
        refSearch.current = setTimeout(() => {
            setIsLoading(false)
            setDelaySearch(search)
        }, 2000)

        
        return () => {
            clearTimeout(refSearch.current)
        }
    }, [search])
    
    // if(isLoading) {
    //     return <p>Loading, please wait 2 sec...</p>
    // } 

  return (
    <div>
        <input 
            value={search} 
            onChange={handleSearch}    
        />
        {/* {isLoading ? (<p>loading</p>) : (<p>{delaySearch}</p>)} */}
        {isLoading ? (<p>Loading..</p>) : delaySearch ? (<p>Results: {delaySearch}</p>) : (<p style={{color: 'lightgrey'}}>Type Somethong To Search</p>)}
        {/* same As: */}
        {/* if(isLoading) {
          return <p>Loading</p>
        } else if(delaySearch) {
          return <p>Results: {delaySearch}</p>
        } else {
          return <p>Type something</p>
        } */}
    </div>
  )
}
