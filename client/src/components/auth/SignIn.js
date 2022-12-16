import {useState}from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const [user, setUser] = useState({})
    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        fetch('http://localhost:8080/signin', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(result => {

            if(result.success) {
                const token = result.token // get the token 
                const username = result.username           
                localStorage.setItem('jwt', token)// put the token in local storage 
                localStorage.setItem('username', username.email)// put the username/email in local storage 
                navigate('/')
            }

            console.log(result)
        })
    }
return (
<>
    <div>Sign In</div>
    <form onSubmit={handleSubmit}>
        {/* <input type="text" onChange={handleChange} placeholder='username' name='username'></input> */}
        <input type="text" onChange={handleChange} placeholder='email' name='email'></input>
        <input type="text" onChange={handleChange} placeholder='password' name='password'></input>
        <button type='submit'>Sign In</button>
    </form>
        <a href='/signup'>Create account</a>
</>
)
}

export default SignIn