import React from 'react';
import styles from './LandingPage.module.css'
import FlipCard from '../component/FlipCard/FlipCard';
import Login from '../component/Login/Login';
import TestPage2 from './TestPage2';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1>Story Map</h1>
      <FlipCard front={<TestPage2 />} back={<Login />} options={1} />
    </div>
  );
}

export default LandingPage;
