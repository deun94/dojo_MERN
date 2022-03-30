import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";


const EditProductForm = (props) => {
    //state variable for all the product info
    let [productInfo, setProductInfo] = useState({
        title: "",
        age: "",
        description: ""
    })


    let {_id} = useParams();


    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res=>{
                console.log("response for edit is->", res);
                setProductInfo(res.data.results)
    
            })
            .catch(err=>{
                console.log("err->", err);
            })
    },[])

    const changeHandler = (e)=>{
        //e.target.name for the names of each inputs of the edit
        //e.target.value for the edited value typed in the inputs

        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    
    
    const updateProduct = (e)=>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${_id}`, productInfo)
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
            <form onSubmit={updateProduct}>
            <div className="form-group">
                        <label htmlFor="">Title:</label>
                        <input type="text" name="title"  className="form-control" onChange={changeHandler} value={productInfo.title} />
                        {/* <p className="text-danger">{formErrors.title?.message}</p> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Price:</label>
                        <input type="text" name="price" className="form-control" onChange={changeHandler} value={productInfo.price} />
                        {/* <p className="text-danger">{formErrors.price?.message}</p> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description:</label>
                        <input type="textbox" name = "description" className="form-control" onChange={changeHandler} value={productInfo.description} />
                        {/* <p className="text-danger">{formErrors.description?.message}</p> */}
                    </div>
                    <input type="submit" className = "btn btn-success" value="Update Product!" />
                </form>
        </div>
    );
};

export default EditProductForm;