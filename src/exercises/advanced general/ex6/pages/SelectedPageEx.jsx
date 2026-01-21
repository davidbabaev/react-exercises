import React from 'react'
import useSelectedUsersEx6 from '../hooks/useSelectedUsersEx6'
import useFavoriteCardsEx6 from '../hooks/useFavoriteCardsEx6'

export default function SelectedPageEx() {

    const {selectedUsers, handleRemove} = useSelectedUsersEx6()
    const {favoriteCards} = useFavoriteCardsEx6();

  return (
    <div>
        <div>
            <h2>Selected Users</h2>
            {!selectedUsers[0] && (<p>You Didn't Select Users  Yet</p>)}
            {selectedUsers.map((selected) => (
                <div key={selected.userId}>
                    <img style={{borderRadius: '50%'}} src={selected.photo}/>
                    <p>{selected.name}</p>
                    <button onClick={() => handleRemove(selected)}>Remove</button>
                    <hr />
                </div>
            ))}
        </div>


        <div>
            <h2>Selected Cards</h2>
            {favoriteCards.map((favCard) => (
                <div style={{
                    border: 'solid black 1px', 
                    padding: '20px', 
                    borderRadius: '20px', 
                    margin: '20px 0px'
                }} key={favCard.cardId}>

                    <h2>{favCard.title}</h2>
                    <p>{favCard.text}</p>
                    <img src={favCard.img} style={{
                        width: '500px',
                        borderRadius: '20px'
                    }}/>
                    <hr />
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'row', 
                        gap: '10px'
                    }}>
                        <p>Posted by: {favCard.userName}</p>
                        <p>|</p>
                        <p>Created at: {new Date(favCard.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
            ))}
        </div>
        
    </div>
  )
}
