//import logo from './logo.svg';
import './App.css';

const styles2 =  {
  boxShadow: '0 5px 3px  rgba(0,0,0,0.5)'
}

const styles = ({bg = '#222'}) => ({
  backgroundColor: bg,
  color:'#fff',
  padding: '10px 15px',
  margin: '10px 15px'
})

const Li  = ({ children, state }) => {
  return (
    <li style={{...styles2, ...styles({bg:'#333'})}} className='clase-li'>{children} {state}</li>
  )
}

const App = () => {
  const value = 'Sad'
  return (
    <ul style={styles({bg: '#750'})} className="clase-css">
      <Li state="happy">Value of children</Li>
    </ul>
  );
}

export default App;
