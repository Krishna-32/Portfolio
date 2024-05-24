import React, {useState} from "react";

function ColorPicker(){
    const [color, setColor] = useState("white");

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    return(
    <>
    <div style={{background : color}}>

        <h1>Color Picker</h1>

        <p>Selected Color : {color}</p>

        <label>Select a Color : 
            <input type="color" value={color} onChange={handleColor} />
        </label>

    </div>

    
    </>
    );
}

export default ColorPicker;