import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div style={{
    backgroundColor: 'gray',
    width: '40vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    padding: '15px'
  }}
  >
    <h1>Welcome</h1>
    <div>
      <Link to="/signup">
        <button>Create An Account</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  </div>
);

export default HomePage;
