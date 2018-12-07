import React, { Component } from 'react';

const list = [
    {
        name: "Черное"
    }, 
    {
        name: "Средиземное"
    },
    {
        name: "Балтийское"
    }
]

class SeaList extends Component {
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

export default SeaList;
