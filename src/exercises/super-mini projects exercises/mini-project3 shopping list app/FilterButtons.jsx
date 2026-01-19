import React, { useContext } from 'react'
import { ShoppingContext } from './ShoppingContext';

export default function FilterButtons() {
    // Shows: Buttons to filter (all/ bought, unbought)
    const {
      filter,
      setFilter
    } = useContext(ShoppingContext);

  return (
    <div>
      <button onClick={() => setFilter('all')}>Show All</button>
      <button onClick={() => setFilter('bought')} >Show Bought</button>
      <button onClick={() => setFilter('unbought')}>Show Unbought</button>
    </div>
  )
}
