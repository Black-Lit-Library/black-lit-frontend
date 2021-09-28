import React from 'react';
import { Link } from 'react-router-dom';
// import useLocalStorage from 'react-localstorage-hook';
// import { updateUser } from '../utils/userUtils';



const ProfilePage = () => {

  // const [updatedUser, setUser] = useState();

  // async function handleUpdateProfile(event) {
  //   event.preventDefault();
  //   const updateProfile = await updateUser();
  //   setUser(updateProfile);
  // }
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
        <button>Delete Account</button>
        <button>Logout</button>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </>
  );
};

export default ProfilePage;
