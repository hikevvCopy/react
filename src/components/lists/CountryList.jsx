import React, { Component } from 'react';

const list = [
    {
        name: "Англия"
    }, 
    {
        name: "Франция"
    },
    {
        name: "Германия"
    }
]

class CountryList extends Component {
  render() {
    return (        
        <div className="App-list">
            <ul>
                {
                    list.map((item, i) => (
                        <li key={i}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    );
  }
}

export default CountryList;
