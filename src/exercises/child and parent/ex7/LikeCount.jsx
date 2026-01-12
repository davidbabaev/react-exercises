import React, { useState } from 'react'
import LikeBtn from './LikeBtn';

export default function LikeCount() {
// Parent - toal number of likes

  const [likersNames, setLikersNames] = useState([]);
  
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
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0].name.first;
    console.log(user);
    setLikersNames((prev) => [...prev, user])
  }

  const [count, setCount] = useState(0);
  const countIt = () => {
    setCount((prev) => prev + 1);
    fetchUser();
  }
  console.log(likersNames);

  const CountItMinus = () => {
    setCount((prev) => prev - 1)
  }

  const resetAll = () => {
    setCount(0)
  }

  return (
    <div>
      <p>{count}</p>
      <LikeBtn like = {countIt} unLike = {CountItMinus} reset = {resetAll} isLock = {ifLocked} value = {isLocked} likers = {likersNames}/>
      {/* <p>{isLocked? '🔒 Unlock' : '🔓 Lock'}</p> */}
    </div>
    
  )
}
