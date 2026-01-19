import React, { useEffect } from 'react';

export default function LogAfterRender() {
    console.log("1. Component is rendering...");

    useEffect(() => {
        console.log("2. useEffect ran after render!");
    });

    return <h1>Hello World</h1>;
}

// Console Output:
// 
// 1. Component is rendering...
// 2. useEffect ran after render!
// ```

// ### **What Happened:**
// ```
// Step 1: React runs component function
// Step 2: React displays <h1>Hello World</h1>
// Step 3: THEN React runs useEffect