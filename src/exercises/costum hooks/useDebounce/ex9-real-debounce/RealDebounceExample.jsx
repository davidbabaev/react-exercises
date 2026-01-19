import React, { useState } from 'react'
import useDebounce from './useDebounce'

export default function RealDebounceExample() {

  const [search, setSearch] = useState('')

  const debounceSearch = useDebounce(search, 1000);
                                //      ↓      ↓
                                  //  value  delay
// 1. create staet: debounceValue (start as  "dearch" value)
// 2. useEffect runs when 'search' changes
// 3. start timer (1000ms)
// 4. after 1 second: update deenounceValue
// 5. return debounce to component.

  return (
    <div>
      <h2>simple debounce</h2>
      <input 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Type to search...'
      />

      <div>
        <p>Instant: {search}</p>
        <p>Delay: {debounceSearch}</p>
      </div>
    </div>
  )

//  We need to learn: Costum useDebounce Hook
//  every time you need debounce, you write: 
// useState (2 states)
// userRef(timer)
// useEffect(logic)
// cleanup
// that's a lot of repetition!

// The Solution:
// function useDebounce(value, delay) {
    // all the debounce logic here
//     return debounceValue;
// }

// Use Everywhere:
// const debounceSearch = useDebounce(search, 1000);
// const debounceName = useDebounce(name, 2000);
// const debounceEmail = useDebounce(email, 5000);

}
