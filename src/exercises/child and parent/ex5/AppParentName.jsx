import React, { useState } from 'react';
import NameInputChild from './NameInputChild';

export default function App() {
    const [greetingName, setGreetingName] = useState("");

    const handleGreet = (name) => {
        setGreetingName(name);
    };

    return (
        <div>
            <h1>Name Greeter</h1>
            
            {greetingName && (
                <h2>
                    Hello {greetingName}!
                </h2>
            )}
            
            <NameInputChild onGreet={handleGreet} />
        </div>
    );
}