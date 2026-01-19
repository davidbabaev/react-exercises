import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeProductEx() {

    const navigate = useNavigate();

  return (
    <div>
        <h1>Welcome to out home page</h1>
        <button
            onClick={() => navigate(`/productslist`)}
        >Browse Products</button>
    </div>
  )
}
