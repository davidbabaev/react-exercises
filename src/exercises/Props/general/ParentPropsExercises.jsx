import React from 'react'
// import UserCard from './UserCard'
import PriceCard from './PriceCard'
import StudentCard from './StudentCard'
import UserCard from './UserCard'


function ParentPropsExercises() {
/*   return (
    <div>
        <UserCard 
        name= 'Alice' 
        age = {25} 
        city = 'London'
        />
        <UserCard 
        name= 'Bob' 
        age = {30} 
        city = 'New York'
        />
        <UserCard 
        name= 'Charlie' 
        age = {26} 
        city = 'Tokyo'
        />
    </div>
  ) */

  // *******************************************
/*     return(
      <div>
        <PriceCard 
        product = 'Laptop' 
        price = {1000} 
        discount = {10}
        />
        <PriceCard 
        product = 'Phone' 
        price = {500} 
        discount = {20}
        />
      </div>
    ) */
  // *******************************************
  
  /*   return(
    <div>
    // *******************************************
      <StudentCard
        name = 'Alice'
        grades = {[90, 85, 88]}
        isPassing = {true}
      />
      <StudentCard
        name = 'Bob'
        grades = {[55, 65, 78]}
        isPassing = {false}
      />
    </div>
  ) */

    return (
    <div>
        <UserCard 
        name= 'Alice' 
        age = {25} 
        city = 'London'
        />
        <UserCard 
        name= 'Bob' 
        age = {30} 
        city = 'New York'
        />
        <UserCard 
        name= 'Charlie' 
        age = {26} 
        city = 'Tokyo'
        />
    </div>
  ) 

  }

export default ParentPropsExercises