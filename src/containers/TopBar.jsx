import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import './TopBar.css';

import UserState from '../components/UserState.jsx';

class TopBar extends Component {
  log_in = () => {
    this.props.login(true);
  }
  log_out = () => {
    this.props.login(false); 
  }
  render() {
    const { auth } = this.props;
    return (
        <header className="App-topbar">
            <UserState auth={auth}></UserState>
            <button onClick={this.log_in}>Войти</button>
            <button onClick={this.log_out}>Выйти</button>
        </header>
    );
  }
}

const mapStateToProps = store => ({
    auth: store.user.auth
})

const mapDispatchToProps = dispatch => ({
    login: auth => dispatch(login(auth))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
