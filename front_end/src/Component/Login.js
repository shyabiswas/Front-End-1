import React, {useState, useEffect} from "react";
import {AxiosWithAuth} from '../utils/AxiosWithAuth';

function Login(props){
    const [user, setUser]= useState({
       username: "",
        password: ""
    })

    const handleChange= event =>{
        setUser({...user, [event.target.name]: event.target.value})
    
    }
    const handleSubmit= event =>{
        event.preventDefault()
        AxiosWithAuth()
        .post("/api/auth/login", user)
        .then((result)=>{
            setUser(
               console.log(result.data)
            )
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    return(
        <>
        <h1>My Account</h1>
      
        <form onSubmit={handleSubmit}>
          <input type="text"
          name="username"
          placeholder="username"
          value={user.username}
          onChange={handleChange}
          />
           <input type="password"
          name="password"
          placeholder="password" 
          value={user.password}
          onChange={handleChange}
          />
          <button>Signin</button>
          </form>
        </>
    )
}
export default Login