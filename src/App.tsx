import React from 'react';
import logo from './logo.png';
import './App.css';
import {Badge, Col, Container, Row} from "react-bootstrap";

function getRender(name: String) {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>Reactcoin</h1>
                    <h2>Crypto matters!</h2>
                    <h3>hello: {name}</h3>
                    <Badge bg="primary">Crypto</Badge> <Badge bg="secondary">TypeScript</Badge>{' '}
                </Col>
            </Row>
        </Container>
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
