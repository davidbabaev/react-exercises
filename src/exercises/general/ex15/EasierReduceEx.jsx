import React from 'react'

export default function EasierReduceEx() {

    // create an empty object
    const myObject = {};

    // let's add properties:
    myObject['name'] = 'dave';
    // result -> {name: 'dave'}
    myObject['age'] = 25;
    // result -> {age: 25}
    myObject['city'] = 'NYC';

    // console.log(myObject);

    // now with a variable
    const propertyName = 'job';
    myObject[propertyName] = 'Developer'; // Same as: myObject['job'] = 'Developer';

    // console.log(myObject);

    // *******************************
    const groups = {};

    // add an empty array called 'fruits'
    groups['fruits'] = [];
    // groups = {fruits = []}
    console.log(groups);

    groups['fruits'].push('Apple');
    groups['fruits'].push('Banana');

    groups['vegetables'] = []; // --> crate secons empty array with key value vegetables -> groups = {fruits = [], vegetables = []}
    groups['vegetables'].push('Carrot');
    groups['vegetables'].push('Broccoli');
    

    // Now With Variables As Keys

    const groupSecond = {};

    // Instead of hard-coding 'cars', use a variable
    const categoryName = 'cars';

    groupSecond[categoryName] = []
    groupSecond[categoryName].push('Mercedes');
    groupSecond[categoryName].push('Bmw');
    groupSecond[categoryName].push('Lamborgini');


    const categorySecond = 'clothesBrands';
    groupSecond[categorySecond] = [];
    groupSecond[categorySecond].push('Luis Vuitton')
    groupSecond[categorySecond].push('Adidas')


    // console.log(groupSecond);
    

    // *******************************

    const groupsThird = {};

    // check if 'phones' exists
    if(!groupsThird['phones']) {
        console.log('Phones not exist! lets create it');
        groupsThird['phones'] = []; // --> groupsThird = {phones = []}
    }

    console.log(groupsThird);
    
    if(!groupsThird['phones']){
        console.log('This wont print - phones exists now!');
    } else {
        console.log('phones exist');
    }


    // *******************************

    // Exercise 4: Simple grouping (No reduce yet)
    const items = ["Apple", "Carrot", "Banana", "Broccoli"];
    const types = ["fruit", "vegetable", "fruit", "vegetable"];

    const groupsfifth = {};

    // Manually group first item
        const item1 = items[0] // Apple
        const type1 = types[0] // fruit

    // check if 'fruit' category exists
    if(!groupsfifth[item1]){
        groupsfifth[type1] = [];
    }

    groupsfifth[type1].push(item1) // Add Apple

    console.log('After item 1: ', groupsfifth);
    // {fruit: ['Apple']}

    // manually group second item
    const item2 = items[1] // 'Carrot'
    const type2 = types[1] // 'vegetables'

    if(!groupsfifth[type2]){
        groupsfifth[type2] = [] // create it
    }
    groupsfifth[type2].push(item2);
    
    console.log('After Item 2: ', groupsfifth);
    // {fruit: ['Apple], vegetable: ['Carrot]}

    // Manually group third item
    const item3 = items[2] //'Banana'
    const type3 = types[2] //'fruit'
    
    if(!groupsfifth[type3]){
        groupsfifth[type3] = [];
    }
    groupsfifth[type3].push(item3);

    console.log('After Item 3: ', groupsfifth);
    // {fruit: ['Apple', 'Banana'], vegetable: ['Carrot]}
    

  return (
    <div>
        <h1>Object With Arrays</h1>
        <h2>Fruits</h2>
        {groups.fruits.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
        <h2>Vegetables</h2>
        {groups.vegetables.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
        <h2>Cars</h2>
        {groupSecond.cars.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
        <h2>Brands</h2>
        {groupSecond.clothesBrands.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
    </div>
  )
}
