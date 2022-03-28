import React, {useState} from "react";

import axios from "axios";
import { useEffect } from "react";
import {useHistory} from "react-router-dom";

const SearchForm=() =>{
    //==================================Set elemnts
    const [categories, setCategories] = useState([]);
    //for arrays of people, planet, etc

    //state variable for each input in this form
    const [selectedCat, setSelectedCat] = useState("")
    const [id, setId] = useState(null)

    //=============================initialize history as a variable
    const history = useHistory();

    //===============================Axios to get the api data
    //=============================use effct so the axios get api only works in the first render
    useEffect(() => {
        axios.get("https://swapi.dev/api/")
        .then(response=>{
            console.log("response is ----", response)
            console.log(Object.keys(response.data))
            //gives an array of the keys from response.data  i.e/array [a, b, c]
            setCategories(Object.keys(response.data))
            //to default the selection in the keys as the first thing in the array
            setSelectedCat(Object.keys(response.data[0]))
    
        })
        .catch(err=>{
            console.log("you have an error", err);
        })
    }, [])
    //takes function and array  callbackfunction!
    //says only run this code the first time


    //===========================submit function for redirect
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submitted");
        //for redirecting purpose
        history.push(`/${selectedCat}/${id}`);
    }

    return (
        <>
            <div>
                <form onSubmit ={handleSubmit} className="d-flex justify-content-between">
                    <div className="form-group">
                        <label htmlFor="">Search For :</label>
                        <select 
                            onChange = {(e)=>{setSelectedCat(e.target.value)}}
                            className="form-select">
                            {
                                categories.map((catObj, index)=>{
                                    return(
                                        <option key = {index} value ={catObj}>{catObj}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="">ID: </label>
                        <input onChange = {(e)=>setId(e.target.value)} type="number" className="form-contorl"/>
                    </div>
                    <input type="submit" value="Search" className="btn-sm btn-primary"/>
                </form>
                
            </div>
        </>
    )
}

export default SearchForm
