// export const createUser = async (user = {}) => {
//   const res = await fetch('http://localhost:7890/api/v1/users/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   });
//   console.log(res);
//   return res.json();
// };

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
