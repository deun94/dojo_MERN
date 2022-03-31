import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";
import { Link } from 'react-router-dom';

const AuthorForm= (props) => {

    let [name, setName] = useState("");
    let [title, setTitle] = useState("");

    const [formErrors, setFormErrors] = useState({});
    //empty objects for the errors since all errors are different

    const history = useHistory();
    //don't need this  since we are already doing it in the prevent Default 

    const createAuthor = (e) =>{
        e.preventDefault();

        //for grouping the form info into one
        const formInfo = {name, title};

        axios.post("http://localhost:8000/api/authors", formInfo)
        .then(res=>{
            console.log("response of the form", res);
            if(res.data.error){ //for posting erros
                setFormErrors(res.data.error.errors);
            }
            else{ //did the form submit properly?
                props.setFormSubmitted(!props.formSubmitted)

                //reset the form values
                setName("");
                setTitle("");
                setFormErrors({});
                history.push("/")
            }
        })
        .catch(err=>{
            console.log("err->", err);
        })
}

    return (
        <>
            <div>
                <Link to= {"/"} className = "btn btn-primary"> Home</Link>
                <form onSubmit= {createAuthor}>
                    <div className="form-group">
                        <label htmlFor="">Author Name:</label>
                        <input type="text"  className="form-control" onChange={(e)=>{setName(e.target.value)}} value={name} />
                        <p className="text-danger">{formErrors.title?.message}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Title:</label>
                        <input type="text"  className="form-control" onChange={(e)=>{setTitle(e.target.value)}} value={title} />
                        {/* <p className="text-danger">{formErrors.title?.message}</p> */}
                    </div>
                    <Link to= {"/"} className = "btn btn-primary"> Cancel</Link>
                    <input type="submit" className = "btn btn-success" value="Create Author!" />
                </form>
            </div>
        </>
    )
}

export default AuthorForm;

