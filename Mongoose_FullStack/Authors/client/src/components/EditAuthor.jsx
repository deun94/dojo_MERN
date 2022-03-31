import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router';
import {useHistory} from "react-router-dom";
import { Link } from 'react-router-dom';

const EditAuthor= (props) => {

    let [authorInfo, setAuthorInfo] = useState({
        name: "",
        title: ""
    });

    let {_id} = useParams();

    const history = useHistory();
    //don't need this  since we are already doing it in the prevent Default 

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res=>{
                console.log("response for edit is->", res);
                setAuthorInfo(res.data.results)
    
            })
            .catch(err=>{
                console.log("err->", err);
            })
    },[])

    const changeHandler = (e)=>{
        //e.target.name for the names of each inputs of the edit
        //e.target.value for the edited value typed in the inputs

        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }

    
    
    const updateAuthor = (e)=>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${_id}`, authorInfo)
            .then(res=>{
                console.log("response on updates->", res)
                history.push('/')
            })
            .catch(err=>{
                console.log("err on update", err)
            })

    }


    return (
        <div>
            <p>Editing: {_id}</p>
            <Link to= {"/"} className = "btn btn-primary"> Home</Link>
            <form onSubmit={updateAuthor}>
                    <div className="form-group">
                        <label htmlFor="">Author Name:</label>
                        <input type="text"  name = "name" className="form-control" onChange={changeHandler} value={authorInfo.name} />
                        {/* <p className="text-danger">{formErrors.name?.message}</p> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Title:</label>
                        <input type="text" name="title"  className="form-control" onChange={changeHandler} value={authorInfo.title} />
                        {/* <p className="text-danger">{formErrors.title?.message}</p> */}
                    </div>
                    <Link to= {"/"} className = "btn btn-primary"> Cancel</Link>
                    <input type="submit" className = "btn btn-success" value="Update Author!" />
                </form>
        </div>
    );
};

export default EditAuthor;