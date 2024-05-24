import React , {useState} from "react";

function Props(props){

    const [value, setValue] = useState(0);

    function add(){
        setValue(prevValue => prevValue + 1);
    }

    function subtract(){
        setValue(prevValue => prevValue - 1);
    }

    return(
        <>
            {props.renderValue(value,add,subtract)}
        </>
    )
}

export default Props;