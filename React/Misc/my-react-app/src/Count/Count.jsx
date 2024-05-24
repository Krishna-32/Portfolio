import React, {useState} from "react";
import styles from "./Count.module.css";

function Count(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    } 

    const reset = () => {
        setCount(0);
    }

    return(
    <>
        <div>
            <h1>{count}</h1>
            <div className={styles.flex}>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    </>
    );
}

export default Count;