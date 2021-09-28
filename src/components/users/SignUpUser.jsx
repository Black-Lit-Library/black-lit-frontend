import React, { useState } from 'react';
import { useFormState } from 'react-use-form-state';
import { createUser } from '../../utils/userUtils';
// import { createUser } from '../../utils/userUtils';

export default function SignUpForm() {
  const [formState, { text, email, password }] = useFormState();
  const [user, setUser] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formState, 'form state yall');
    const newUser = await createUser(formState.values);
    setUser(newUser);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input {...text('firstName')} />
        <input {...text('lastName')} />
        <input {...text('userName')} />
        <input {...email('email')} required />
        <input {...password('pin')} required minLength="4" />
        <button>Button</button>
      </form>
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
    </>
  );
}
  
