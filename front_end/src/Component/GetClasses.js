import React, {useState, useEffect, useContext} from "react";
import FitnessContext from "../contexts/FitnessContext";
import {AxiosWithAuth} from "../utils/AxiosWithAuth";

const GetClasses = ()=>{
    const {events, setEvents} = useContext(FitnessContext)
    const [classes, setClasses] = useState([])
    const handleChange =e =>{
    setClasses({...classes, [e.target.name]: e.target.value})}

    useEffect(()=>{
    AxiosWithAuth()
    .get("/api/classes", classes)
    .then(res =>{
        console.log(res)
    })
    .catch(err =>{
        console.log(err)
    })

}, []);
    const handleSubmit = e =>{
    e.preventDefault();
    AxiosWithAuth()
    .post('/api/classes', classes)
    .then(res =>{
        setClasses({
            title:"",
            instructorId: "",
            categoryId:"",})
        setEvents([...events, res.data])
        })
        .catch (err=>{
            console.log(err)
        })
    }
    const handleDelete = id =>{
        AxiosWithAuth()
        .delete('/api/classes:id')
        .then( res =>{
            console.log(res)
            setEvents(events.filter(item => item.id !== id))
        })
    }

    return(
        <div className='classes'>
        <h2>Class I've created</h2>
            {classes.map(classes => 
      <div key ={classes.id}> <button onClick ={() => handleDelete(events.id)}>Delete</button>
          <br/>
                <h4>Workout: <p>{classes.title}</p></h4>
                <h4>Instructor Id:<p>{classes.instructorId}</p>  </h4>
                <h4>Category Id:<p>{classes.categoryId}</p>  </h4>
                <h4>Description:<p>{classes.description}</p>  </h4> 
                    </div>)}
                    <form onSubmit={handleSubmit}>
                        <h3>Add a class</h3>
                        <input type="text"
                        name='title'
                        placeholder='Class'
                        value={classes.title}
                        onChange={handleChange}
                        />
                        <br/>
                        <input type="text"
                        name='categoryId'
                        placeholder='Category'
                        value={classes.categoryId}
                        onChange={handleChange}
                        />
                        <br/>
                        <input type="text"
                        name='categoryId'
                        placeholder='Description'
                        value={classes.description}
                        onChange={handleChange}
                        />
                        <br/>
                        <button type='submit'>Add new Class</button>



                    </form>
        </div>
    )
    
}

export default GetClasses;