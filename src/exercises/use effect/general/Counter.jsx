import { useEffect, useState } from "react";


export default function Counter() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = `Count: ${count}`;  // ✅ Good!
    }, [count]);  // Run when count changes
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <p>hi</p>
        </div>
    );
}


// **What happens:**

// 1. Component renders with count = 0
// 2. useEffect runs: document.title = "Count: 0"
// 3. User clicks button
// 4. count becomes 1
// 5. Component re-renders
// 6. useEffect runs: document.title = "Count: 1"