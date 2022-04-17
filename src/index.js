import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';


// 이거는 TypeScript 형식에만 적용된다
// const container = document.getElementById('root') as HTMLElement;
// const root = createRoot(container);
// root.render(
//   <React.StrictMode>
//       <App/>
//     </React.StrictMode>);


// 기존 코드
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
