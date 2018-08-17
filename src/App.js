import React from 'react';
import './App.css';
import Main from "./components/Main";
import Panel from "./components/Panel";
import Search from "./components/Search";
import GoogleMaps from 'google-maps-react';

const App = () =>
    <div>
      <Main/>
      <Search/> 
      <GoogleMaps />
      <Panel/>
    </div>

export default App;
