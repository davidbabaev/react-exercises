concept you'll practice:
- useState - multiple states (users, search, favorites, loading)
- useEffect - fetch data on mount, sync with localStorage
- custom hook - extract the localStorage logic
- props - pass data and functions to child components
- conditional rendering - loading, empty states

files:
- UserCard.jsx (display one user)
- UserList.jsx (maps through users)
- SearchBox.jsx (shows saved favorites)
- FavoritesList.jsx (shows saved favorites)

______________________________________________________

Step 1: Create the custom hook useLocalStorage

- ~~Takes a key and initialValue as parameters~~
- ~~Returns [value, setValue] like useState~~
- ~~On mount, check if localStorage has existing data for that key~~
- ~~When value changes, save to localStorage~~

______________________________________________________

Step 2: Create SearchBox component

- Receives searchTerm and onSearchChange as props
- Simple input field, nothing fancy

______________________________________________________

Step 3: Create UserCard component

- Receives user object and onToggleFavorite function and isFavorite boolean as props
- Shows: name, email, city
- Has a button/icon to add or remove from favorites
- Button text changes based on isFavorite

______________________________________________________

Step 4: Create UserList component

- Receives users array, favorites array, and onToggleFavorite function
- Maps through users and renders UserCard for each
- Passes isFavorite by checking if user.id exists in favorites

______________________________________________________

Step 5: Create FavoritesList component

- Receives favorites array and onRemoveFavorite function
- Shows list of favorite users
- Each item has a remove button

______________________________________________________

Step 6: Build App.jsx

- Fetch users from https://jsonplaceholder.typicode.com/users on mount
- Use your useLocalStorage hook for favorites
- Filter users based on search term (by name or email)
- Pass everything down to child components

______________________________________________________

Expected Behavior:

- App loads → fetches 10 users → displays them
- Type in search → list filters in real-time
- Click "Add to Favorites" → user appears in favorites section
- Refresh page → favorites are still there
- Click "Remove" on favorite → removes from list

______________________________________________________

Hints:

- Favorites array should store full user objects (not just IDs)
- Filter logic: user.name.toLowerCase().includes(searchTerm.toLowerCase())
- Toggle favorite: if exists, remove it; if not, add it


