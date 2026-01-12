import React, { useRef, useState } from 'react'
import { ShoppingContext } from './ShoppingContext'
import AddItemForm from './AddItemForm';
import ItemsList from './ItemsList';
import Stats from './Stats';
import FilterButtons from './FilterButtons';

export default function ShoppingApp() {

    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('all')
    const inputRef = useRef(null);

  return (
    <ShoppingContext.Provider 
    value={{
      items, 
      setItems, 
      input, 
      setInput, 
      inputRef, 
      useRef,
      filter,
      setFilter
    }}>
        <h1 style={{fontFamily:'arial'}}>Shopping List</h1>
        <FilterButtons/>
        <Stats/>
        <AddItemForm/>
        <ItemsList/>
    </ShoppingContext.Provider>
  )
}
