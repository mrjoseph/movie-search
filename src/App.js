import React, { Component } from 'react';
import { Button, Jumbotron, PageHeader } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <PageHeader>
              Movie Search
          </PageHeader>;
          <div className="container">
              <Jumbotron>
              <h1>Hello, world!</h1>
              <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
              </p>
              <p>
                  <Button bsStyle="primary">Learn more</Button>
              </p>
          </Jumbotron>
          <Button bsStyle="success">Success</Button>
          </div>
      </div>
    );
  }
}

export default App;
