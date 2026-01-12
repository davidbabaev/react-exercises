build deshboeard:
- total users count [5] [1+ User]
- theme: [light/ dark toggle]
- user cars 1 (alice, age 25)
- user cars 2 (bob, age 15)
- user cars 3 (nati, age 24)

1. parent has 3 states: totalUsers, theme, users array
2. create a userCard component that displays one user
3. use React.memo on userCard
4. add console.log to see when each card re-renders
5. when you click +1 User or toggle theme, cards should not re-render
6. when you change a specific users age, only that card re-renders