import React, { useCallback, useEffect, useMemo, useState } from 'react'
import UsersPageEx6 from '../pages/UsersPageEx6'

function DisplayUsersEx6() {

      const [search, setSearch] = useState('')

    return (
    <div>
      <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <UsersPageEx6
          value={search}
        />
    </div>
  )
}

export default React.memo(DisplayUsersEx6)
