import React from 'react'

 function UserCardEx({user}) {

  console.log('Card rendered', user.name);
  

  return (
    <div>
        <p>{user.name}</p>
        <p>{user.age}</p>
    </div>
  )
}

// export with React.memo
export default React.memo(UserCardEx);
