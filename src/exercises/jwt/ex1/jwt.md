JWT - javascript web token
it's a string that proves you're logged in. like a ticket at a concert.

how it works:
1. you login with email/password
2. servert checks: is this correct?
3. server says yes - sends back JWT token
4. you save the token
5. every request you make, you send the token
6. server sees token -> knows you're logged in

what does a JWT look like?
it's a long string:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGF2aWQiLCJlbWFpbCI6ImRhdmVAZW1haWwuY29tIn0.abc123

inside it contains your user data (name, wmail, etc.)
where do we save this?
in localStorage, so it stays even after page refresh


HTTP is stateless. This means the server forgets you after each request

JWT:
it's a string with 3 parts seperated by dots
xxxxx.yyyyy.zzzzz

the 3 parts:
part 1 Header:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
says: the is JWT, using HS256 encryption

part 2: Patload (you data)
eyJuYW1lIjoiRGF2aWQiLCJlbWFpbCI6ImRhdmVAZW1haWwuY29tIn0
contains: { name: "David", email: "dave@email.com" }

part 3: Signature
abc123xyz
srever secret stamp. proves the token is real, not fake.

the flow is:
1. user types email + password
2. frontend sends to server, post/ login {email: 'dave@gmail.com', password: "123"}
3. server checks database,
does this user exist? is password correct?
4. if YES? server creates JWT with user data
{email: 'dave@gmail.com', password: "123"}
5. server sends JWT to localStorage
6. frontend saves JWT to localStorage
7. every future request includes the JWT
headers: {Authorization: 'Bearer eyjhbg..'}
8. server reads JWT -> knows who you are

why is JWT secure?
the signature.

only the server knows the secret key, is someone changes the payload, the signature won't match.
hacker tries: change name from "dave" to "admin
server checks signature: this doesn't match. token is fake, rejected

Where to save JWT?
localStorage - can be stolen by XSS attacs
sessionStorage - Doesn't persist
cookie (httpOnly) - most secure - more complex

for learning we use localStorage, real apps often use coockies

token have an expiration time, for example 1 hour to expire.
after expiration:
token is invalid
user must login again