import React, {useState} from "react";

function ArrayOfObject(){

    const [cars,setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function addCar(){
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }

        setCars(c => [...c, newCar])
    }

    function removeCar(index){
        setCars(cars.filter((_,i) => i!==index))
    }


    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h1>List Of Car Object</h1>

            <ul>
                {cars.map((car, index) => 
                <li key={index} onClick={() => removeCar(index)}>
                    {car.year}{car.make}{car.model}
                </li>)}
            </ul>

            <input type="number" value={carYear} placeholder="Year" onChange={handleYearChange}/><br />
            <input type="text" value={carMake} placeholder="Make" onChange={handleMakeChange}/><br />
            <input type="text" value={carModel} placeholder="Model" onChange={handleModelChange}/><br />

            <button onClick={addCar}>Add</button>
        </div>
    );
}

export default ArrayOfObject;