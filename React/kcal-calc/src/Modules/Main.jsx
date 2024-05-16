import styles from './Main.module.css'
import Logic from './Logic';

function Main(){
    return(
    <>  
        <Logic renderValue = {
            (gender, age, weight, height, result, displayRef, handleGenderChange, handleAgeChange, handleWeightChange, handleHeightChange, calculation) =>
            <>
                <div className={styles.container}>
                    <h1>Calorie Calculator</h1>

                    <div className={styles.gender}>
                        <input type="radio" id="men" name="gender" value="men" checked = {gender === 'men'} onChange={handleGenderChange} />
                        <label htmlFor="men">Men</label>
                        &emsp;&emsp;
                        <input type="radio" id="women" name="gender" value="women" checked = {gender === 'women'} onChange={handleGenderChange} />
                        <label htmlFor="women">Women</label>
                    </div>

                    <div className={styles.age}>
                        <label htmlFor="age">Age (1 year or above) *</label><br />
                        <input type="number" id="age" min="1" max="100" required placeholder='years' value={age} onChange={handleAgeChange}/>
                    </div>

                    <div className={styles.weightHeight}>
                        <label htmlFor="weight">Weight*</label><br />
                        <label htmlFor="height">Height*</label><br />
                    </div>

                    <div className={styles.values}>
                            <input type="number" id="weight" min="1" max="100" required placeholder='kg' value={weight} onChange={handleWeightChange}/>
                            <input type="number" id="height" min="1" required placeholder='cm' value={height} onChange={handleHeightChange} />
                            
                    </div>

                    <button onClick={calculation}>Calculate</button><br />

                    <div ref={displayRef} className={styles.result}>
                        <hr /><br />
                        <h2>{result} kcal</h2>
                        <h3>Daily calorie estimate</h3>
                        <br />
                        <div className={styles.calculation}>
                            <ul>
                                <li><b>Weight Gain :</b> {result + 500}kcal</li>
                                <li><b>Mild Weight Gain :</b> {result + 250}kcal</li>
                                <li><b>Maintain Weight : </b>{result}kcal</li>
                                <li><b>Mild Weight Loss :</b> {result - 250}kcal</li>
                                <li><b>Weight Loss : </b>{result - 500}kcal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        }/>
    </>
    );
}

export default Main;