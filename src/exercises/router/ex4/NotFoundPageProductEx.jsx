import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPageProductEx() {

    const navigate = useNavigate();

  return (
    <div>
        <h1 style={{fontSize: '100px', margin: '0px'}} >404</h1>
        <h2 style={{margin: '0px'}}>Page Didn't Founded</h2>
        <button onClick={() => navigate('/home')}>Back Home</button>
    </div>
  )
}
