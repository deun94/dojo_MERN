import React, { useState } from  'react';
import "./UserForm.css"

const UserFormReducer= (props) => {
    //========================conditional rendering assignment==================
    const[hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    //=========================================================================
    const[emailError, setEmailError] = useState("");
    const [forminfo, setforminfo] = useState({
        firstName: "",
        lastName: '',
        email: '',
        password: "",
        passconf:"",
    })

    const changeHandler = (e)=>{

        

        setforminfo({
            ...forminfo,
            [e.target.name]: e.target.value
        })
        if(e.target.name === "email"){
            emailValidation(forminfo.email)
        }
        
    }

    //================================validations============================

    function emailValidation(email){
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(email.length < 5 && email.length != 0){
            setEmailError("Email must be more than 5 characters!!");
            return false;
        }
        else if(!email || regex.test(email) === false){
            setEmailError("Email must be in the right format!");
            return false;
        }
        else{
            setEmailError("")
            return true
        }
    }
    

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
        const newUser = { forminfo};
        console.log("Welcome", newUser);
        //=============================submission condition turned to true===========
        setHasBeenSubmitted(true);
        // =======================================================================


        //==============================================for clearing the result
        setforminfo({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passconf:""
        })
    };
    //numbers can be null
    return(
        <>
        <div className="container">
            {/* ===========for conditional rendering and changing message */}
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3>:
                <h3 className ="vivify slideInLeft">Welcome, please submit your information</h3>

            }
            {/* ======================================================= */}
            <form onSubmit={ createUser }>
                
                <div  className="formInput">
                    <label>First Name: </label> 
                    <input type="text" className="form-control" onChange={ changeHandler } value = {forminfo.firstName} name="firstName"/>
                    {/* ==================error messages ==================== */}
                    {
                        forminfo.firstName.length < 2 && forminfo.firstName.length >0?
                        <p className="text-danger">First Name must be at least 2 characters!</p>: ""
                    }
                </div>

                <div  className="formInput">
                    <label>Last Name: </label> 
                    <input type="text"  onChange={ changeHandler } value = {forminfo.lastName} name ="lastName"/>
                    {
                        forminfo.lastName.length < 2 && forminfo.lastName.length >0?
                        <p className="text-danger">Last Name must be at least 2 characters!</p>: ""
                    }
                </div>
                <div  className="formInput">
                    <label>Email Address: </label> 
                    <input type="text"  onChange={ changeHandler}  value = {forminfo.email} name = "email"/>
                    {
                        emailError?
                        <p className = "text-danger">{emailError}</p>: ""
                    }
                </div>
                <div  className="formInput">
                    <label>Password: </label>
                    <input type="text"  onChange={ changeHandler} value = {forminfo.password} name = "password"/>
                    {
                        forminfo.password.length <8  && forminfo.password.length >0?
                        <p className="text-danger">Passwords must be at least 8 characters!</p>: ""
                    }
                </div>
                <div  className="formInput">
                    <label>Confirm Password: </label>
                    <input type="text"  onChange={ changeHandler} value = {forminfo.passconf} name = "passconf"/>
                    {
                        forminfo.passconf.length >0 && (forminfo.password !== forminfo.passconf || forminfo.passconf < 8)?
                        <p className="text-danger">Passwords must match!</p>: ""
                    }
                </div>
                <input className="btn" type="submit" value="Create User" />
            </form>
            <hr></hr>
            
            <div className="container">
                <h4>Your Form data</h4>
                <div className="row">
                    <div className ="col-sm">
                        <p>First Name: </p>
                        <p>Last Name: </p>
                        <p>Email Address: </p>
                        <p>Password: </p>
                        <p>Confirm <br></br>Password: </p>
                    </div>

                    <div className="col-sm">
                        <p>{forminfo.firstName}</p>
                        <p>{forminfo.lastName}</p>
                        <p>{forminfo.email}</p>
                        <p>{forminfo.password}</p>
                        <p>{forminfo.passconf}</p>
                    </div>
                </div>
            </div>
            
        </div>
        </>
        

    );
};
    
export default UserFormReducer;
