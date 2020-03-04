import React, {useState, useEffect} from "react";
import {AxiosWithAuth} from '../utils/AxiosWithAuth';

function FitnessClass(props){
    const [Class, setClass]= useState({
        Name: name, 
        Type: "",   
        StartTime: "",   
        Duration: "",   
        Intensitylevel: "",   
        Location: "",   
        CurrentAttendees: "",   
        classSize: "",   
       
    })
    useEffect(()=>{
        AxiosWithAuth()
        .get("")
        .then((result)=>{
            setClass({
                name: result.data.name,
                email: result.data.email,
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])
    return(
        <>
        <h1>Classes</h1>
        <div className="account-row">Name: {user.name}</div>
        <div className="account-row">Name: {user.email}</div>
        </>
    )
}
export default FitnessClass