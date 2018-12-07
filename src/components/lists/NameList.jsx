import React, { Component } from 'react';

class NameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.setState({names: json});
            })
    }
    render() {
        return (        
            <div className="App-list">
                <ul>
                    {
                        this.state.names.map((item, i) => (
                            <li key={i}>{item.name}</li>
                        ))                     
                    }
                </ul>
            </div>
        );
    }
}

export default NameList;
