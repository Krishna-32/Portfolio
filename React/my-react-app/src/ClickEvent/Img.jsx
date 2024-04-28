
function Img(){

    const url = "./public/362311f4d489fdfdf84a45cb7540236b.jpg";

    const handleClick = (e) => e.target.style.display = "none";
        

    return(<img onClick={(e) => handleClick(e)} src ={url}></img>);
}

export default Img;