import React from 'react'

export default function SearchBox({searchTerm, setSearchTerm}) {
  return (
    <div>
        <input 
            type="text" 
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
        />
    </div>
  )
}
