import Hoc from "./Hoc";

const Person2 = (props) =>{

    return(
        <>
            <p>Bob Bid's : ${props.amount}</p>
            <button onClick={props.handleBid}>Increase Bid</button>
        </>
    )
}

export default Hoc(Person2);