import React, {useState} from "react";

function Calc(){

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [result, setResult] = useState(0);
    const [symbol, setSymbol] = useState("+");

    function handleValueChange1(e){
        setValue1(e.target.value)
    }

    function handleValueChange2(e){
        setValue2(e.target.value)
    }

    function handleSymbolChange(e){
        setSymbol(e.target.value)
    }

    function add(){
        return parseFloat(value1) + parseFloat(value2) 
    }
    
    function subtract(){
        return parseFloat(value1) - parseFloat(value2)
    }

    function total(){
        let total;
        if(symbol === "+"){
            total = add()
        }
        else if(symbol === "-"){
            total = subtract()
        }

        setResult(total) 
    }

    return(
    <>
        <div>
            <h1>Calculator</h1>
            
            <input type="number" value={value1} onChange={handleValueChange1} />
            <br /><br />

            <input type="number" value={value2} onChange={handleValueChange2} />
            <br /><br />

            <label>
                <input type="radio" value="+" checked = {symbol === "+"} onChange={handleSymbolChange}/>
                +
            </label>

            <label>
                <input type="radio" value="-" checked = {symbol === "-"} onChange={handleSymbolChange} />
                -
            </label>
            <br /><br />

            <button onClick={total}>Calculate</button>
            <br /><br />

            <span>{result}</span>
            
        </div>
    </>
    );
}

export default Calc;