import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useAuthEx6 } from './AuthProviderEx6';

const CardsProvider = createContext();

export function CardsProviderEx6({children}) {

const { user } = useAuthEx6();

    // state for saving cards (register cards)
const [registeredCards, setRegisteredCards] = useState([]);

const generateID = () => {
    return new Date().getTime().toString() + Math.random().toString(36).substring(2,6)
} 

// useEffect on mount
useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('registeredCards'));

    if(saved){
        setRegisteredCards(saved);
    }
}, [])

// useEffect with dependency cards
useEffect(() => {
    localStorage.setItem('registeredCards', JSON.stringify(registeredCards))
}, [registeredCards])

const handleCardRegister = useCallback((title, text, img) => {
    const newCard = {
        cardId: generateID(),
        title: title,
        text: text,
        img: img,
        userName: user.name,
        userId: user.userId
    }

    setRegisteredCards([...prev => prev, newCard])

    return{
        success: true,
        message: 'New Card Created'
    }

}, [user, registeredCards])

const handleDeleteCard = useCallback((cardId) => {
    setRegisteredCards(prev => prev.filter(card => card.cardId !== cardId))
}, [])

const handleEditCard = useCallback((cardId, newTitle, newText, newImg) => {
    setRegisteredCards(prev => prev.map(card => {
        if(card.cardId === cardId){
            return{
                ...card,
                title: newTitle,
                text: newText,
                img: newImg
            }
        }
        else{
            return card;
        }
    }))
}, [])

  return (
    <CardsProvider.Provider value={{registeredCards, handleCardRegister, handleDeleteCard, handleEditCard}}>
        {children}
    </CardsProvider.Provider>
  )
}

export function useCardsProvider(){
    return useContext(CardsProvider);
}
