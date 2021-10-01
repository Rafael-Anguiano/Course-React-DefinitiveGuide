//import logo from './logo.svg';
//import './App.css';
import './main.css' 

const styles2 =  {
  boxShadow: '0 5px 3px  rgba(0,0,0,0.5)'
}

const styles = ({bg = '#222'}) => ({
  backgroundColor: bg,
  color:'#fff',
  padding: '10px 15px',
  margin: '10px 15px'
})
//style={{...styles2, ...styles({bg:'#333'})}}

const Li  = ({ children, state }) => {
  return (
    <li className='class-li'>{children} {state}</li>
  )
}

//style={styles({bg: '#750'})} 
const App = () => {
  const value = 'Sad'
  return (
    <ul className="class-css">
      <Li state="happy">Value of children</Li>
    </ul>
  );
}

export default App;
