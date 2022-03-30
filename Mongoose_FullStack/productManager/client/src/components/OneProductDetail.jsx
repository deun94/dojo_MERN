import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const OneProductDetail = () => {
    const {_id} = useParams();
    const [info, setInfo] = useState({})
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res=>{
                console.log("response is->", res)
                setInfo(res.data.results);
            })
            .catch(err=>{
                console.log("err->", err)
            })

    }, [_id])

    //======================deleting
    const deleteProduct = ()=>{
        console.log("id of product we want to delete is->", _id)
        axios.delete(`http://localhost:8000/api/products/${_id}`)
            .then(res=>{
                console.log(res);
                history.push("/");
            })
            .catch(err=>{
                console.log(err)
            })
    }


    return (
        <div>
            <h3>Details on {info.title}</h3>
            {/* <p>Id: {info._id}</p> */}
            <Link to= {"/"} className = "btn btn-primary"> Home</Link>
            <p>Price: ${info.price}</p>
            <p>Description: {info.description}</p>
            <Link to={`/products/edit/${_id}`} className='btn btn-secondary m-3'>Edit {info.title}</Link>
            <button onClick = {deleteProduct} className='btn btn-danger'>Delete </button>
            
        </div>
    ); 
};

export default OneProductDetail;