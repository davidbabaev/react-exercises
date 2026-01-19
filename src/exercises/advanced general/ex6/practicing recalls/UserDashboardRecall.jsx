import React, { useMemo, useState } from 'react'

export default function userDashboardRecall() {
  const { user, registeredCards, handleEditCard, handleDeleteCard } = useCards();
    
    // Filter to show only this user's cards
    const myCards = useMemo(() => {
        return registeredCards.filter(card => card.userId === user.userId);
    }, [registeredCards, user.userId])

    const [editTitle, setEditTitle] = useState('');
    const [editText, setEditText] = useState('');
    const [editImg, setEditImg] = useState('');

    const [editMode, setEditMode] = useState(null)
    
    return (
        <div>
            <h1>Welcome {user.name}</h1>
            <h2>My Cards</h2>
            
            {myCards.map((card) => (
                <div key={card.cardId} style={{border: '1px solid black', padding: '20px', margin: '10px'}}>
                    {editMode === card.cardId ? (
                        <div>
                            <p>edit mode:</p>
                            <hr />
                            <div>
                                <label>title:</label>
                                <input 
                                    value={editTitle} 
                                    onChange={(e) => setEditTitle(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>text::</label>
                                <input 
                                    value={editText} 
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>img:</label>
                                <input 
                                    value={editImg} 
                                    onChange={(e) => setEditImg(e.target.value)}
                                />
                            </div>
                            <button
                                onClick={() => {
                                    handleEditCard(card.cardId, editTitle, editText, editImg)
                                    setEditMode(null)
                                }}
                                >Save</button>
                            <button onClick={() => setEditMode(null)}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                            <img src={card.img} alt={card.title} style={{width: '100px'}} />
                            <button
                                onClick={() => {
                                    setEditMode(card.cardId);
                                    setEditTitle(card.title);
                                    setEditText(card.text);
                                    setEditImg(card.img);
                            }}
                            >Edit</button>
                            <button
                                onClick={() => handleDeleteCard(card.cardId)}
                            >Delete</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
