import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Login.module.css'
import { LoginInput } from '../../type/types';

const Login: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<LoginInput>({
    mode: 'onTouched',
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Login</h1>
      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input className={styles.input} type="text" name="username" ref={register({ required: true })} />
          <label htmlFor="username" className={styles.label}>Username</label>
        </div>
        {errors.username && <div className={styles.errorMessage}>username is required</div>}
        <div>
          <input className={styles.input} type="password" name="password" ref={register({ required: true })} />
          <label htmlFor="password" className={styles.label}>Password</label>
        </div>
        {errors.password ? <div className={styles.errorMessage}>password is required</div> : null}
        <button type="submit" className={styles.submit}>Submit</button>
      </form>

    </div>
  );
}

export default Login;
