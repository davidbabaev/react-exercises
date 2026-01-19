import React, { useState } from 'react'
import { useCardsProvider } from '../providers/CardsProviderEx6'

export default function AllCardsPageEx6() {

    const {registeredCards} = useCardsProvider();
    const [count, setCount] = useState(2);

    const countedRegisterCards = registeredCards.slice(0, count)

  return (
    <div>
        <h1>All Cards</h1>
        {registeredCards.length === 0 && <p>You haven't created any cards yet.</p>}
        <div style={{
            display: 'flex', 
            flexDirection: 'column'
            }}>
        {countedRegisterCards.map((card) => (
            <div style={{
                border: 'solid black 1px', 
                padding: '20px', 
                borderRadius: '20px', 
                margin: '20px 0px'
            }} key={card.cardId}>

                <h2>{card.title}</h2>
                <p>{card.text}</p>
                <img src={card.img} style={{
                    height: '40%', 
                    width: '40%', 
                    borderRadius: '20px'
                }}/>
                <hr />
                <div style={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    gap: '10px'
                }}>
                    <p>Posted by: {card.userName}</p>
                    <p>|</p>
                    <p>Created at: {new Date(card.createdAt).toLocaleDateString()}</p>
                </div>
            </div>
        ))}
        </div>
        {count >= registeredCards.length ? (<p>No More Cards</p>) : (
            <button onClick={() => setCount(count + 2)}>Read more</button>
        )}
    </div>
  )
}
