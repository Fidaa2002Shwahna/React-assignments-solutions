import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';
import Header from './components/Header';
import Text from './components/Text';

class App extends Component {
  render() {
    return (
      <div className='container pt-4'>
        <Header />
        <Text />
        <Page />
      </div>
    );
  }
}

export default App;
