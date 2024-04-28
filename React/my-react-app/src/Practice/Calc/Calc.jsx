
function Calc(){

    const addition = (a,b) => {
        return a + b;
    };

    const subtraction = (a,b) => {
        return a - b;
    };

    

    return(
    <>
        <div className="div">

            <input id="inp1" type="number" />
            <input id="inp2" type="number" />
            <br />

            <input id="add" name="calc" type="radio" />
            <label htmlFor="add">+</label>

            <input id="sub" name="calc" type="radio" />
            <label htmlFor="sub">-</label>
            <br />

            <button>Calculate</button>

        </div>
    </>
    );
}

export default Calc;