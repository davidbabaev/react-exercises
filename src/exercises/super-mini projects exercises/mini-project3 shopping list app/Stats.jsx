import React, { useContext } from 'react'
import { ShoppingContext } from './ShoppingContext';

export default function Stats() {
    // Shows total, bought items, ubought Items.
    const {
      items, 
    } = useContext(ShoppingContext);

    const boughtFilter = items.filter((objectItem) => {
        return objectItem.bought === true
      })

    const unBoughtFilter = items.filter((objectItem) => {
        return objectItem.bought === false
      })

  return (
    <div>
      <h2>stats</h2>
      <div style={{display: 'flex', gap: '20px'}}>
      {items.length === 0
      ? (<p>Items 0, No Items Yet</p>) 
      : (<p>Total Items: {items.length}</p>)}
      <p>Bought Total: {boughtFilter.length}</p>
      <p>Unbought Total: {unBoughtFilter.length}</p>
      </div>
    </div>
  )
}
