import React from 'react'

export default function CostumHooksFirstEx() {
  return (
    <div>CostumHooksFirstEx</div>
  )

//   instead of repaating this everywhere:
// const[name, setName] = useState('');
// const handleName = (e) => setName(e.target.value);

// const[email, setEmail] = useState('');
// const handleEmail = (e) => setEmail(e.target.value);

// if we have login component and also register component we need to build new states in each of them, also in other pages with forms

// create one custom hook use everywhere:
// const name = useInput('')
// const email = useInput('')

}
