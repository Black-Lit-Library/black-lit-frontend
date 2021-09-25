import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ userName, pin, onChange, onSubmit }) => (
  <div style={{ backgroundColor: 'gray' }}>
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Username</label>{' '}
      <input
        id="username"
        type="text"
        value={userName}
        onChange={onChange}
      />
      <label htmlFor="pin">Pin</label>
      <input
        id="pin"
        type="text"
        value={pin}
        onChange={onChange}
      />
    </form>
    <button
      aria-label="login"
      type="submit"
    >Login</button>
    <button
      aria-label="sign up"
      type="submit"
    >Sign Up!</button>
  </div>
);

Login.propTypes = {
  userName: PropTypes.string.isRequired,
  pin: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Login;
