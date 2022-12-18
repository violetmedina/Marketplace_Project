import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        fetch('http://localhost:8080/sign-up', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        if(result.success) {
            navigate('/')
        } else {
            setError(result.error)
            console.log(result)

            }

        })
    }
return (
<>
    <div>Sign Up</div>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder='user Name' name='username'></input>
        <input type="text" onChange={handleChange} placeholder='first Name' name='fName'></input>
        <input type="text" onChange={handleChange} placeholder='last Name' name='lName'></input>
        <input type="text" onChange={handleChange} placeholder='email' name='email'></input>
        <input type="text" onChange={handleChange} placeholder='password' name='password'></input>
        <button type='submit'>Sign Up</button>
    </form>
        <a href='/signin'>sign in</a>
        <h1>{error}</h1>
</>
  )
}

export default SignUp