import Props from "./Practice/Props/Props";

function App(){

    return(
        <>

        <Props renderValue = {
            (value,add,subtract) => 
            <>
                Value : {value} <br />
                <button onClick={add}>Add</button> &nbsp;
                <button onClick={subtract}>Subtract</button>
            </>
            }/>
        </>
    );
}

export default App