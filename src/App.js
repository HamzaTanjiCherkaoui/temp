import "./app.css"
import React, { Component } from 'react'
import messages from './messages'
import Disscussion from "./components/Discussion";
class App extends Component {

     
    render() {
        return (
            <Disscussion messages={messages} />
        );
    }
}

export default App;
