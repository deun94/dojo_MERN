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

                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllProducts;