import React, { useMemo, useState } from 'react'
import { useCardsProvider } from '../providers/CardsProviderEx6'
import useAllUsersEx6 from '../hooks/useAllUsersEx6';
import useDebounceEx6 from '../hooks/useDebounceEx6';
import useFavoriteCardsEx6 from '../hooks/useFavoriteCardsEx6';

export default function AllCardsPageEx6() {

    // filter cards by creator
    const [creatorId, setCreatorId] = useState('')

    // search cards by title/ text
    const [searchCard, setSearchCard] = useState('')

    const debounceSearchCard = useDebounceEx6(searchCard, 2000);

    // sort cards (newest/ oldest)
    const [dateSort, setDateSort] = useState('');

    // favorite/ like cards
    // const [favorits]

    // card categories/ tags


    const {registeredCards} = useCardsProvider([]);
    const [count, setCount] = useState(2);
    const {allUsers} = useAllUsersEx6(); 
    const {handleFavoriteCards} = useFavoriteCardsEx6();

    
    const filteredCards = useMemo(() => {

        let result = [...registeredCards];
        
        if(creatorId !== ''){
            result = result.filter(card => card.userId === creatorId)
        }

        if(debounceSearchCard !== ''){
            result = result.filter(card => card.title.toLowerCase().includes(debounceSearchCard.toLowerCase()))
        }

        if(dateSort !== ''){
            if(dateSort === 'newest'){
                result.sort((a,b) => b.createdAt.localeCompare(a.createdAt))
            }
            else if (dateSort === 'oldest'){
                result.sort((a,b) => a.createdAt.localeCompare(b.createdAt))   
            }
        }
        return result;
    }, [creatorId, registeredCards, debounceSearchCard, dateSort])
    
    const countedRegisterCards = filteredCards.slice(0, count)

  return (
    <div>
        <h1>All Cards</h1>

        <div>
            <select 
                value={creatorId}
                onChange={(e) => setCreatorId(e.target.value)}    
            >
                <option value="">All Users</option>
                {allUsers.map((user) => (
                    <option key={user.userId} value={user.userId}>{user.name}</option>
                ))}
            </select>
        </div>

        <div>
            <select 
                value={dateSort}
                onChange={(e) => setDateSort(e.target.value)}
            >
                <option value="">All Dates</option>
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
            </select>
        </div>

        <div>
            <input 
                type="text" 
                value={searchCard}
                onChange={(e) => setSearchCard(e.target.value)}
            />
        </div>

        {countedRegisterCards.length === 0 && <p>You haven't created any cards yet.</p>}
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
                    width: '500px',
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
                    <button onClick={() => handleFavoriteCards(card)}>Add To Favorites</button>
                </div>
            </div>
        ))}
        </div>
        {count >= filteredCards.length ? (<p>No More Cards</p>) : (
            <button onClick={() => setCount(count + 2)}>Read more</button>
        )}
    </div>
  )
}
