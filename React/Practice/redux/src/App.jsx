import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, setMisc } from './redux/Counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const misc = useSelector((state) => state.counter.misc)
  const dispatch = useDispatch()

  const handleMiscChange = (event) => {
    const newMisc = Number(event.target.value)
    dispatch(setMisc(newMisc))
  }

  return (
    <>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>


        <input type="number" value={misc} onChange={handleMiscChange}/>
      </div>
    </>
  )
}

export default App
