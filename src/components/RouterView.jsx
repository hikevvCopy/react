import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './RouterView.css';

import { routes } from '../routes';

class RouterView extends Component {
  render() {
    return (
        <div className="App-view">
            {
                routes.map((route, i) => (
                    <Route 
                        key={i} 
                        path={route.path} 
                        exact={route.exact}
                        component={route.component}
                    ></Route>
                ))
            }
        </div>
    );
  }
}

export default RouterView;
