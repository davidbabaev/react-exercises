
Project Overview:
1. Browse users - See all users in cards
2. Search users - Type to filter (with debounce)
3. view profile - Click user -> ee detailed page
4. Filter by location - Show users from specific countries
5. Favorites - Save favorite users (localStorage)


React & javascript things - i thing we must use in the project:
- <Link/>
- <Routes/>
- <Route/>
- import & export
- useEffect
- useState
- useParams
- filter()
- map()
- const
- find()
- Number()
- fetch
- try & catch
- Navigate()
- onClick
- useEffect
- setTimeout
- clearTimeout
- return
- () => {}
- debounce
- localStorage ('key', 'value')
- let
- if-else
- ternary operation (:?)
- event.target.value


Component:
- Routes component
- Home component 
- Users component
- user details
- useDbounce() - Hook

Files: 
- useDebounceUsers.js
- UsersProjectRoutes.jsx
- HomeUsers.jsx
- CardsUsers.jsx
- UserDetailsCard.jsx

Card content Structure:
- image
- name
- email
- button - move to this user page

Card Details content Structure:
- image
- id
- name
- username
- email
- phone
- website
- address (city, street)
- company (name)

API's:
- user image: https://i.pravatar.cc/150?img={put dynamic number here}
- user data: https://jsonplaceholder.typicode.com/users

UsersProjectRoutes.jsx:
- <nav>
- <Routes>
- <Route>
- <Link>
- imports of the component we need to navigate to them
- handle error page
- :id (useParams)

useDebounceUsers.js:
- useState()
- useEffect()
- setTimeout()
- clearTimeout()
- let timer
- useDebounceUsers(value, delay) -> dynamic parameters

CardsUsers.jsx:
- fetch()
- await
- useEffect()
- useState
- show the users data
- map()
- try catch
- useNavigate()
- handleNavigate () => {}
- isLoading
- true/ false
- useDebounce
- trim()
- filter()
- toLowerCase()
- toUpperCase()
- includes()

UserDetailsCard.jsx:
- useParams {id}
- useState()
- fetch
- try catch
- find()
- useEffect()
- if(!user) return <p>Loading..</p> (must!!)
- img sec with the link and dynamic user.id (number)

HomeUsers.jsx:
- h1


Quastions:
- in which file we do the fetch?
- How to fetch to api's in on time, and how show the content togehter, how to do map on two api arrays (what the right way to solve that)
- what steps to do, what the right order of building the roject, which file by which?
- Why i'm stuck?

How to improve the current project:
1. add styles
2. ask claude what more logics and stuff we can use in the project
3. add localStorage