import React from 'react';
import logo from './logo.svg';
import './App.css';
require('dotenv').config();

const App = () => {

  const APP_ID = "b9a6238d";
  const APP_KEY = process.env.API_KEY;

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  return(
    <div className="App">
    <h1>Hello React</h1>
  )
}

export default App;
