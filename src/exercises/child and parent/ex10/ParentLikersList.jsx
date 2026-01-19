import React, { useState } from 'react'
import LikersList from './ChildLikersList';

// let apiKey = 'MHkvdSO4PCF0O96r/nH3TQ==R4YsZN8Mlqgvi9zA'

export default function LikerListParent() {

// Parent - toal number of likes

  const [likersNames, setLikersNames] = useState([]);

  // handle favorite arr
  // favorites = [1, 2]  means index 1 and 2 are favorites
  const [favorites, setFavorites] = useState([]);
  const isFavorite = (index) => {
    if(favorites.includes(index)) {
      //remove from favorites
      setFavorites(favorites.filter(i => i !== index))
    }
    else{
      setFavorites([...favorites, index])
    }
  }
  
  const [isLocked, setIsLocked] = useState(false);
  const ifLocked = () => {
    setIsLocked(!isLocked);
    if(isLocked){
      console.log('🔒 Unlock');
    } else {
      console.log('🔓 Lock');
    }
  }

  const fetchUser = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/randomuser', {
      headers: {
        'X-Api-Key': 'MHkvdSO4PCF0O96r/nH3TQ==R4YsZN8Mlqgvi9zA'

      }
    });
    const data = await response.json();
    const user = data.name;
    console.log(user); // show the name that fetched

    setLikersNames((prev) => [...prev, user])
  }

  const [count, setCount] = useState(0);
  const countIt = () => {
    setCount((prev) => prev + 1);
    fetchUser();
  }
  console.log(likersNames); // the the updated array on fetched names

  const CountItMinus = () => {
    setCount((prev) => prev - 1)
  }

  const resetAll = () => {
    setCount(0)
  }

  // indexToRemove -> which position to delete
  // prev -> get current array
  // filter -> loop through the array state
  // item -> each item
  // index -> position in array
  // return index !== indexToRemove -> keep if NOT the one we want to remove
  const removeUser = (indexToRemove) => {
    //Filter keeps everythng where index is not one to remove
    setLikersNames((prev) => prev.filter((item, index) => {
      return index !== indexToRemove
    }))
    CountItMinus();
  };

  return (
    <div>
      <p>{count}</p>
      <LikersList like = {countIt} unLike = {CountItMinus} reset = {resetAll} isLock = {ifLocked} value = {isLocked} likers = {likersNames} onRemove = {removeUser} isFavorite = {isFavorite} favoritesArray={favorites}/>
      {/* <p>{isLocked? '🔒 Unlock' : '🔓 Lock'}</p> */}
    </div>
    
  )
}
