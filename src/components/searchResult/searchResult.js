import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Hoc from '../hoc/Hoc';
import './searchresult.css';

class ListItem extends Component {
  constructor() {
    super();
    this.state = {
      toggleClass: false,
    };
  }
  toggleClass = () => {
    this.setState({ toggleClass: !this.state.toggleClass });
  };
  render() {
    const { item } = this.props;
      return (<li onClick={this.toggleClass} className={this.state.toggleClass ? 'list-group-item active' : 'list-group-item'}>
        {item.Title}
      </li>)
  }
}


const SearchResult = ({result}) => (
  <ul className="list-group">
    {result.map((item) => {
      return (<ListItem key={item.imdbID} item={item}/>)
    })}
  </ul>
);


SearchResult.propTypes = {
  result: Proptypes.array.isRequired,
};
export default Hoc(SearchResult);