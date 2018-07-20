import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './searchresult.css';


const ListResult = ({result}) => {
  console.log(result[0]);
  return result.map((item) => {
    return (<li className="list-group-item">{item.Title}</li>)
  })
}

const SearchResult = ({result}) => (
  <ul className="list-group">
   <ListResult result={result}/>
  </ul>
);

SearchResult.propTypes = {
  result: Proptypes.array.isRequired,
};
export default SearchResult;