import React from 'react'

const Greeting = React.memo(function ReactMemoChild({name, age}) {
    console.log('Greeting rendered!');

    return(
        <div>
            <p>Hello {name}</p>
            <p>Age {age}</p>
        </div>
    )
})

export default Greeting;
