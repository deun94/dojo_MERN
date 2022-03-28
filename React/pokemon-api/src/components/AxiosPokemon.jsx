import React, {useState} from "react";
import axios from 'axios';

const AxiosPokemon = () => {

    const [pokemonList, setPokemonList] = useState([]);

    const getPokemonFromApi = () => {
        console.log("getting pokemon")

        //using fetch to get pokemon
        //---============================fetch
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=808")
        //=======================================axios
        // we don't need this in axis because this is an extra step of converting
        //     .then(response => {
        //         //converting ate to json(key value paris -> javascrip obect) so that js can understand it
        //     return response.json();
        //})
        .then(response => {
            console.log(response);
            //you need to dig into the data
            // console.log(response.results)
            //========================================axios evne one step deeper
            console.log(response.data.results)
            //setting the data into our list
            setPokemonList(response.data.results);
        }).catch(err=>{
            //this will only run if the fetch() process breaks for whatever reason
            console.log(err);
        });
    }
    return (
        <>
            <button onClick = {getPokemonFromApi}>Fetch Pokemon</button>
            {
                pokemonList.map((pokemonObj, index)=>{
                    return <div>
                        <li>{pokemonObj.name}</li>
                        <hr/>
                    </div>
                })
            }
            
        </>
    )
}

export default AxiosPokemon;