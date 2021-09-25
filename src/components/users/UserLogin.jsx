import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
import {
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword([email, password]);
  // const { id } = useParams();

  if (error) {
    return (
      <div style={{
        backgroundColor: 'gray',
        width: 'auto',
        height: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
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
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
      }}>
        <p>Welcome, {user.email}</p>
      </div>
    );
  }
  return (
    <>
      <div style={{
        backgroundColor: 'gray',
        width: 'auto',
        height: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
      }}>
        <label htmlFor="username">Email:{' '}</label>
        <input
          id="username"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="pin">Password:{' '}</label>
        <input
          id="pin"
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={() => signInWithEmailAndPassword(email, password)
        }>
          Login
        </button>
      </div>
      <div style={{
        backgroundColor: 'gray',
        width: 'auto',
        height: '5vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
      }}
      >
        <button>Create An Account</button>
      </div>
    </>
  );
};

export default UserLogin;
