import React, { useState } from 'react';
import { getUser } from '../../utils/userUtils';
import { Link, useHistory } from 'react-router-dom';

export default function LoginUserForm() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    pin: ''
  });
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    const fetchedUser = await getUser(user.userName);
    console.log(fetchedUser, 'fetched user');
    setUser({ fetchedUser });
    console.log(user, 'this is our logged in user');
    history.push(`/${user.userName}`);
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
        <input
          name="username"
          type="text"
          value={user.username}
          role="textbox"
          aria-label="username"
          onChange={({ target }) => setUser({
            username: target.value
          })}
        />
        <label htmlFor="pin"
          style={{ margin: '2px', padding: '2px' }}
        >Pin:{' '}</label>
        <input
          name="pin"
          type="text"
          value={user.pin}
          role="textbox"
          aria-label="pin"
          onChange={({ target }) => setUser({
            pin: target.value
          })}
        />
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
