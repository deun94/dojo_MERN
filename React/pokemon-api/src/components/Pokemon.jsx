import React, {useState} from "react";


const Pokemon = () => {

    const [pokemonList, setPokemonList] = useState([]);

    const getPokemonFromApi = () => {
        console.log("getting pokemon")

        //using fetch to get pokemon

        fetch("https://pokeapi.co/api/v2/pokemon?limit=808")
        //then basically means when the promist finihes execusing and getting us back the data, then run the code inside the .then()
            .then(response => {
                //converting ate to json(key value paris -> javascrip obect) so that js can understand it
            return response.json();
        }).then(response => {
            console.log(response);
            //you need to dig into the data
            console.log(response.results)

            //setting the data into our list
            setPokemonList(response.results);
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

export default Pokemon;