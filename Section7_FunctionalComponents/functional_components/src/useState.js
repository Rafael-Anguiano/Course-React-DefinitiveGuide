import { useState } from "react";

/**
 * Rules of the hooks:
 *  Don't use it in loops, always use it in the highest part of our project
 *  Only are aceptable in 2 parts: 
 *  1. React Components (funtion with a JSX code inside)
 *  2. Custom Hooks
 */

// class App extends Component {
//   state={counter: 0}
//   increase =() => {
//     this.setState({counter: this.state.counter +1})
//   }
//   render(){
//     return(
//       <div>
//         Counter: {this.state.counter}
//         <button onClick={this.increase}> Increase </button>
//       </div>
//     )
//   }
// }


// CUSTOM HOOK
const useCounter = (initial) => {
  const [counter, setCounter] = useState(0)
  const increase = () => {
    setCounter(counter+1)
  }

  return [counter, increase]

}

const App = () => {

  const [counter, increase] = useCounter(0)

  return(
    <div>
      Counter: {counter}
      <button onClick={increase}> Increase </button>
      <button> Decrease </button>
    </div>
  ) 
}

export default App;
