import React, { useState } from 'react'

export default function FromValidationExample() {

    // form validation = checking if user is correct before submitting
    // uncontrolled input:
    // react doesn't know what's in the input!
    // function Form(){
    // return(
            // <input type = "text"/>
    // )
    // }
    // problem - can't access the value

    // react controlled input:
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // new: error states
    // this object will hold errors:
    // {
    //     name: 'Name is required',
    //     email: 'Email must be valid',
    //     password: 'Password must be at least 6 characters'
    // }
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault(); // <- prevents page refresh
        // without it,
        // user clicks submit
        // - page refreshes
        // - lose all data
        // - bad
        // with it,
        // - handleSubmit runs
        // - you control what happens
        // - good
        console.log('Form submitted!', {name,email,password});

        // new validation before submitting
        const newErrors = {}

        // validate name
        if(!name){
            newErrors.name = 'Name is required'
        } else if(name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters'
            console.log('Name must be at least 3 characters');
            
        }

        // validate email
        if(!email){
            newErrors.email = 'Email is required'
        } else if(!email.includes('@')) {
            newErrors.email = 'Email must include @'            
        }

        if(!password){
            newErrors.password = 'Password is required'
        } else if(password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'            
        }

        // if there are error, set them and stop
        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return;
        }

        // no errors submit the form!
        setErrors({})
        console.log('Form is valid! submitting...');
        
    }

  return (
    <div>
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input 
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (<p>{errors.name}</p>)}
            </div>
            <hr />
            <div>
                <label>Email: </label>
                <input 
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (<p>{errors.email}</p>)}
            </div>
            <hr />
            <div>
                <label>Password: </label>
                <input 
                    type='text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (<p>{errors.password}</p>)}
            </div>

            <button type='submit'>
                Register
            </button>
        </form>
    </div>
  )
}
