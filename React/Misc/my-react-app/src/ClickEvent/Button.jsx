
function Button(){

    let a = 0;

    const handleClick = (name) => {
        if(a < 5) {
            a++;
            console.log(`${name} clicked me ${a} times!!! 🫠`);
        }
        else {
            console.log(`Stop Clicking Me 😠`);
        }
    }
        

    return(<button onClick={() => handleClick("Bro")}>Click Me 😃</button>);
}

export default Button;