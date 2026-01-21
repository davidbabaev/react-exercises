import { useCallback, useEffect, useState } from "react";
import { useCardsProvider } from "../providers/CardsProviderEx6";

function useFavoriteCardsEx6() {

    // const {registeredCards} = useCardsProvider();
    const [favoriteCards, setFavoriteCards] = useState([]);

    const handleFavoriteCards = useCallback((card) => {
        const include = favoriteCards.some(fav => {
            return fav.cardId === card.cardId
        })

        if(!include){
            setFavoriteCards([...favoriteCards, card])
        }
    }, [favoriteCards])

    // useEffect on mount - with get LocalStorage
    useEffect(() => {
        const savedCards = JSON.parse(localStorage.getItem('favoriteCards'))

        if(savedCards){
            setFavoriteCards(savedCards)
        }
    }, [])
    
    // useEffect when changed with set LocalStorage
    useEffect(() => {
        localStorage.setItem('favoriteCards' ,JSON.stringify(favoriteCards))
    }, [favoriteCards])

  return{favoriteCards, handleFavoriteCards}
}

export default useFavoriteCardsEx6;
