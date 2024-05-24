import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Practice/Redux/Counter/counterSlice';

function App(){

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <>
            <div>
                <button onClick={()=> dispatch(decrement())}>-</button>
                {count}
                <button onClick={()=> dispatch(increment())}>+</button>
            </div>
        </>
    );
}

export default App