import React from 'react'
import useSelectedUsersEx6 from '../hooks/useSelectedUsersEx6'

export default function SelectedPageEx() {

    const {selectedUsers, handleRemove} = useSelectedUsersEx6()

  return (
    <div>
        <h1>Selected Users</h1>
        {!selectedUsers[0] && (<p>You Didn't Select Users  Yet</p>)}
        {selectedUsers.map((selected) => (
            <div key={selected.login.uuid}>
                <img style={{borderRadius: '50%'}} src={selected.picture.large}/>
                <p>{selected.name.first + ' ' + selected.name.last}</p>
                <button onClick={() => handleRemove(selected)}>Remove</button>
                <hr />
            </div>
        ))}
        
    </div>
  )
}
