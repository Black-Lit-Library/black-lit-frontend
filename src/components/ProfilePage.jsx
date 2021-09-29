import React, { useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
// import useLocalStorage from 'react-localstorage-hook';
// import { updateUser } from '../utils/userUtils';
import { deleteUser } from '../utils/userUtils';



const ProfilePage = () => {
  const { username } = useParams();
  const [user, setUser] = useState();
  const history = useHistory();
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
        <h1>{`${localStorage.userName}`}Profile Page</h1>
        <p>{`${localStorage.firstName}`}</p>
        <p>{`${localStorage.lastName}`}</p>
        <p>{`${localStorage.email}`}</p>
        <p>{`${localStorage.userName}`}</p>
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
