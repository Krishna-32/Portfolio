import Hoc from "./Hoc";

const Person1 = (props) =>{
    
    return(
        <>
            <p>Adam Bid's : ${props.amount}</p>
            <button onClick={props.handleBid}>Increase Bid</button>
        </>
    )
}

export default Hoc(Person1);