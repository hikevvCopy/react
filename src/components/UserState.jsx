import React, { Component } from 'react'

export default class User extends Component {
  render() {
    const { auth } = this.props
    return (
      <div>
        <p><b>Состояние:</b> {auth ? 'Aвторизован' : 'Неавторизован'}</p>
      </div>
    )
  }
}