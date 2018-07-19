import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  ButtonToolbar,
  ControlLabel,
  HelpBlock,
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
    console.log('submitted');
    // this.props.searchAction(parseInt(e.target.value, 10));
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 1) return 'success';
    else if (length > 0) return 'error';
    return null;
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
          >
            <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
            <ButtonToolbar>
              <Button type="submit" bsStyle="success">Success</Button>
            </ButtonToolbar>
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
        </form>
    );
  }
}
const mapStateToProps = state => ({
  searchResult: state.searchReducer.firstname,
});

export default connect(mapStateToProps, { searchAction })(searchForm);