import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const Li = ({children, age, place, name}) => {
//   return(
//     <li>{children}{name} and Im {age}, Im in {place}</li>
//   )
// }

// const X = () => 
//   <ul>
//     <Li 
//       age={'22'}
//       place={'My house'}
//       name={'Rafael'}
//     > Hi I´m  </Li>
//     <Li
//       age={'19'}
//       place={'the business'}
//       name={'Mariana'}
//     > Hi I´m </Li>
//     <Li
//       age={'23'}
//       place={'a ship'}
//       name={'Ana'}
//     > Hi I´m </Li>
//   </ul>

// // <p> Hello World </p>

// ReactDOM.render(
//   <X/>, document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
