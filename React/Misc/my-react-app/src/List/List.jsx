
function List(){

    const fruits = ['apple', 'banana', 'orange', 'grape', 'watermelon'];

    fruits.sort();

    const listItems = fruits.map((fruit) =>
        <li>{fruit}</li>
    );

    return(
        <ul>{listItems}</ul>
    );
}

export default List




