import React, { useState } from 'react'
import ProductFormChild from './ProductFormChild';

export default function ProductFormParent() {

    // the parent get the data from the child and shows it dinamically
    // having state for getting the submitted data form the child
    // inport the Child and pass in the props the function that handle the submitted data
    // make function for handaling the submitted data
    const [submittedData, setSubmittedData] = useState(null);

    // 
    const handleData = (userData) => {
        setSubmittedData(userData);
    }


  return (
    <div>
        <ProductFormChild handleData = {handleData}/>
        
        {submittedData ? (
        <div>
            <p>name: {submittedData.name}</p>
            <p>email: {submittedData.email}</p>
            <p>age: {submittedData.age}</p>
        </div>
        ) : (
            <p>No data submitted yet</p>
        )}
    </div>
  )
}
