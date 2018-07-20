import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FormControl,
  FormGroup,
} from 'react-bootstrap';

import { searchAction } from '../../redux/actions/searchAction/searchAction';

class searchForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    if(this.state.value.length <= 0) return;
    this.props.searchAction(this.state.value);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <FormGroup
              controlId="formBasicText"
          >
            <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
                onKeyUp={this.handleSubmit}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
    );
  }
}

export default connect(null, { searchAction })(searchForm);