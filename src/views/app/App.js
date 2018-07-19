import React from 'react';
import { Jumbotron, PageHeader } from 'react-bootstrap';
import logo from './logo.svg';
import SearchForm from '../../components/searchForm/searchForm';
import './App.css';

const App = () =>
    <div className="App">
          <PageHeader>
              Movie Search
          </PageHeader>
          <div className="container">
              <Jumbotron>
              <h1>Search for your favorite movie</h1>
                <SearchForm />
          </Jumbotron>
          </div>
      </div>;



export default App;
