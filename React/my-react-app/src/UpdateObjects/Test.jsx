import React, {useState} from "react";

function Test(){

    const [pokemon, setPokemon] = useState({name: "Pikachu",
                                            type: "Electric",
                                            evolution: 3});

    function handleName(event){
        setPokemon(p => ({...pokemon, name: event.target.value}));
    }

    function handleType(event){
        setPokemon(p => ({...pokemon, type: event.target.value}));
    }

    function handleEvolution(event){
        setPokemon(p => ({...pokemon, evolution: event.target.value}));
    }

    return(
    <>  
    <div>
        <p>My Favorite Pokemon is : {pokemon.name}</p>
        <p>{pokemon.name}'s Type : {pokemon.type}</p>
        <p>{pokemon.name}'s Evolution : {pokemon.evolution}</p>

        <input type="text" value={pokemon.name} onChange={handleName}/><br /><br />
        <input type="text" value={pokemon.type} onChange={handleType}/><br /><br />
        <input type="number" value={pokemon.evolution} onChange={handleEvolution}/>
    </div>
    </>
    );
}

export default Test;