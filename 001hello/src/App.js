import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

let count = 1
setInterval(() => {
    count += 1
})

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome 001hello to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>{count}</div>
                <div>{logo}</div>
            </div>
        );
    }
}

export default App;
