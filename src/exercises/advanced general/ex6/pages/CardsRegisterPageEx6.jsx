import React, { useEffect, useState } from 'react'
import { useCardsProvider } from '../providers/CardsProviderEx6'
import { useNavigate } from 'react-router-dom';

export default function CardsRegisterPageEx6() {

    const {handleCardRegister} = useCardsProvider()

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [img, setImg] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    // function, (e) e.preventdefault()
    const handleSubmitNewCard = (e) => {
        e.preventDefault();

        if(title.trim() === ''){
            setError('Title is required')
            return;
        }

        if(text.trim() === ''){
            setError('Text is required')
            return;
        }

        if(img === ''){
            setError('You must choose image')
            return;
        }

        const result = handleCardRegister(title, text, img)

        if(!result.success){
            setError(result.message)// show error to user
            return;
        }

        navigate('/appusers/allcards')
    }

  return (
    <div>
        <h1>Create New Card</h1>
        <form onSubmit={handleSubmitNewCard}>
            <div>
                <label>Title</label>
                <br />
                <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Text</label>
                <br />
                <textarea 
                rows={3}
                style={{resize: 'none'}}
                    type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div>
                <label>Image</label>
                <br />
                <input 
                    type="text" 
                    placeholder= "https://example.com/image.jpg"
                    onChange={(e) => setImg(e.target.value)}
                />
            </div>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <br />
            <button type='submit'>Post Your Card</button>
        </form>
    </div>
  )
}
