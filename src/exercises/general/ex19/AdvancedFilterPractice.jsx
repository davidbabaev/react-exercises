import React, { useState } from 'react'

export default function AdvancedFilterPractice() {
    const users = [
        { id: 1, name: "Alice", city: "New York" },
        { id: 2, name: "Bob", city: "London" },
        { id: 3, name: "Charlie", city: "New York" },
        { id: 4, name: "David", city: "Paris" },
        { id: 5, name: "Eve", city: "London" },
        { id: 6, name: "Frank", city: "Paris" }
    ];

    // state for search input
    const[searchName, setSearchName] = useState('');

    const[selectedCity, setSelectedCity] = useState('');

    const handleSearch = (e) => {
        setSearchName(e.target.value)
    } 

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value)
    }

    // Filter 1: filter the array by name
    const filterName = users.filter(user =>
    //                  ↑
    //                  users stays UNCHANGED
    //                  filter returns a NEW array with only matching items
        user.name.toLowerCase().includes(searchName.toLocaleLowerCase())
    )
    // console.log(users);
    // console.log(filterName); // [Bob] ← NEW filtered array

    // Filter 2: filter by city (starting from filteredName)
    let filterByCity = filterName;
    //      ↑              ↑
    //      |              └─ Copy the name-filtered array
    //      └─────────────── We'll update this IF city is selected

    // filterByCity:
    // Create a bo called filterByCity and put the same things from
    // filterByName into it
    // filterByCity will be copy of = filterByName
    // both boxes have now the same content

    // why do we need this:
    // 1.First by name.
    // 2.Then maybe by city (if user selects one)
    // filterByCity now contains the same object
//     filteredByCity = [
    //   { id: 1, name: "Alice", city: "New York" },// ← Has city property!
    //   { id: 3, name: "Charlie", city: "New York" },// ← Has city property!
    //   { id: 4, name: "David", city: "Paris" },// ← Has city property!
    //   { id: 6, name: "Frank", city: "Paris" }// ← Has city property!
// ]



    // What do we filter next
    // if selecterCity = 'New York'
    // Check each object
    if(selectedCity !== ''){
        filterByCity = filterName.filter(user => 
            // we need a variable to store the result!
            user.city === selectedCity
        );
    }

    // why are actually save the filterName filtered objects in the filterByCity.

    // beacuse what happens when no city is selected?
    // selectCity = '' -> user didn't select a city
    // let filteredByCity = filteredByName.filter(user => 
        // user.city === '' ? <- no user has city ''!  
    // )
    // result:
    // filteredByCity = []
    // But we want to show all name-filtered users when no city is selected
    // by deafult filterByCity will be shown beacuse it didn't changed beacuse this function did not run because of the if check
    // so filterByCity just bt same as filterName
    // and the user can see on the screen the object that filtred by the name that he put in the input, without choosing the city filter,
    //if he choose the city, the fuction of the city filter will start, and give him back the filtred variable that include in it the filtred names and city also that saved in it.


    // filteredByName[1] = { id: 3, name: "Charlie", city: "New York" }
    // → user.city = "New York"
    // → "New York" === "New York" → true ✅ → KEEP

    // filteredByName[2] = { id: 4, name: "David", city: "Paris" }
    // → user.city = "Paris"
    // → "Paris" === "New York" → false ❌ → REMOVE

    // ==================================================================
    // ==================================================================
    // My Own Understanding of that Logic:
    // i still don't understand 

    // filterByCity = filterName.filter
    // filterByCiy abd filterByName are the same, we
    // we did this:

    // let filterByCity = filterName;
    // not filtered by city filterName has the array of objects that filtered by the state input logic,
    // now we put it in the variable filterByCity;

    // ok, now we take 

    // filterByCity
    // doing:

    // filterByCity = filterName.filter
    // it's mean filteredByCity has the copy of the filterName, and now,
    // we will take the filterName objects filter them we the city check and save it in the filterByCith that was same as filterName so far, but now it will change to filtred by city also

    // is that kind of right?

    // ___________________________________________________
    // let filterByCity = filterName;
    // the are the same now
    // filteredByName = [Alice(NY), Charlie(NY), David(Paris), Frank(Paris)]
    // filteredByCity = [Alice(NY), Charlie(NY), David(Paris), Frank(Paris)]    

    //     if(selectedCity !== ''){
    //     filterByCity = filterName.filter(user => 
    //         // we need a variable to store the result!
    //         user.city === selectedCity
    //     );
    // }

    // we need to take the filterByCity that have just copy of filtered array that takes input state check if in the input we have name as in the array of objects,
    
    // ok, now we take the filterByCity and put in it filterByName (again)
    // but why,
    // because now we take the filterByName and do filter manupulation on it, and we want to save it in a variable that already have a filtred names, now it will have also the filtered city.
    // the filterCityName not changing, because we save the city filter in the city variable, but doing filter manipulation on filterName to take the city.

    // ==================================================================
    // Claude:
    // ✅ Your Understanding (Perfectly Correct!):
    // Step 1: filteredByName has objects filtered by name (from input search)
    // Step 2: We copy it: let filteredByCity = filteredByName
    // Step 3: Now both have the SAME objects
    // Step 4: We take filteredByName, filter it by city, and SAVE the result in filteredByCity
    // Step 5: Now filteredByCity changes to be filtered by city also!
    // ==================================================================

    

  return (
    <div>
    <h1>Filter Practice</h1>
    <input 
        value={searchName}
        onChange={handleSearch}
    />
    <div>
        <label>Filter bt city: </label>
        <select 
            value={selectedCity}
            onChange={handleCityChange}
        >
            <option value="">All Cities</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
        </select>
    </div>

    <div style={{padding:'20px'}}>
        {/* display all users */}
        {filterByCity.map((user) => (
            <div key={user.id} style={{border: '1px solid black', padding: '10px'}}>
                <p>{user.name} from {user.city}</p>
            </div>
        ))}
    </div>
    </div>
  )
}
