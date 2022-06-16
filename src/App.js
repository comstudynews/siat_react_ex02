import { useState } from 'react';
import './App.css';

function Heading(props) {
  return (
    <>
      <h1>{props.name}이의 {props.company}</h1>
      <button onClick={()=>{
        props.action("Gallery");
      }}>Company변경</button>
    </>
  );  
}

function App() {
  var user = "홍길동";
  var [company, setCompany] = useState("Home Shopping");
  function actionFn(message) {
    setCompany(message);
  }

  return (
    <div>
      company : <input type="text" name="company" value={company} onChange={function(evt){
        setCompany(evt.currentTarget.value);
      }}/>
      <Heading name={user} company={company} action={actionFn}></Heading></div>
  );
}

export default App;