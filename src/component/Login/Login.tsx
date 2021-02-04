import React from 'react';
import styles from './Login.module.css'

const Login: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Login</h1>
      <form className={styles.loginForm}>
        <div>
          <input className={styles.input} type="text" name="username" required/>
          <label htmlFor="username" className={styles.label}>Username</label>
        </div>
        <div>
          <input className={styles.input} type="password" name="password" required/>
          <label htmlFor="password" className={styles.label}>Password</label>
        </div>
      </form>

    </div>
  );
}

export default Login;
