import React from "react";
import { ReactDOM } from "react-dom";


//props 문법
function Propsss(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const element = <Propsss name="Juyoung" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );

  export default Propsss;