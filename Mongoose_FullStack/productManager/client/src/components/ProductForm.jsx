import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

const ProductForm= (props) => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(null);
    let [description, setDescription] = useState("");

    const [formErrors, setFormErrors] = useState({});
    //empty objects for the errors since all errors are different

    const history = useHistory();
    //don't need this  since we are already doing it in the prevent Default 

    const createProduct = (e) =>{
        e.preventDefault();

        //for grouping the form info into one
        const formInfo = {title, price, description};

        axios.post("http://localhost:8000/api/products/new", formInfo)
        .then(res=>{
            console.log("response of the form", res);
            if(res.data.error){ //for posting erros
                setFormErrors(res.data.error.errors);
            }
            else{ //did the form submit properly?
                props.setFormSubmitted(!props.formSubmitted)

                //reset the form values
                setTitle("");
                setPrice("");
                setDescription("");
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
                <form onSubmit= {createProduct}>
                    <div className="form-group">
                        <label htmlFor="">Title:</label>
                        <input type="text"  className="form-control" onChange={(e)=>{setTitle(e.target.value)}} value={title} />
                        {/* <p className="text-danger">{formErrors.title?.message}</p> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Price:</label>
                        <input type="text"  className="form-control" onChange={(e)=>{setPrice(e.target.value)}} value={price} />
                        {/* <p className="text-danger">{formErrors.price?.message}</p> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description:</label>
                        <input type="textbox"  className="form-control" onChange={(e)=>{setDescription(e.target.value)}} value={description} />
                        {/* <p className="text-danger">{formErrors.description?.message}</p> */}
                    </div>
                    <input type="submit" className = "btn btn-success" value="Create Product!" />
                </form>
            </div>
        </>
    )
}

export default ProductForm;

