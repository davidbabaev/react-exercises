import { Compare } from '@mui/icons-material';
import React from 'react'

export default function SortPracticing() {

    // sort(): A method that arranges items in an array in order.
    // array of numbers unsorted:
    const numbers = [5, 2, 8, 1, 9];

    // sort them:
    let sorted = numbers.sort((a,b) => a - b);
    // Result: [1, 2, 5, 8, 9]
    // console.log(sorted);

    // Numbers - Ascending (1, 2, 3...)
    // array.sort((a, b) => a - b);

    // Numbers - Descending (3, 2, 1...)
    // array.sort((a, b) => b - a);

    // Strings - A to Z
    // array.sort((a, b) => a.localeCompare(b));

    // Strings - Z to A
    // array.sort((a, b) => b.localeCompare(a));

    // Objects - by name (A-Z)
    // array.sort((a, b) => a.name.localeCompare(b.name));

    // Objects - by age (youngest first)
    // array.sort((a, b) => a.age - b.age);

    // Always copy first in React!
    // const sorted = [...array].sort(...);

    const users = [
        { name: "Charlie", age: 25 },
        { name: "Alice", age: 30 },
        { name: "Bob", age: 20 },
        { name: "Anna", age: 35 }
    ];

    // Filter: Only users with names starting with "A":
    const filtered = users.filter((user) => {
        return user.name.startsWith('A');
    })
    // console.log(filtered);

    const sorted2 = [...users].sort((a,b) => a.name.localeCompare(b.name));
    // console.log(sorted2);
    
    // making duplicated of the users array and put it in sorted
    // if we compare the two variables we will get false
    // const sorted2 = [...users]

    // .sort() changes the original array so we need to do new seperate copy of out array and do the sort on the copy, we never changing our original array.

    // what is localCompare();
    // A method that compares two strings and tells you their alphabetic order.
    // string1.localCompare(string2);

    //  !== : 
    // -> checks if equal or not
    // -> true or false 
    // -> ara they the same?

    // .localCompare :
    // -> compares order (which comes first) 
    // -> -1, 0 or 1
    // -> which comes first alphabetically

    // Why use .localCompare() instead of -?
    // because we can use - for numbers but what about strings?
    // numbers.sort((a,b) => a - b);

    // can't substract strings!
    // names.sort((a,b) => a, b)
    // This Work:
    // names.sort((a,b) => a.localCompare(b));

    const result = 'Alice'.localeCompare('Bob') // = -1
    console.log(result);
    // we get -1 in the log (negtive number)
    // Because a comes before b in alphabet
    // So alice should come first

    const result2 = 'Bob'.localeCompare('Alice') // = 1
    console.log(result2);

    const result3 = 'Alice'.localeCompare('Alice') // = 0
    console.log(result3);


    // -1 -> does not mean 'false'
    // -1 -> means: 'Alice' comes BEFORE Bob alphabetically
    // -1 -> this is the correct alphabetical order
    // -1 -> A Comes before B

    // 1 -> 'Bob' comes AFTER 'Alice' alphabetically
    // 1 -> they need to be swapped to be in correct order
    // 1 -> B comes After A

    // All these return NEGATIVE (first comes first):
    // "A".localeCompare("Z")        // -1 ✅ A before Z
    // "apple".localeCompare("zoo")  // -1 ✅ apple before zoo
    // "cat".localeCompare("dog")    // -1 ✅ cat before dog

    // // All these return POSITIVE (second comes first):
    // "Z".localeCompare("A")        // +1 ❌ Need to swap
    // "zoo".localeCompare("apple")  // +1 ❌ Need to swap
    // "dog".localeCompare("cat")    // +1 ❌ Need to swap

    // // All these return ZERO (equal):
    // "cat".localeCompare("cat")    // 0 ✅ Same
    // "test".localeCompare("test")  // 0 ✅ Same
    
    //     ## ✅ **Summary:**

    // | Return Value | Meaning | Alphabetical Order | Action Needed |
    // |--------------|---------|-------------------|---------------|
    // | **Negative (-1)** | First string comes first | ✅ Already correct | Keep as is |
    // | **Positive (+1)** | Second string comes first | ❌ Wrong order | Swap them |
    // | **Zero (0)** | They're equal | ✅ Same | No change |

    const numbers2 = [8, 2, 5, 1, 9, 3, 7];

    // step 1: filter (keep only >=5)
    const filtered2 = numbers2.filter((num) => {
        return num >= 5
    })
    // console.log('After filter: ',filtered2);

    // step 2: Sort (low to high)
    const sortIt = [...filtered2].sort((a,b) => a - b);
    // console.log('After Sort: ', sortIt);

    const chained = 
        numbers2.filter(num => num >= 5).sort((a,b) => a - b);
    
    // console.log(chained);

    const names = ["Charlie", "Alice", "Bob", "Anna", "David"];

    // step 1: filter (names with 'a')
    const filtredN = names.filter(name => 
        name.toLowerCase().includes('a')
    )
    console.log(filtredN);

    //step 2: Sort (A-Z)
    const sortedN = [...filtredN].sort((a,b) => a.localeCompare(b));
    console.log('After Sort: ', sortedN);
    
    
    
    
    
    
    return (
        <div>SortPracticing</div>
    )
}
// sort take two items at a time: (a,b)
// compare 5 and 2:
// a = 5, b = 2
// a - b <==> 5 - 2 = 3 (positive)  
// b comes first

// if a - b is negative -> a comes first    
// if a - b is positive -> b comes first
// if a - b is zeo order stays same

// you're thinking:
// const numbers = [5, 2]
//                  ↑  ↑
//                  0  1  (index positions) 
// So shouldn't a = 5 (first time)?

// But .sort doesn't compare by index position!
// .sort() compares items in pairs, and the order changes as it sorts!

// a and b are NOT 'first' and 'second' in the array!
// They are just two items being compared.
// the sort algorithm pick which two items to compar, and in wht order.

// a is not always the first item 
// b is not always the second item
// sort picks items in an efficient order

// don't think about it as:
// a = first item
// b - second item

// think of it as:
// a = one item
// b = another item
// (could be any two items from the array)

// put smaller number before larger number
// The sort algorithm handles:
// which items to compare
// in what order to compare them
// how many comparisons to make
// when to swap items
// you just tell it the RULE!

// the only rule you need:
// (a, b) => a - b
// means: i want smaller number first
// that's all you need to know!
// The javaScript engine handles everything else.
