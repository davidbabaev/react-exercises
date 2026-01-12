Requirements:
- Fetch users from https://jsonplaceholder.typicode.com/users
- Display users in a list (name and email)
- Search input to filter users by name
- Dark mode toggle that persists across the app
- "Select User" button on each user
- Use localStorage to cache the fetched users
- Optimize to prevent unnecessary re-renders and recalculations

Must use:
- Context API
- Custom hook(s)
- React.memo
- useMemo
- useCallback
- useDebounce
- localStorage


question 1: when you save?
you said: when click select user
correct evety time selectUsers changes, save it.

question 2: when to read?
you said: always also on refresh
clarification: not always - only once on mount (when component first loads). if you read on every render, you'd overwrite your current state with old data.

question 3: keys?
you said: 'users'

you need 2 seperate keys:
- 'cachedUsers' the fetched users from API (so you don't fetch again)
- 'selectedUsers' the users you clicked "Selcet" on
Using one key for both will overwrite data.

What files are we have in the users project - remember only from my memory:
useSelected - to cache the selected users save them in a state and in a local storage. 
useUsers - to fetch the users, then save them in local, and in users state, then display the users from the local and not from new fetch, because the local already will have the list the we set in the state also, the useEffect check if the get in exist key with something in it, then we set users with this get then we can display the users list from the local, so the fetch will happen only one time in this case, only the first time when the local is empty, then it set in the local and all the other times we will open that component the list will be displays from the local and the fetch did not run again and again.
I remember we have 2 provider files, inside the providers we have {children}, i do remember the providers have createContext(), useContext, each file have two export functions, one have the <ThemeProvider.Provider value={{4things}}> we have a custom hook function to pass the useContext(ThemeContext) that we created in this file
I remember we have an reutersApp component that include the nav, and the routes, and we will wrap that all with the providers
We have a LoginPage component that has the login form and we call a function that we created in the useUserd i think.
We have a dashboardPage component that I am using for protecting route logic. We protect this component. 

____________________________________________________
____________________________________________________

The Plan File:

# Project Overview - What this app does
User management app with authentication, theme switching, and protected routes

# File Connections Map
AppUsersEx6 → wraps everything with providers → contains routes
  ├── AuthProvider → gives login/logout to all children
  ├── ThemeProvider → gives theme to all children
  └── Routes:
       ├── "/" → HomePage
       ├── "/login" → LoginPage (uses AuthProvider)
       ├── "/users" → UsersPage (uses useUsers hook)
       └── "/dashboard" → ProtectedRoute → UserDashboard

# Custom Hooks - What each one does
- useUsers → fetches users, caches in localStorage
- useSelectedUsers → tracks which users are selected
- useDebounce → delays search input


____________________________________________________
____________________________________________________

Layer 2: Quick Recall Quiz (5 minutes)
Before reading code, ask yourself:

"What does useUsers return?" → Write your answer
"What does AuthProvider give to children?" → Write your answer
"How does ProtectedRoute work?" → Write your answer

Then check if you were right. This is faster than rebuilding.