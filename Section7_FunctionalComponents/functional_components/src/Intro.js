//function App(){}
//A function that changes its returned value no mather what
const impure = () => new Date().toLocaleString()

console.log(impure())

//Function that never change its return value
const MyComponent = ({myProp}) => {
  //const {myProp} = props
  return(
    <div>
      Nombre: {myProp}
    </div>
  )
}


const App = () => {

  return(
    <MyComponent myProp={'Happy Piggy'} />
  ) 
}

export default App;
