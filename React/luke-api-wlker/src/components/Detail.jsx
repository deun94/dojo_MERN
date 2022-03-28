import React, {useState} from 'react'
import {useParams} from "react-router";
import axios from "axios";
import { useEffect } from "react";

function Detail() {

    //set variables
    const {category, id} = useParams();

    let [info, setInfo] = useState({});
    //for key-value pairs from the api data==========================

    //======================getting data from api
    useEffect(() =>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response=>{
            console.log("response detail is ----", response)
            setInfo(response.data)
    
        })
        .catch(err=>{
            console.log("you have an error", err);
        })
    }, [category, id])

    return (
        <>
            <div>
                {
                    category === "people"?
                        <>
                        <h1>{info.name}</h1>
                        <p><b>Height: </b> {info.height} cm</p>
                        <p><b>Mass: </b>{info.mass} kg</p>
                        <p><b>Hair Color:</b> {info.hair_color}</p>
                        <p><b>Gender:</b> {info.gender}</p>
                        </>
                    : category === "planets"?
                        <>
                        <h1>{info.name}</h1>
                        <p><b>Diameter: </b> {info.diameter} cm</p>
                        <p><b>Climate: </b>{info.climate}</p>
                        <p><b>Terrain:</b> {info.terrain}</p>
                        <p><b>Population:</b> {info.population} objects</p>
                        </>
                    : category === "species"?
                        <>
                        <h1>{info.name}</h1>
                        <p><b>Language: </b> {info.language} cm</p>
                        <p><b>Skin colors?: </b>{info.skin_colors}</p>
                        <p><b>Average Height:</b> {info.average_height} cm</p>
                        <p><b>Average Lifespan:</b> {info.average_lifespan} years old</p>
                        </>
                        :<>
                            <h1 className="text-danger">There aren't the droids you are looking for!</h1>
                            <img src ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cinemablend.com%2Fstar-wars%2Fobi-wan-kenobi-has-the-release-month-for-the-disney-show-been-revealed&psig=AOvVaw1LiIBgzeldQN3XOWqS9dr1&ust=1648523653108000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICbx6zr5_YCFQAAAAAdAAAAABAD" alt="obiwan"></img>
                        </>
                }

            </div>
        </>
    )
}

export default Detail
