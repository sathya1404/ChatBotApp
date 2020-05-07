import React from 'react';
import './App.css';
import Form from './components/Form';
import Chatbot from './Chatbot';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"


class App extends React.Component {


  render() {
    return (
    <Router>
      <div>
        <Route exact path="/" component={Form} />

        <Route path="/Chatbot" component={Chatbot} />
      </div>
    </Router>


    );
  }
}

export default App;
