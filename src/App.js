import React from 'react';
import './App.css';
import Main from "./components/Main";
import Panel from "./components/Panel";
import Search from "./components/Search";
import Container from "./components/Container";

const App = () =>
    <div>
      <Main/>
      <Search/> 
      <Container />
      <Panel/>
    </div>

export default App;
