import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const AllProducts = (props) => {

    //state variable for empty list of all products
    const [productList, setProductList] = useState([]);


    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=>{
                console.log("response for the get ->",res.data.results)
                setProductList(res.data.results);
            })
            .catch(err=>{
                console.log("errr", err)
            })
    },[props.formSubmitted])

    //===========================deleting
    const deleteProduct = (idOfProduct)=>{
        axios.delete(`http://localhost:8000/api/products/${idOfProduct}`)
            .then(res=>{
                console.log("response for deleting->", res)
                //line for removing from the DOM
                let filteredList = productList.filter((productObj)=>{
                    return productObj._id != idOfProduct 
                    //return back only the products whose id is not the id of the product we want to delete
                })
                setProductList(filteredList)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div>
            <h2>All Products</h2>
            {
                productList.map((productObj)=>{
                    return(
                        <div className="card" key = {productObj._id}>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <Link to={`/products/${productObj._id}`}>{productObj.title}</Link>
                                </h4>
                                <button onClick = {()=>{deleteProduct(productObj._id)}} className="btn btn-danger m-3">Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllProducts;