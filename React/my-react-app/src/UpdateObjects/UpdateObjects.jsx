import React, {useState} from 'react';

function UpdateObjects(){

    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang"});

    function handleYearChange(event){
        setCar(c => ({...car, year: event.target.value}));
    }

    function handleMakeChange(event){
        setCar(c => ({...car, make: event.target.value}));
    }

    function handleModelChange(event){
        setCar(c => ({...car, model: event.target.value}));
    }

    return(
    <>
        <div>
            <p>My favorite car is : {car.year} {car.make} {car.model}</p>

            <input type="number"  value={car.year} onChange={handleYearChange}/><br /><br />
            <input type="text" value={car.make} onChange={handleMakeChange}/><br /><br />
            <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>
    </>
    );
}

export default UpdateObjects;