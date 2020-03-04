import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, withRouter} from "react-router-dom"
import Register from "./Component/Register"
import Login from "./Component/Login"
import Logout from "./Component/Logout"
import ProtectedRoute from "./Component/ProtectedRoute"
import {getToken} from "./utils/AxiosWithAuth";
import getClasses from "./Component/GetClasses";
import Instructor from "./Component/Instructor";
import GetClasses from './Component/GetClasses';


function App() {
  const Loggedin = getToken()
  return (
    <div className="wrapper">
     <nav>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Link to="/">Home</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Logout">Logout</Link>
        <Link to="/Client" > Client</Link>
        <Link to="/Instructor">Instructor</Link> 
        </nav>
        <Route exact path ="/"></Route>   
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Login" component={Login}/>
        <ProtectedRoute exact path="/GetClasses" component={GetClasses}/>
        <ProtectedRoute exact path="/Instructor" component={Instructor}/>
        <ProtectedRoute exact path="/Logout" component={Logout}/>
      
      
    </div>
  );
}

export default withRouter(App);
