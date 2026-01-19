import React from 'react'

export default function LikersList({like, unLike, reset, isLock, value, likers, onRemove, isFavorite, favoritesArray}) {
  // Child - has a like button
  const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    color: 'black'
  };

  return (
    <div>
      <button style={{...buttonStyle}} onClick={like}>Like ❤️</button>
      <button style={{...buttonStyle}} onClick={unLike} >Dislike 💔</button>
      <button style={{...buttonStyle}} onClick={reset} >Reset 🔄</button>
      {/* <button style={{...buttonStyle}}  >Favorite ⭐</button> */}
      <button style={{...buttonStyle}} onClick={isLock}>{value ? '🔒 Unlock' : '🔓 Lock'}</button>
      <div>
      {likers.map((name, index) => (
        <div key={index}>
            <p 
              style={{fontFamily: 'fantasy', fontSize:'30px'}}>{name} Clicked Like
            </p>
            {favoritesArray.includes(index) && (<p style={{fontFamily: 'fantasy', fontSize:'10px'}}>⭐ Favorite!</p>)}
            <button 
              style={{...buttonStyle}} 
              onClick={() => onRemove(index)} 
            >
                Delete
            </button>
            <button 
              style={{...buttonStyle}}
              onClick={() => isFavorite(index)}
            >
              Toggle Favorite ⭐
            </button>
        </div>
      ))}
      </div>
    </div>
  )

  // where do we do the styles: 
  // the child has the <button> element
  // the child render them
  // so the child styles them

}
