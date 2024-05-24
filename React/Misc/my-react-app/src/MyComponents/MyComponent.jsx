import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState("Guest");

    const [age, setAge] = useState(0);

    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Abigail");
    };

    const updateAge = () => {
        setAge(age + 1);
    };

    const updateStatus = () => {
        setIsEmployed(!isEmployed);
    };

    return(
    <>
        <div>
            <p>Name : {name}</p>
            <button on onClick={updateName}>Set Name</button>

            <p>Age : {age}</p>
            <button on onClick={updateAge}>Increase Age</button>

            <p>Employed? : {isEmployed ? "Yes" : "No"}</p>
            <button on onClick={updateStatus}>Set Status</button>
        </div>
    </>
    );
}

export default MyComponent;