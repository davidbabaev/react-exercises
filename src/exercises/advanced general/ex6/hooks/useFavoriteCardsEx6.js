import { useCallback, useEffect, useState } from "react";
import { useAuthEx6 } from "../providers/AuthProviderEx6";

function useFavoriteCardsEx6() {

    // const {registeredCards} = useCardsProvider();
    const [favoriteCards, setFavoriteCards] = useState([]);
    const {user} = useAuthEx6();

    const storageUserkey = user ? `favoriteCards_${user.userId}` : null;


    const handleFavoriteCards = useCallback((card) => {
        setFavoriteCards((prev) => {
            const include = prev.some(fav => fav.cardId === card.cardId)
            if(!include){
                return [...prev, card]
            }
            return prev
        })
    }, [])

    // useEffect on mount - with get LocalStorage
    useEffect(() => {
        if(!storageUserkey) return;

        const savedCards = JSON.parse(localStorage.getItem(storageUserkey))

        if(savedCards){
            setFavoriteCards(savedCards)
        }
    }, [storageUserkey])
    
    // useEffect when changed with set LocalStorage
    useEffect(() => {
        if(!storageUserkey) return;

        localStorage.setItem(storageUserkey ,JSON.stringify(favoriteCards))
    }, [favoriteCards, storageUserkey])

  return{favoriteCards, handleFavoriteCards}
}

export default useFavoriteCardsEx6;
