import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useCreateUserWithEmailAndPassword
} from 'react-firebase-hooks/auth';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword([
    firstName,
    lastName,
    userName,
    email,
    pin
  ]);

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
        margin: 'auto',
        padding: '15px'
      }}>
        <p>Successfully Signed Up! Welcome, {user.userName}!</p>
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
          htmlFor="firstname"
          style={{ margin: '2px', padding: '2px' }}
        >First Name:</label>
        <input
          id="firstname"
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <label
          htmlFor="lastname"
          style={{ margin: '2px', padding: '2px' }}
        >Last Name:</label>
        <input
          id="lastname"
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <label
          htmlFor="username"
          style={{ margin: '2px', padding: '2px' }}
        >Username:</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <label
          htmlFor="email"
          style={{ margin: '2px', padding: '2px' }}
        >Email:</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
          style={{ margin: '10px', padding: '5px' }}
          onClick={() =>
            createUserWithEmailAndPassword(
              firstName,
              lastName,
              userName,
              email,
              pin)
          }>
          Sign Up/Create An Account!
        </button>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </>
  );
};

export default SignUp;
