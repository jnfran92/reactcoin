import React from 'react';
import logo from './logo.png';
import './App.css';

function getRender(name: String) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Reactcoin</h1>
                <h2>Crypto matters!</h2>
                <h3>hello: {name}</h3>
            </header>
        </div>
        )
}

type AppProps = {
    oneThing: string;
    other: string;
}

type AppStates = {
    stateOne: string
}

class App extends React.Component<AppProps, AppStates> {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return getRender(this.props.oneThing);
    }
}

export default App;
