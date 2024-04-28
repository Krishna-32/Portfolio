
function Button2(){

    let a = 0;

    const handleClick = (e) => e.target.textContent = "OUCH 🤕";
        

    return(<button onDoubleClick={(e) => handleClick(e)}>Click Me 😃</button>);
}

export default Button2;