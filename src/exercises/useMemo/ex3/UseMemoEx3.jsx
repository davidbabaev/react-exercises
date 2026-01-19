import React, { useCallback, useMemo, useState } from 'react'
import useDebounceEx3 from './useDebounceEx3'
import UseMemoChildEx3 from './UseMemoChildEx3'


export default function UseMemoEx3() {
    const [products] = useState([
        { id: 1, name: 'Laptop', price: 1000, category: 'Electronics' },
        { id: 2, name: 'Phone', price: 500, category: 'Electronics' },
        { id: 3, name: 'Shirt', price: 30, category: 'Clothing' },
    ])
    
    const [search, setSearch] = useState('')
    const [darkMode, setDarkMode] = useState(false)

    const debounceSearch = useDebounceEx3(search, 1000)

    const productFilter = useMemo(() => {
        return products.filter((product) => {
            return product.name.toLowerCase().includes(debounceSearch.toLowerCase())
        })
    }, [debounceSearch, products]);

    const handleSelect = useCallback((product) => {
        console.log('Selected', product.name);
    }, [])

  return (
    <div style={{backgroundColor: darkMode ? "black" : "white" }}>
        <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <UseMemoChildEx3
            products = {productFilter}
            onSelect = {handleSelect}
        />

    <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
    </div>
  )
}




// struggeling with - my weak parts:
// 1. filtering the array, the filter not working
// 2. const productFilter -> i don't know what to do with this, where to call it from? how to use it? 
// 3. i forgot what are we need to use in the useMemo child component
// 4. i missing something more
