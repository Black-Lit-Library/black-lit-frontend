export const createUser = async (user) => {
  const res = await fetch('http://localhost:7890/api/v1/users/', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return res.json();
};

export const getUser = async (username) => {
  const res = await fetch(`http://localhost:7890/api/v1/users/${username}`, {
    method: 'GET',
  });
  console.log(res, 'this is the res');
  return res.json();
};

export const updateUser = async (username) => {
  const res = await fetch(`http://localhost:7890/api/v1/users/${username}`, {
    method: 'PATCH'
  });
  console.log(res, 'this is the res');
  return res.json();
};

export const deleteUser = async (username) => {
  const res = await fetch(`http://localhost:7890/api/v1/users/${username}`, {
    method: 'DELETE'
  });
  console.log(res, 'this is the res');
  return res.json();
};

export const getAllUsers = async () => {
  const res = await fetch('http://localhost:7890/api/v1/users/', {
    method: 'GET'
  });
  return res.json();
};
