import styles from './Calculator.module.css';
import React, {useState, useEffect} from 'react';

function Calculator(){

    const [value, setValue] = useState('0');

    useEffect(()=>
    console.log(value),[value])

    function getValue(e){
        const newValue = e.target.value;

        setValue(prevValue => {
            if (prevValue === '0' || prevValue.length > 9){
                return newValue;
            }

            else{
                return prevValue + newValue;
            }
        })
    }

    function Result(){
        setValue(eval(value))
    }


    function clear(){
        setValue('0');
    }


    return(
    <>
        <div className={styles.container}>
            <span className='result'>{value}</span>
            <div className={styles.buttons}>
                <button className={styles.button1} onClick={clear} >C</button>
                <button className={styles.button1} onClick={getValue} value="±">±</button>
                <button className={styles.button1} onClick={getValue} value="%">%</button>
                <button className={styles.button2} onClick={getValue} value="/">÷</button>
                <br />
                <button className={styles.button3} onClick={getValue} value="7">7</button>
                <button className={styles.button3} onClick={getValue} value="8">8</button>
                <button className={styles.button3} onClick={getValue} value="9">9</button>
                <button className={styles.button2} onClick={getValue} value="*">×</button>
                <br />
                <button className={styles.button3} onClick={getValue} value="4">4</button>
                <button className={styles.button3} onClick={getValue} value="5">5</button>
                <button className={styles.button3} onClick={getValue} value="6">6</button>
                <button className={styles.button2} onClick={getValue} value="-">-</button>
                <br />
                <button className={styles.button3} onClick={getValue} value="1">1</button>
                <button className={styles.button3} onClick={getValue} value="2">2</button>
                <button className={styles.button3} onClick={getValue} value="3">3</button>
                <button className={styles.button2} onClick={getValue} value="+">+</button>
                <br />
                <button className={styles.button3} onClick={getValue} value="²">²</button>
                <button className={styles.button3} onClick={getValue} value="0">0</button>
                <button className={styles.button3} onClick={getValue} value=".">.</button>
                <button className={styles.button2} onClick={Result}>=</button>
            </div>
        </div>
    </>
    )
}

export default Calculator;