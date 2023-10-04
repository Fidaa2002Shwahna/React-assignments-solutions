import React, { Component } from 'react';
import '../style.css';
import Header from './Header';
import Team from './Team';

class App extends Component {
  render(){
    return (
      <div className='container pt-3 text-center'>
      <Header />
      <Team />
      </div>
        );
  }
}

export default App;
