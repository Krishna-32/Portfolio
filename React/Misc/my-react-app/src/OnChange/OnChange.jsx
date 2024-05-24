import React, {useState} from "react";

function OnChange(){

    const [name, setName] = useState("Bachira");

    const [number, setNumber] = useState(0);

    const [comment, setComment] = useState("");

    const [payment, setPayment] = useState();

    const [shipping, setShipping] = useState("Delivery");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleNumber = (e) => {
        setNumber(e.target.value);
    }

    const handleComment = (e) => {
        setComment(e.target.value);
    }

    const handlePayment = (e) => {
        setPayment(e.target.value);
    }

    const handleShipping = (e) => {
        setShipping(e.target.value);
    }

    return(
    <>
        <div>

            <input value={name} onChange={handleName}/>
            <p>Name : {name}</p>

            <input type="number" value={number} onChange={handleNumber}/>
            <p>Number : {number}</p>
            
            <textarea value={comment} onChange={handleComment} placeholder="Please Enter Text"/>
            <p>Comment : {comment}</p>

            <select value = {payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Master Card">Master Card</option>
                <option value="Gift Card">Gift Card</option>
            </select>
            <p>Payment : {payment}</p>

            <label> 
                <input type="Radio" value="Pick Up"
                    checked = {shipping === "Pick Up"}
                    onChange={handleShipping}/>
                Pick Up
            </label><br />

            <label>
                <input type="Radio" value="Delivery"
                    checked = {shipping === "Delivery"}
                    onChange={handleShipping}/>
                Delivery
            </label><br />
            <p>Shipping : {shipping}</p>

        </div>
    </>
    );
}

export default OnChange;