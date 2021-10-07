import { useReducer, useState } from "react";

// state = { counter: 0 }
// action = { type: string, payload: anything }
const initial = {counter: 0}

const reducer = (state, action) => {
  switch(action.type){
    case 'increase':
      return {counter: state.counter +1}
    case 'decrease':
      return {counter: state.counter -1}
    case 'set':
      return {counter: action.payload}
    default:
      return
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initial)
  const [value, setValue] = useState(0)

  return(
    <div>
      counter: {state.counter}
      <input value={value} onChange={e=> setValue(e.target.value)} />
      <button onClick={()=> dispatch({type: 'increase'}) }> Increase </button>
      <button onClick={()=> dispatch({type: 'decrease'}) }> Decrease </button>
      <button onClick={()=> dispatch({type: 'set', payload:value }) }> Set </button>
    </div>
  )
}

export default App;