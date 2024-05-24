import React, {useState} from "react";

function Test(){

    const [pkmn, setPkmn] = useState(["Pichu","Pikachu","Raichu"]);

    function addPkmn(){
        const newPkmn = document.getElementById("pokemon").value;
        document.getElementById("pokemon").value = '';

        setPkmn(p => [ ...p , newPkmn]);
    }

    function removePkmn(index){
        setPkmn(pkmn.filter((_, i) => i!==index))
    }


    return(
        <div>
            <h1>Pokemon</h1>

            <ul>
                {pkmn.map((poke, index) => 
                <li key={index} onClick={() => removePkmn(index)}>{poke}</li>)}
            </ul>

            <input type="text" id="pokemon" placeholder="Enter Pokemon Name"/>

            <button onClick={addPkmn}>Add</button>
        </div>
    );
}

export default Test;