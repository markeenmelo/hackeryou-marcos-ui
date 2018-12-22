import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import HeaderTab from './components/HeaderTab'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <HeaderTab/>
        </div>
    );
  }
}

export default App;
