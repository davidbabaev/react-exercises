import { useState } from "react";

function useList(){
    const [items, setItems] = useState([]);
    // create staet that holds an array
    // to store our list of items

    // create a function to add items
    const addItem = (item) => {
        setItems([...items, item])
    }
    // items = ['Apple', 'Banana']
    // addItem('Orange')
    // setItems([...items, 'Orange])
    // setItems(['Apple', 'Banana', 'Orange'])
    // //          ↑ Copy old items   ↑ Add new item
    // result = ['Apple', 'Banana', 'Orange']
//                  0         1        2       ← These are indices
    

    // someone clicks remove on 'Banana' (index 1):
    // removeItem(1);

    // visual loop:
    // loop 1:
    // item = 'Apple', i = 0
    // check: 0 !== 1? YES
    // keep: 'Apple'

    // loop 2:
    // item = 'Banana', i = 1
    // check: 1 !== 1? NO because it's equal 1 === 1
    // skip: 'Banana' -> This one gets removed.

    const removeItem = (index) => {
        // we do check, if something not not working by that check we removed that, but if something work as the check, we keep it
        // it's mean if the i !== not equal the index so we keep it
        // if the i !== equal === the index so we filter it out, remove it. 
        const newItmes = items.filter((_, i) => i !== index)
        setItems(newItmes);
    };

    // just empty the array, give as the state with an empty array when we call this function state
    const clear = () => {
        setItems([]);
    };



    return [items, addItem, removeItem, clear];
}

export default useList;