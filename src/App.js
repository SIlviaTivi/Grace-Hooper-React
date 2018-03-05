import React, { Component } from 'react';

import './App.css';
import Header from './Header';
import Main from './Main';
import Aside from './Aside';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Aside/>

      </div>
    );
  }
}

export default App;
