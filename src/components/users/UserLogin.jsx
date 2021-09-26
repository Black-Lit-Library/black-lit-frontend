import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword([username, pin]);

  if (error) {
    return (
      <div style={{
        backgroundColor: 'gray',
        width: 'auto',
        height: '10vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        padding: '15px'
      }}>
        <p>Error: {error.message}</p>;
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div style={{
        backgroundColor: 'gray',
        width: 'auto',
        height: '10vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'auto',
        padding: '15px',
      }}>
        <p>Welcome, {user.email}</p>
      </div>
    );
  }
  return (
    <>
      <div style={{
        backgroundColor: 'gray',
        width: '50vw',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        padding: '15px'
      }}>
        <label
          htmlFor="username"
          style={{ margin: '2px', padding: '2px' }}
        >Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label
          htmlFor="pin"
          style={{ margin: '2px', padding: '2px' }}
        >Pin:</label>
        <input
          id="pin"
          type="text"
          value={pin}
          onChange={(event) => setPin(event.target.value)}
        />
        <button
          style={{ margin: '2px', padding: '2px' }}
          onClick={() => signInWithEmailAndPassword(username, pin)
          }>
          Login
        </button>
        <Link to="/signup">
          <button
            style={{ margin: '2px', padding: '2px' }}
          >Create An Account</button>
        </Link>
      </div>
    </>
  );
};

export default UserLogin;
