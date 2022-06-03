import React from 'react';
import logo from './logo.png';
import './App.css';

const data = (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Reactcoin</h1>
            <h2>Crypto matters!</h2>
        </header>
    </div>
);

class App extends React.Component {
    render() {
        return data;
    }
}

export default App;
