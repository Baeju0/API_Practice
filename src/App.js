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

function App() {
  // let [name, setName] = useState(['Juyoung','Window','Mac']);

  return (
    <div>
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

    <Community/>
    </div>
  );
}

export default App;
