import React, { useState } from  'react';
import "./UserForm.css"

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passconf, setPassconf] = useState("");
    //========================conditional rendering assignment==================
    const[hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    //=========================================================================
    const [forminfo, setforminfo] = useState({
        firstName: "",
        lastName: '',
        email: ''
    })

    const changeHandler = (e)=>{
        setforminfo({
            ...forminfo,
            [e.target.name]: e.target.value
        })
    }

    //================================validations============================
    // const[nameError, setNameError] = useState("");
    // const[emailError, setEmailError] = useState("");
    // const[passwordError, setPasswordError] = useState("");


    //validations functions ==============================================
    // const handleName = (e) => {
    //     setName(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setNameError("Name is required!");
    //     } else if(e.target.value.length < 3) {
    //         setNameError("Name must be 3 characters or longer!");
    //     }
    // }
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, passconf };
        console.log("Welcome", newUser);
        //=============================submission condition turned to true===========
        setHasBeenSubmitted(true);
        // =======================================================================


        //==============================================for clearing the result
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPassconf("");
    };
    //numbers can be null
    return(
        <>
        <div className="container">
            {/* ===========for conditional rendering and changing message */}
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3>:
                <h3>Welcome, please submit your information</h3>

            }
            {/* ======================================================= */}
            <form onSubmit={ createUser }>
                <div  className="formInput">
                    <label>First Name: </label> 
                    <input type="text" onChange={ changeHandler } value = {firstName} name="firstName"/>
                    {/* ==================error messages ==================== */}
                    {
                        firstName.length < 2 && firstName.length >0?
                        <p className="text-danger">First Name must be at least 2 characters!</p>: ""
                    }
                </div>
                <div  className="formInput">
                    <label>Last Name: </label> 
                    <input type="text"  onChange={ (e) => setLastName(e.target.value) } value = {lastName} />
                    {
                        lastName.length < 2 && lastName.length >0?
                        <p className="text-danger">Last Name must be at least 2 characters!</p>: ""
                    }
                </div>
                <div  className="formInput">
                    <label>Email Address: </label> 
                    <input type="text"  onChange={ (e) => setEmail(e.target.value) } value = {email}/>
                    {
                        email.length < 5 && email.length >0?
                        <p className="text-danger">Email must be at least 5 characters!</p>: ""
                    }
                </div>
                <div  className="formInput">
                    <label>Password: </label>
                    <input type="text"  onChange={ (e) => setPassword(e.target.value) } value = {password}/>
                    {
                        password.length <8  && password.length >0?
                        <p className="text-danger">Passwords must be at least 8 characters!</p>: ""
                    }
                </div>
                <div  className="formInput">
                    <label>Confirm Password: </label>
                    <input type="text"  onChange={ (e) => setPassconf(e.target.value) } value = {passconf}/>
                    {
                        passconf.length >0 && (password !== passconf || passconf < 8)?
                        <p className="text-danger">Passwords must match!</p>: ""
                    }
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
