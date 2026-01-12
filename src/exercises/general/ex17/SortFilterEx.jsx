import React from 'react'

export default function SortFilterEx() {

    const products = [
      { name: "Headphones", price: 150 },
      { name: "Phone Case", price: 25 },
      { name: "iPhone 15", price: 999 },
      { name: "Samsung Phone", price: 799 },
      { name: "Laptop", price: 1200 },
    ];

    // we need to check if the names include the word 'phone'
    // we need to filter it and show the names with the word phone in them

    const word = 'phone';

    const filterPhone = products.filter(item =>
        item.name.toLowerCase().includes(word.toLowerCase())
    )
    // console.log(filterPhone);

    // sort by price low to high
    const sortPrice = [...filterPhone].sort((a,b) => a.price - b.price);
    // console.log(filterPhone);
    console.log(sortPrice);
    
    

  return (
    <div>SortFilterEx</div>
  )
}
