import React from 'react'

export default function ShoppingChild({checkBuyers, names, buyers}) {
  return (
    <div>
        {names.map((name, index) => (
            <div key={index}>
                <p>{name}</p>
                <button
                    onClick={() => checkBuyers(index)}
                >Click</button>
                {buyers.includes(index) && (<p>Hello</p>)}
            </div>
        ))}
    </div>
  )

    // Loop 1: dave (index 0) 
    // {buyers.includes(0) && (<p>Hello</p>)}
    //        ↑__________↑____↑
    //      [].includes(0) → false
    //      false && <p>Hello</p>
    //      Result: Shows NOTHING
    // 
    // if we didn't click any btn so is false
    // so it's can't show the <p>
    // 
    // ____________________________________________
    // <div>
    // <p>natali</p>
    // <button>Click</button>
    
    // {buyers.includes(1) && (<p>Hello</p>)}
    // //      ↑_________↑____↑
    // //      [].includes(1) → false
    // //      Result: Shows NOTHING
    // </div>
    // _____________________________________________
//     <div>
//     <p>avi</p>
//     <button>Click</button>
    
//     {buyers.includes(2) && (<p>Hello</p>)}
//     //      ↑_________↑____↑
//     //      [].includes(2) → false
//     //      Result: Shows NOTHING
// </div>
// ```

// **What user sees:**
// ```
// dave     [Click]
// natali   [Click]
// avi      [Click]
// _________________________________________________

// {names.map((name, index) => (
//     // Current loop: name="natali", index=1
    
//     <button onClick={() => checkBuyers(index)}>
//     //              ↑___________________↑___↑
//     //              Calls function      with 1
//         Click
//     </button>
// ))}


}
