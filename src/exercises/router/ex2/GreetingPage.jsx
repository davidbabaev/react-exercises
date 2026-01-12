import React from 'react'
import { useParams } from 'react-router-dom'

export default function GreetingPage() {

    const params = useParams();
    console.log(params);
    

  return (
    <div>
        <h1>Hello, {params.name}</h1>
    </div>
  )
}
