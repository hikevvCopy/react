import React, { Component } from 'react';
import { HashRouter as Router } from "react-router-dom";
import './App.css';
import TopBar from './containers/TopBar.jsx';
import SideBar from './components/SideBar.jsx';
import RouterView from './components/RouterView.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopBar></TopBar>
          <SideBar></SideBar>
          <RouterView></RouterView>
        </div>
      </Router>      
    );
  }
}

export default App;
