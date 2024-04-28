import PropTypes from 'prop-types';

function List2(props){

    // const fruits = [{id : 1, name :'apple', kcal : 95},
    //                 {id : 2, name : 'banana', kcal : 82}, 
    //                 {id : 3, name : 'orange', kcal : 60}, 
    //                 {id : 4, name : 'grape', kcal : 43}, 
    //                 {id : 5, name : 'watermelon', kcal : 109},
    //                 {id : 6, name : 'cherry', kcal : 115},
    //                 {id : 7, name : 'pomegranate', kcal : 33},
    //                 {id : 8, name : 'pineapple', kcal : 200}];

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE
    // fruits.sort((a,b) => a.kcal - b.kcal); //ASCENDING
    // fruits.sort((a,b) => b.kcal - a.kcal); //DESCENDING

    const fruits = props.items;

    const category = props.category;

    const lowKcalFruits = fruits.filter((lowKcalFruit) => lowKcalFruit.kcal < 100);

    const highKcalFruits = fruits.filter((highKcalFruit) => highKcalFruit.kcal > 100);

    const listItems = fruits.map((fruit) =>
        <li key = {fruit.id}> {fruit.name} : {fruit.kcal}</li> 
    );

    const lowlistItems = lowKcalFruits.map((lowFruit) =>
        <li key = {lowFruit.id}> {lowFruit.name} : {lowFruit.kcal}</li> 
    );

    const highlistitems = highKcalFruits.map((highFruit) => 
        <li key = {highFruit.id}> {highFruit.name} : {highFruit.kcal}</li>
    );

    return(
        <>
        <h2>{category}</h2>
        <ol>{listItems}</ol>
        <ol>{lowlistItems}</ol>
        <ol>{highlistitems}</ol>
        <hr />
        </>
    );
}

List2.defaultProps = {
    items : [],
    category : "Category"
}

List2.propTypes = {
    items : PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                                name : PropTypes.string,
                                                kcal : PropTypes.number})),
    category : PropTypes.string
}

export default List2