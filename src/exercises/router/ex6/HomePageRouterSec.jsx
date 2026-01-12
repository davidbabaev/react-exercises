import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomePageRouterSec() {
  
  const navigate = useNavigate();

  // example: Navigate to product with id 1
  const handleClick = () => {
    navigate('/shopsec/product/1')
  }

  return (
    <div>
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est dolores incidunt numquam sapiente, dignissimos temporibus impedit beatae quam quas esse, voluptatum qui sit quis molestiae quisquam laudantium. Libero, perferendis tempore explicabo magni consequatur, placeat itaque quas fuga reprehenderit fugit ut provident! Vel vitae, consectetur esse sit aliquid quasi illum.</p>
        <button onClick={handleClick} >Click</button>
    </div>
  )

  // rule:
  // You can't use <Link> inside onClick:
  // <button onClick={<Link to={`/shopsec/${id}`}/>} >Click</button>


  // useParams in the wrong place:
  // we don't need useParams in HomwPageRouter:
  // const {id} = useParams(); -> theres no id in this route

  // <Route path = '/home/' element ={<HomePageRouterSec/>} />
  //        No :id here! ↑

}
