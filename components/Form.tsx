'use client'

import { useState } from "react"
import { Fragment } from "react"

const Form : React.FC = ( )=> {

    const [name , setName] = useState<string>('')
    const [password , setPassword] = useState<string>('')
    const handleSubmit = (event : React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        alert(`Name: ${name}, Password: ${password}`);
    }
return (
<Fragment>

<form onSubmit={handleSubmit}>
<input 
type="text"
placeholder="name"
onChange={(e)=>setName(e.target.value)}
>
</input>
<input
type="password"
placeholder="password"
onChange={(e)=>setPassword(e.target.value)}>
</input>
<button type="submit">SumbitData</button>
</form>
</Fragment>
)
}

export default Form