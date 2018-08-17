import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import Results from "./components/Results";
//import Col from "./components/Col";
import Panel from "./components/Panel";
import Row from "./components/Row";
import Search from "./components/Search";

const App = () =>
    <div>
      <Main/>
      <Row/>
      <Search/> 
      <Results/>
      <Panel/>
    </div>

export default App;
