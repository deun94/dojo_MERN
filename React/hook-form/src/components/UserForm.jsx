import React, { useState } from  'react';
import "./UserForm.css"

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passconf, setPassconf] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, passconf };
        console.log("Welcome", newUser);
        //for clearing the form
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPassconf("");
    };
    
    return(
        <>
        <div className="container">
            <form onSubmit={ createUser }>
                <div className="formInput">
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div className="formInput">
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div className="formInput">
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className="formInput">
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className="formInput">
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setPassconf(e.target.value) } />
                </div>
                <input className="btn" type="submit" value="Create User" />
            </form>
            <hr></hr>
            <h4>Your Form data</h4>
            <div className="resultBox">
                <div>
                    <p>First Name: </p>
                    <p>Last Name: </p>
                    <p>Email Address: </p>
                    <p>Password: </p>
                    <p>Confirm <br></br>Password: </p>
                </div>

                <div class="result">
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{email}</p>
                    <p>{password}</p>
                    <p>{passconf}</p>
                </div>
            </div>
        </div>
        </>
        

    );
};
    
export default UserForm;
