import React from 'react';
import styles from './home.scss';
import UserDetails from '../../components/searchForm/searchForm';

const Home = () => (
  <div className={styles.container}>
    <h1>This is the homepage</h1>
    <UserDetails />
  </div>);


export default Home;
