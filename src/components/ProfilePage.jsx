import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import User from './users/User';
import { deleteUser, getUser, updateUser } from '../utils/userUtils';

const ProfilePage = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => (
    getUser({ username })
      .then((user) => {
        setUser(user);
        console.log(user);
      })
  ), []);

  // async function handleUpdateProfile(event) {
  //   event.preventDefault();
  //   const updateProfile = await updateUser();
  //   setUser(updateProfile);
  // }

  async function handleDelete(event) {
    event.preventDefault();
    const userProfile = await deleteUser(username);
    setUser({ ...user, userProfile });
    history.push('/');
  }


  return (
    <>
      <div>
        <User
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          userName={user.userName}
          pin={user.pin}
        />
        
        {/* Update Profile connects to PUT route */}
        <button>Update Profile</button>
        {/* Logout uses window.location to return home 
    and set back to initial state */}
        <button
          onClick={handleDelete}
        >Delete Account</button>
        <button>Logout</button>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </>
  );
};

export default ProfilePage;
