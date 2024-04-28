import React, {useState} from "react";
import styles from "./UpdaterFunction.module.css";

function UpdaterFunction(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);

    }

    const decrement = () => {
        setCount(c=> c - 1);
        setCount(c=> c - 1);
    } 

    const reset = () => {
        setCount(c => c = 0);
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

export default UpdaterFunction;