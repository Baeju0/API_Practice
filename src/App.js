import logo from './logo.svg';
import './App.css';
// import { ReactDOM, useState } from 'react';
import { useState } from 'react';
import { ReactDOM } from 'react-dom';
// import Weather from './Weather';
import Radio from './Radio';
import Select from './Select';
import HeaderLogin from './HeaderLogin';
import Header from './Header';
import LocalStorageComponent from './LocalStorageComponent';
import Counter from './useCallback';
import Propsss from './Props';
import IFRender from './IFRender';
import Community from './Community';
import Context from './Context';
import SortedWords from './SortedWords';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import UseContext from './UseContext';
import UseReducer from './UseReducer';
import { useEffect } from 'react';

function App() {
  // let [name, setName] = useState(['Juyoung','Window','Mac']);
  
  // sync & async 동기방식?
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(10);
  
  useEffect(()=>{
    if (count != 0 && count < 3) {
      setAge(age+1)
    }
  },[count])


  return (
    <div>
      <div>내 나이는 {age}</div>
      <button onClick={()=>{
      setCount(count+1);
    }}>눌러보세요!</button>


      {/* <Header/>
      <HeaderLogin/> */}
    {/* <Weather/> */}
    {/* <Radio/> */}
    {/* <Select/> */}
    {/* <LocalStorageComponent/> */}
    {/* <Counter/> */}

    {/* <h1>안녕하세요!{name}</h1>
    <App name={name}/> */}
    
    {/* <IFRender/> */}
    {/* <h2 className='name1'>hello{name[0]}</h2> */}

    {/* <Community/> */}
    {/* <Context/> */}
    {/* <SortedWords/> */}
    {/* <UseState/> */}
    {/* <UseEffect/> */}
    {/* <UseRef/> */}
    {/* <UseContext/> */}
    <UseReducer/>
    </div>
  );
}

export default App;
