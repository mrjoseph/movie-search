import React, { Component } from 'react';
import Proptypes from 'prop-types';


const ListResult = ({result}) => {
  console.log(result[0]);
  return result.map((item) => {
    return (<li>{item.Title}</li>)
  })
}

const SearchResult = ({result}) => (
  <ul>
   <ListResult result={result}/>
  </ul>
);

SearchResult.propTypes = {
  result: Proptypes.array.isRequired,
};
export default SearchResult;