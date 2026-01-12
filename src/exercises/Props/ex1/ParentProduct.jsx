import React from 'react'
import ProductCard from './ProductCard'


export default function ParentProduct() {
  return (
    <div>
        <ProductCard
            name= "Laptop"
            price = {1220}
            inStock = {true}
        />
        <ProductCard
            name= "Phone"
            price = {820}
            inStock = {true}
        />
        <ProductCard
            name= "HeadPhones"
            price = {120}
            inStock = {false}
        />
    </div>
  )
}
