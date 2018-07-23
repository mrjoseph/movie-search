import React, { Component } from 'react';
import { Jumbotron, PageHeader } from 'react-bootstrap';
import logo from './logo.svg';
import SearchForm from '../../components/searchForm/searchForm';
import SearchResult from '../../components/searchResult/searchResult';
import './App.css';
import { connect } from 'react-redux';
import { searchAction } from '../../redux/actions/searchAction/searchAction';

class App extends Component {
  render() {
    const { Search, Response } = this.props.searchResult;
    console.log('Response', Response);
    return (
        <div className="App">
          <PageHeader>
            Movie Search
          </PageHeader>
          <div className="container">
            <Jumbotron>
              <h1>Search for your favorite movie</h1>
              <SearchForm />
            </Jumbotron>
            <SearchResult response={Response} result={Search}/>
          </div>
        </div>
    );
  }
}
const mapStateToProps = state => ({
  searchResult: state.searchReducer,
});

export default connect(mapStateToProps, { searchAction })(App);
