
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAction } from '../../redux/actions/searchAction/searchAction';

import styles from './searchForm.scss';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.userAction(parseInt(e.target.value, 10));
  }
  render() {
    const { firstname } = this.props;
    return (
      <div className={styles.formContainer}>
        <h1>Hello World</h1>
        <h2>{firstname && firstname}</h2>
        <form>
          <select onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </form>
      </div>);
  }
}

const mapStateToProps = state => ({
  firstname: state.searchReducer.firstname,
});

UserDetails.propTypes = {
  userAction: PropTypes.func,
  firstname: PropTypes.string,
};

UserDetails.defaultProps = {
  firstname: '',
  userAction: () => {},
};

export default connect(mapStateToProps, { userAction })(UserDetails);
