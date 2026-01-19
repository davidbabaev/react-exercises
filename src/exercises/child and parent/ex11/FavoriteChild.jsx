import React from 'react'

export default function FavoriteChild({names, favorites, onToggle}) {
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
        {names.map((name, index) => (
            // map gives us index of the name item automatocally on each loop
            <div 
                key={index} 
                style={{ padding: '10px', margin: '10px 0', border: '1px solid #ccc' }}>
                <p style={{fontSize: '20px'}}>{name}</p>
                <button
                    style={{...buttonStyle}}
                    onClick={() => onToggle(index)}
                >Toggle Favorite</button>

            
                {favorites.includes(index) && (
                    <p>Favorite!</p>
                )}
            </div>
        ))}
    </div>
  )

//   the index parameter is just a NUMBER that comes from the child
// but we compare it to the favorites state array if it's already favorite

}
