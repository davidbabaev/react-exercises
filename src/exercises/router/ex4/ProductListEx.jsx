import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProductListEx() {
    const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 },
    { id: 3, name: 'Tablet', price: 499 }
];

    const navigate = useNavigate();

  return (
    <div>
        {products.map((item) => (
            <div key={item.id}>
                <p>{item.name} - ${item.price}</p>
                <button onClick={() => navigate(`/product/${item.id}`)}>
                    View Details
                </button>
            </div>
        ))}
    </div>
  )
}
