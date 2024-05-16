import React , {useState, useEffect, useRef} from "react";

const Ref = (props) =>{

    
    const [name, setName] = useState("Izuku");
    
    const nameRef = useRef();
    
    const handleNameChange = (e) =>{
        setName(e.target.value)
    }
    
    useEffect(()=>{
        nameRef.current.focus();
        console.log("render")
    },[])
    
    return(
        <>
            {props.renderName(name,handleNameChange,nameRef)}
        </>
    )
}

export default Ref;