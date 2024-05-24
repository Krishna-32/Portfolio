import React, {useState} from "react";

function UpdateArrays(){
    
    const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);
    
    function addFruit(){
        const newFruit = document.getElementById("frt").value;
        document.getElementById("frt").value = "";

        setFruits(f => [...f, newFruit]);
    }

    function removeFruit(index){
        setFruits(fruits.filter((_, i) => i!==index))
    }

    return(
        <div>
            <h1>List of Fruits</h1>
            <ul>
                {fruits.map((fruit, index) => 
                <li key={index} onClick = {() => removeFruit(index)}>{fruit}</li>)}
            </ul>
            
            <input type="text" id="frt" placeholder="Enter Fruit Name"/>
            <button onClick={addFruit}>Add Fruit</button>
        </div>
    );
}

export default UpdateArrays;