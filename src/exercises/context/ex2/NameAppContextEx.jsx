import React from 'react'
import { NameContext } from './NameContextEx'
import DisplayNameContextEx from './DisplayNameContextEx'


export default function NameAppContextEx() {
    // turn on the radio - broadcast
    // What happenes
    // 1. NameContext.Provider = Radio station starts broadcasting
    // value = "Alice" = Broadcasting the message "Alice"
    // <DisplayName/> = A radio inside the broadcast area
 

    return(
        <NameContext.Provider value={'Alice'}>
            {/* everyone inside can access 'Alice */}
            <DisplayNameContextEx/>
        </NameContext.Provider>
    )
}
