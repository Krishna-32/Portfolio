import React , {useState, useEffect, useRef} from "react";

const Logic = (props) =>{

    const [gender, setGender] = useState('men')
    const [age, setAge] = useState([]);
    const [weight, setWeight] = useState([]);
    const [height, setHeight] = useState([]);
    const [result, setResult] = useState([]);
    const displayRef = useRef();

    const handleGenderChange = (e) => {
        setGender(e.target.value)
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }

    const handleWeightChange = (e) => {
        setWeight(e.target.value)
    }

    const handleHeightChange = (e) => {
        setHeight(e.target.value)
    }

    const calculation = () => {
        if(age && weight && height == ""){
            console.log("Fill all the fields")
        }

        else{
            
            if (gender == "men"){
                setResult(10 * weight + 6.25 * height - 5 * age + 5)
                displayRef.current.style.display = 'block';
            }

            else{
                setResult(10 * weight + 6.25 * height - 5 * age - 161)
                displayRef.current.style.display = 'block';
            }
        }
    }

    useEffect(() => {
        console.log(result)
    },[calculation])
    
    return(
        <>
            {props.renderValue(gender, age, weight, height, result, displayRef, handleGenderChange, handleAgeChange, handleWeightChange, handleHeightChange, calculation)}
        </>
    )
}

export default Logic;