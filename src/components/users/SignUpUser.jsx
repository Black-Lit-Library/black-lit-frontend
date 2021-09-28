import React, { useState } from 'react';
import { useFormState } from 'react-use-form-state';
import { createUser } from '../../utils/userUtils';
import { Link, useHistory } from 'react-router-dom';

export default function SignUpForm() {
  const [formState, {
    label,
    text,
    email,
    password
  }] = useFormState(null,
    {
      withIds: true
    });
  const [user, setUser] = useState(null);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formState, 'form state yall');
    const newUser = await createUser(formState.values);
    setUser(newUser);
    localStorage.setItem(user);
    history.push(`/${formState.values.userName}`);
    
  }

  return (
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
    }} >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
        onSubmit={handleSubmit}>
        <label {...label('firstName')}
          style={{ margin: '2px', padding: '2px' }}>First Name:{' '}</label>
        <input {...text('firstName')} />
        <label {...label('lastName')}
          style={{ margin: '2px', padding: '2px' }}>Last Name:{' '}</label>
        <input {...text('lastName')} />
        <label {...text('email')}
          style={{ margin: '2px', padding: '2px' }}>Email:{' '}</label>
        <input {...email('email')} required />
        <label {...text('userName')}
          style={{ margin: '2px', padding: '2px' }}>Username:{' '}</label>
        <input {...text('userName')} />
        <label {...text('pin')}
          style={{ margin: '2px', padding: '2px' }}>Pin:{' '}</label>
        <input {...password('pin')} required minLength="4" />
        <button
          style={{ margin: '15px', padding: '5px' }}>Sign Up!</button>
      </form>
      <Link to="/login">
        <button
          style={{ margin: '5px', padding: '3px' }}
        >Login</button>
      </Link>
      <Link to="/">
        <button
          style={{ margin: '5px', padding: '3px' }}
        >Home</button>
      </Link>
      {
        user &&  
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
      }
    </div>
  );
}
  
