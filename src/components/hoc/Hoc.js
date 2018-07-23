import React, { Component } from 'react';

const Hoc = (WrappedComponent) => {
  return class LoaderHOC extends Component {

    render(){
      if(this.props.response === 'True') {
        return (<WrappedComponent {...this.props}/>)
      }
      if(this.props.response === 'False') {
        return (<div>No results found</div>)
      }
      return null;
    }
  };
}

export default Hoc;