import React, { useEffect, useState } from 'react'
import { useThemeProviderEx5 } from './ThemeProviderEx5'
import useDebounceEx5 from './useDebounceEx5'

export default function HomePageEx5() {

    const {darkMode, toggleDarkMode} = useThemeProviderEx5()

    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])


    const fetchUsers = async () => {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        setUsers(data);
      }
      catch (err){
        console.log(err);
      }
    }

    const debounceValue = useDebounceEx5(search, 3000)

    const filtered = users.filter((user) => {
      return user.name.toLowerCase().includes(debounceValue.toLowerCase())
    })


    useEffect(() => {
      if(filtered){
        fetchUsers()
      }
    }, [debounceValue])

  return (
    <div style={{
          backgroundColor: darkMode ? 'black' : 'white', 
          height:'100vh', 
          width: '100%'}}>
        <button 
            onClick={toggleDarkMode}
            style={{
              backgroundColor: darkMode? 'white': 'black', 
              color: darkMode? 'black': 'white', border: '0', margin: '10px', padding: '5px 20px'}}
          >
            click
        </button>
        <p 
        style={{
          color: darkMode? 'white': 'black', 
          fontFamily: 'arial', 
          margin: '10px'
        }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis fugit quae iure atque vitae, perspiciatis aspernatur! Recusandae saepe voluptate, amet distinctio commodi pariatur accusantium incidunt aperiam ut nam perferendis eveniet facilis quibusdam maxime officia quaerat harum repellendus. Tempore aliquid, quas sit tenetur voluptatibus velit perspiciatis inventore odio architecto error.
          </p>

          <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <p
            style={{
          color: darkMode? 'white': 'black', 
          fontFamily: 'arial', 
          margin: '10px'
        }}>
          {debounceValue}
          </p> */}
          {filtered.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
            </div>
          ))}
    </div>
  )
}
