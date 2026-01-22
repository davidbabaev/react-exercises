# My Learning Journey
---

## 📚 3.1.2026

**Topic:** React Project

**Notes:**
- We can disable it if we need or in case something else is turned on or turned off.
- We use 4 states - 2 states for sorting, and two states for filtering, age sort, name sort, gender filter, country filter.
- We can use two sorts orders in the same time on the same list, this is impossible because we can have Alin = 50, and Zohar = 20, which will be the first if we have two sorts in the same time, z-a + high - low - this is logically impossible, so we will do only one sort in one time, the second sort will be unable.

[📄 Full Notes](https://docs.google.com/document/d/1EPxxjNT79KgjMEL7X8mJ8VKTBNcCIPU78kpFX2ulB7I/edit?tab=t.0)

---

## 📚 5.1.2026

**Topic:** React Project

**Notes:**
- I learned usersPage logics of sort and filter 
- I learned comparison = 0 is for checking if we have users with the same age so the sort a-z will work if we have users with 25 so we will sort them with a-z. (i’m not sure how this in happening because the sort a-z need to be disabled when the other sort working, also the sort in execute only when we choose it in the select option)
- I learned we can do select with an option of all and more option that run on array with map.((c)) we will have list of options, <option key = c, value = c >{c}</option>
- I learned to use Set, set is to remove duplicates, it can remove duplicates from array. But we can't map on set items. 
- I learned set syntax >> const countries = […new Set(map(user) => user.location.country))]
- We check in if() the filters not empty, if the filters not empty strings so filter, without functions, just filter if(gender !== ‘’){newUsers = newUsers.filter(.....)}
- I learned we using two useEffects exactly like in useSelected, inside Auth provider component,
- In autProvider we add const for registeredUsers with an array
- We have function for handle login user and function for handle register users, bith have objects and parameters.
- I learned we can user new Date().now().toString() + Math().random(36).randomString(2, 6)


[📄 Full Notes](https://docs.google.com/document/d/1r2jeuQqOoQALMwHNmY06OX3omDkoUU0q9F6y8VycbtY/edit?tab=t.0)

---

## 📚 6.1.2026

**Topic:** React Project

**Notes:**
- Working with loginPage file
- Working with AuthProvider file
- Working with new page, RegisterPage
- Create newUser
- Using state of registeredUsers
- Using state of error for showing error message
- Using state user to handle loginned user
- Create registered user object
- Check in the loginPage if a user already exists with const result = handleLogin(email,password), we import this function from our AuthProvider, then we check if(!result.success) result is the function, inside the function we have return{success: true} and one like this with false, the false run when user invalid, the true runs if the function run well, so we check like that we insure if out login data in valid to this check, id yes we setError(result.message) and do return to stop the code here.



[📄 Full Notes](https://docs.google.com/document/d/1axmcRKHJ7zJ25dwte4qA7iSe8vzyPQ1-fvEG1tiUU8M/edit?tab=t.0)

---

## 📚 12.1.2026

**Topic:** React Project

**Notes:**
- Define card data structure
- Create CardsProviderEx6
- Create Card Form Page
- Display all cards
- My Cards in dashboard
- Delete cards
- Edit cards
- working with GitHub




[📄 Full Notes](https://docs.google.com/document/d/1CMN0nQfJ3fsslD61LxlcgcyCgIWnesg50NfX5MThWzc/edit?usp=sharing)

---
## 📚 21.1.2026

**Topic:** React Project

**Notes:**
- Display all users (unified)
- Filter by country
- Filter by source (API/Registered)
- Search by name/email
- Sort (name, age)
- Pagination (Load More)
- Filter cards by creator
- Search cards by title/text
- added countries names API


[📄 Full Notes](https://docs.google.com/document/d/12jpDat7C8_F3Zvqz-UeCopDTS16mnr7XqDHR3QY6N2A/edit?usp=sharing)

---
## 📚 22.1.2026

**Topic:** React Project

**Notes:**
- Synced project with GitHub to see current code status
- Reviewed Phase 4 progress on ex6 project
- Identified bug: favorites are shared by all users instead of being user-specific
- Learned how localStorage works with key-value pairs
- Learned why same key means shared data for everyone
- Learned how to create user-specific keys using userId
- Learned where userId comes from (Context from AuthProvider after login)
- Learned the ternary operator for safety checks
- Learned early return pattern to stop function if no user logged in
- Fixed useFavoriteCardsEx6.js to use user-specific storage keys


[📄 Full Notes](https://docs.google.com/document/d/1DapOMDYLZ37C_yFqtDAtrK-7KmMCeQEiVOxivaVir1k/edit?usp=sharing)

---
