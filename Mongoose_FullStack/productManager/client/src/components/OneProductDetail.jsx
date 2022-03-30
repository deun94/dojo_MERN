import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
// import { useHistory } from "react-router-dom";

const OneProductDetail = () => {
    const {_id} = useParams();
    const [info, setInfo] = useState({})
    // const history = useHistory();

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

    return (
        <div>
            <h3>Details on {info.title}</h3>
            {/* <p>Id: {info._id}</p> */}
            <p>Price: {info.price}</p>
            <p>Description: {info.description}</p>
        </div>
    ); 
};

export default OneProductDetail;