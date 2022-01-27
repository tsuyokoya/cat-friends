import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import { cats } from './cats';

//what actually renders to the DOM
ReactDOM.render(
  //adding properties to the Card component
  <Card id={cats[0].id} name = {cats[0].name} email = {cats[0].email}/>,
  document.getElementById('root')
);












// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
