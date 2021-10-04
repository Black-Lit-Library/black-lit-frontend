import React from 'react';
import PropTypes from 'prop-types';

const User = ({ firstName, lastName, email, userName, pin }) => (
  <div>
    <p>{firstName}</p>
    <p>{lastName}</p>
    <p>{email}</p>
    <p>{userName}</p>
    <p>{pin}</p>
  </div>
);

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  pin: PropTypes.string.isRequired
};

export default User;
