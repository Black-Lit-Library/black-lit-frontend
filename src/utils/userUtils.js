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
