import List2 from './List/List2';

function App(){

const fruits = [{id : 1, name :'apple', kcal : 95},
                    {id : 2, name : 'banana', kcal : 82}, 
                    {id : 3, name : 'orange', kcal : 60}, 
                    {id : 4, name : 'grape', kcal : 43}, 
                    {id : 5, name : 'watermelon', kcal : 109},
                    {id : 6, name : 'cherry', kcal : 115},
                    {id : 7, name : 'pomegranate', kcal : 33},
                    {id : 8, name : 'pineapple', kcal : 200}];

const vegetables = [{id : 1, name :'potato', kcal : 75},
                    {id : 2, name : 'brinjal', kcal : 300}, 
                    {id : 3, name : 'cauliflower', kcal : 210}, 
                    {id : 4, name : 'tomato', kcal : 55}, 
                    {id : 5, name : 'ladyfinger', kcal : 120},
                    {id : 6, name : 'onion', kcal : 50},
                    {id : 7, name : 'carrot', kcal : 45},
                    {id : 8, name : 'lettuce', kcal : 30}];

return(
        <>
        {fruits.length > 0 && <List2 items = {fruits} category = "Fruit"/>}
        {vegetables.length > 0 && <List2 items = {vegetables} category = "Vegetables"/>}
        </>
    );
}

export default App