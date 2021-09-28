import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => (
  <div>
    <h1>User Profile Page</h1>
    <p>User Info Displayed Here</p>
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
);

export default ProfilePage;
