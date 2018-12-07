import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './SideBar.css';

class SideBar extends Component {
  render() {
    return (
        <div className="App-sidebar">
            <ul>
                <li><Link to="/">Вкладка 1</Link></li>
                <li><Link to="/second">Вкладка 2</Link></li>
                <li><Link to="/third">Вкладка 3</Link></li>
            </ul>
        </div>
    );
  }
}

export default SideBar;
