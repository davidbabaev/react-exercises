import React, { useState } from 'react'
import { useCardsProvider } from '../providers/CardsProviderEx6'
import { useAuthEx6 } from '../providers/AuthProviderEx6'

export default function UserDashboardEx6() {

    const {registeredCards, handleDeleteCard, handleEditCard} = useCardsProvider()
    const {user} = useAuthEx6();
    const [editingCardId, setEditingCardId] = useState(null);

    // edit values states:
    const [editTitle, setEditTitle] = useState('');
    const [editText, setEditText] = useState('');
    const [editImg, setEditImg] = useState('');
  
    const myCards = registeredCards.filter(card => card.userId === user.userId)

  return (
    <div>
        <h1>Your Dashboard</h1>
        {myCards.length === 0 && <p>You haven't created any cards yet.</p>}
        {myCards.map((card) => (
          <div style={{
            border: 'solid black 1px', 
            padding: '20px', 
            borderRadius: '20px', 
            margin: '20px 0px'
            }} key={card.cardId}>
              {editingCardId === card.cardId ? (
                // yes - I am being edited -> show form
                <div>
                  <p>EDITING:</p>
                  <hr />
                  <input 
                    placeholder='Title'
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}  
                  />
                  <input
                    placeholder='Text'
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}  
                  />
                  <input 
                    placeholder='Image: https://example.com/image.jpg'
                    value={editImg}
                    onChange={(e) => setEditImg(e.target.value)}  
                  />
                  <button onClick={() => setEditingCardId(null)}>Cancel</button>
                  <button
                    onClick={() => {
                      handleEditCard(card.cardId, editTitle, editText, editImg)
                      setEditingCardId(null)
                    }}
                  >Save</button>
                </div>
              ) : (
                // no - I am not being edited -> show normally
                <div>
                    <h2>{card.title}</h2>
                    <p>{card.text}</p>
                    <img src={card.img} style={{height: '40%', width: '40%', borderRadius: '20px'}}/>
                    <hr />
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'row', 
                        gap: '10px'
                      }}>
                        <p>Posted by: {card.userName}</p>
                        <p>|</p>
                        <p>Created at: {new Date(card.createdAt).toLocaleDateString()}</p>
                        <button onClick={() => handleDeleteCard(card.cardId)}>Remove</button>
                        <button onClick={() => {
                          setEditingCardId(card.cardId);
                          setEditTitle(card.title);
                          setEditText(card.text);
                          setEditImg(card.img)
                        }}>Edit</button>
                  </div>
                </div>
              )}
            </div>
        ))}
    </div>
  )
}
