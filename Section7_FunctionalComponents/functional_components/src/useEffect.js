import { useState, useEffect, Component } from "react";

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

// const Interval = ({counter}) => {
//   useEffect(()=>{
//     const i = setInterval(()=> console.log(counter), 1000)
//     return () => clearInterval(i)
//   }, [counter])
//   return(
//     <p> Interval </p>
//   )
// }

class Interval extends Component {
  intervalo = ''
  componentDidMount(){
    this.intervalo = setInterval(()=> console.log(this.props.counter), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalo)
  }

  render() {
    return(
      <p> Interval </p>
    )
  }
}


const App = () => {

  const [counter, increase] = useCounter(0)
  
  useEffect(()=>{
    document.title = counter
  }, [counter]) // Receive the dependency for update

  return(
    <div>
      Counter: {counter}
      <button onClick={increase}> Increase </button>
      <button> Decrease </button>
      <Interval counter={counter}/>
    </div>
  ) 
}

export default App;
