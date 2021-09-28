import React, { useState } from 'react';
import useLocalStorage from 'react-localstorage-hook';
import { useFormState } from 'react-use-form-state';
import { getUser } from '../../utils/userUtils';
import { Link, useHistory } from 'react-router-dom';

const LOCAL_USER = {};
localStorage.removeItem(LOCAL_USER);

export default function LoginUserForm() {
  const [formState, { text, password }] = useFormState();
  const [user, setUser] = useState(null);
  const [localUser, setLocalUser] = useLocalStorage(LOCAL_USER, {});
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formState, 'login form state yall');
    const fetchedUser = await getUser(formState.values.userName);
    setUser(fetchedUser);
    setLocalUser({ ...localUser, fetchedUser });
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
    }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="username"
          style={{ margin: '2px', padding: '2px' }}
        >Username:{' '}</label>
        <input {...text('userName')} />
        <label htmlFor="pin"
          style={{ margin: '2px', padding: '2px' }}
        >Pin:{' '}</label>
        <input {...password('pin')} />
        <button
          style={{ margin: '15px', padding: '5px' }}
        >Login!</button>
      </form>
      <Link to="/signup">
        <button
          style={{ margin: '5px', padding: '3px' }}
        >Create An Account</button>
      </Link>
      <Link to="/">
        <button
          style={{ margin: '5px', padding: '3px' }}
        >Home</button>
      </Link>
      {
        user && <div>
          <p>You are now logged in, {user.userName}</p>
        </div>
      }
    </div>
  );
  
}
