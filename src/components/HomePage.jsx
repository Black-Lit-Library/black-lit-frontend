import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <>
    <h1>Welcome</h1>
    <div>
      <Link to="/signup">
        <button>Create An Account</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  </>
);

export default HomePage;
