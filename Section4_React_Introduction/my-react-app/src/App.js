import Button from './Button.js'

const arr = [
  'Happy pig',
  'Sad pig',
  'Upset pig'
]

const App = () => {
  const myVar = false;
  const mytry = true;
  if(myVar){
    return <p>Mi Variable dio true</p>
  }
  return (
    <div>
      <h1 onClick={(e) => console.log("Click", e)} >Hello world</h1>
      {arr.map(el => <p key={el}>{el}</p>)}
      {mytry?
        <Button onClick={()=> console.log('clicked')}>
          Send
        </Button> 
        :
        <h1 onClick={(e) => console.log("Click", e)} >Hello world</h1>
      }
      
    </div>
    
  )
}

export default App;

