import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css'; // Import CSS as a module

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepageBackground}></div> {/* Blurred Background */}
      <div className={styles.homepageContent}>
        <h1 className={styles.homepageTitle}>Welcome to Flight Buddy</h1>
        <p className={styles.homepageDescription}>
          Flight Buddy helps you connect with other passengers and find travel companions.
          Whether you're a first-time flyer or a frequent traveler, we're here to make your journey more enjoyable.
        </p>
        <div className={styles.homepageButtons}>
          <button className={styles.homepageButton} onClick={() => navigate('/signup')}>
            Sign Up
          </button>
          <button className={styles.homepageButton} onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
