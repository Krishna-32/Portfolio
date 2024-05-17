import React , {useState} from "react"

const Hoc = (OriginalComponent) => {
    function NewComponent(){
        const [amount,setAmount] = useState(10)

        const handleBid = () => {
            setAmount(amount * 2)
        }
        return <OriginalComponent amount={amount} handleBid={handleBid} />
    }

    return NewComponent; 
}

export default Hoc;