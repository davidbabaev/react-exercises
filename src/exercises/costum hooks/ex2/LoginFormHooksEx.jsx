// import React from 'react'
// import useInput from './useInput';

// export default function LoginFormHooksEx() {

// /*     const email = useInput('');
//     const password = useInput('');

//     const handleSubmit = () => {
//         console.log('Email: ', email.value);
//         console.log('Password : ', password.value);

//         // reset form
//         email.reset();
//         password.reset();
//         // reset() -> is a form method that resets the values of all elements in a form (smae as clicking on the reset button) 
//     } */

//     const [name, setName] = useInput(); // using our custom hook!
//     //      ↑       ↑           ↑
// //      Current  Function   Calling our
// //       value   to change  custom hook


//   return (
//     <div>
//         <input 
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             />

//         <p>You Typed: {name}</p>
//     </div>
//   )
//   // understanding {...email}:
//   // Long Way:
// //   <input 
//     // type="text" 
//     // value = {email.value}
//     // onChange = {email.onChange}
// // /> 
// // shortWay (spread):
// // <input {...email}/> 
// // the spread operator spread all properties

// // what you just built:
// // created a reusable hook
// // used it in a component
// // made your code cleaner
// // added reset functionality
// }
