import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllAuthors = (props) => {

    //state variable for empty list of all authors
    const {_id} = useParams();
    const [authorList, setAuthorList] = useState([]);


    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then(res=>{
                console.log("response for the get ->",res.data.results)
                setAuthorList(res.data.results);
            })
            .catch(err=>{
                console.log("errr", err)
            })
    },[props.formSubmitted])

    //===========================deleting
    const deleteAuthor = (idOfAuthor)=>{
        axios.delete(`http://localhost:8000/api/authors/${idOfAuthor}`)
            .then(res=>{
                console.log("response for deleting->", res)
                //line for removing from the DOM
                let filteredList = authorList.filter((authorObj)=>{
                    return authorObj._id !== idOfAuthor 
                    //return back only the authors whose id is not the id of the author we want to delete
                })
                setAuthorList(filteredList)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div>
            <h2>Favoirte Authors</h2>
            <Link to= {"/new"} className = "btn btn-primary"> Add authors</Link>
            {
                authorList.map((authorObj)=>{
                    return(
                        <div className="card" key = {authorObj._id}>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <Link to={`/authors/${authorObj._id}`}>{authorObj.title}</Link>
                                </h4>
                                <Link to={`/authors/edit/${authorObj._id}`} className='btn btn-secondary m-3'>Edit</Link>
                                <button onClick = {()=>{deleteAuthor(authorObj._id)}} className="btn btn-danger m-3">Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllAuthors;