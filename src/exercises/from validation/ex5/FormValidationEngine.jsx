import React, { useState } from 'react'

export default function FormValidationEngine() {

    const [userName, setUserName] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [email, setEmail] = useState('')
    const [emailErrors, setEmailErrors] = useState(''); // store error message string
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(''); // store error message string

    const handleSubmit = (e) => {
        e.preventDefault();

        // validate and store results in local variables
        const isUserNameValid = userName.length >= 3;
        const isEmailValid = email.includes('@');
        const isPasswordValid = password.length >= 6;
    
        // Set Error Messages:
        setUserNameError(isUserNameValid ? '' : 'less than 3');
        setEmailErrors(isEmailValid ? '' : 'imail must include @');
        setPasswordError(isPasswordValid ? '' : 'less than 6')
    
        // check validity using the local variables, not state
        if(isUserNameValid && isEmailValid && isPasswordValid){
            console.log('Submitted');
        } else{
            console.log('Not valid');
            
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)} 
                    type="text" 
                />
                {userNameError && (<p>{userNameError}</p>)}
            </div>
            <div>
                <label>Email:</label>
                <input 
                    value={email} 
                    type="text" 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                {emailErrors && (<p>{emailErrors}</p>)}
            </div>
            <div>
                <label>Password:</label>   
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && (<p>{passwordError}</p>)}
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )

  
}

    //  before - the bug:
    // imagine user submits with userName = "ab" (too short)
    // at this moment: userNameError = '' (empty from before)

    // you think userNameError is now less then 3
    // but it''s not, it's still -> ''
        // if(userName.length < 3){
        //     setUserNameError('less then 3')
        // } else{
        //     setUserNameError('')
        // }
    
    // React says: ok, i'll update userNameError later after this function finishes

    // if(!userNameError && !passwordError && !emailErrors)
    // you checking: !'' && !'' && !'' 
    // which is: true && true && true
    // sho this runs even there are errors





        // if(!email.includes('@')){
        //     setEmailErrors('not have @')
        // } else{
        //     setEmailErrors('')
        // }

        // if(password.length < 6) {
        //     setPasswordError('less then 6')
        // } else{
        //     setPasswordError('')
        // }

        // if(!userNameError && !passwordError && !emailErrors){
        //     console.log('not valid');
        // } else{
        //     console.log('Submitted');
            
        // }

