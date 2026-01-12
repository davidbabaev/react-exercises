import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductDetailEx() {

    const {id} = useParams();
    const navigate = useNavigate();

    const products = [
        { id: 1, name: 'Laptop', price: 999 },
        { id: 2, name: 'Phone', price: 699 },
        { id: 3, name: 'Tablet', price: 499 }
    ];

    // validate checks if id  is a valid number:
    const numberId = parseInt(id); // take id path string and convert to number
    const isValidId = !isNaN(numberId) && id === numberId.toString()

    if(!isValidId){
        return(
            <div>
                <h1>Invalid Product</h1>
                <p>Product ID {id} is not valid</p>
                <button onClick={() => navigate('productlist')}>Back to products</button>
            </div>
        )
    }

    // find product
    const product = products.find(p => p.id === parseInt(id));
    
    if(!product){
        return (
            <div>
                <h1>Product Not Found</h1>
                <p>Product with {id} odes not exist</p>
                <button onClick={() => useNavigate('/productslist')}>Back to product list</button>
            </div>
        )
    }
    
  return (
    <div>
        <h1>{product.name}</h1>
        <p>Price: ${product.price}</p>
        <button style={{marginRight:'10px'}} 
            onClick={() => {product.id < 3 && 
                (navigate(`/product/${product.id + 1}`))
            }}
        >NEXT</button>
        <button onClick={() => navigate(`/productslist`)}>BACK TO PRODUCTS</button>
    </div>
  )
}

// Step 1: id = "1f" (original string)
// Step 2: numberId = parseInt("1f") = 1
// Step 3: numberId.toString() = "1"
// Step 4: "1f" === "1" → false ❌
//          ↑↑↑    ↑
//          Not the same!

// Fails! ❌

    // const {id} = useParams();
    // this asks router:
    // what did you capture from the URL?
    // Router response: { id: '2' }
    // so id = 2 (from the URL)

//     Router sees route:
// <Route path='/product/:id' ... />
//                       ↑↑
//               This captures it

// Router creates object:
// { id: "2" }
//      ↑
// From URL position!

// useParams() retrieves it:
// const {id} = useParams();
// // id = "2"

// You use it to find product:
// products.find(p => p.id === parseInt("2"))
//                                       ↑
//                                  From URL!

// const {id} = useParams();
// //     ↑↑
// //     MUST match the name in route!

{/* <Route path='/product/:productId' ... />
//                     ↑________↑
//   */}
// const {productId} = useParams();  // ✅ Correct!
// //     ↑________↑
// //     Must match route!
