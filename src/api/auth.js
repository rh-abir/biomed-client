// save user with role in database
export const saveUser = (user, updateData) => {
  return new Promise((resolve, reject) => {
    const currentUser = {
      email: user?.email,
      name: user?.displayName,
      image: user?.photoURL,
      updateData,
    };

    fetch(`https://biomed-server.vercel.app/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

export const saveClient = (user, updateData) => {
  return new Promise((resolve, reject) => {
    const currentUser = {
      email: user?.email,
      name: user?.displayName,
      image: user?.photoURL,
      updateData,
    };


    fetch(`https://biomed-server.vercel.app/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

// become a client
export const becomeClient = async (email) => {
  const currentUser = {
    client: true,
  };

  const res = await fetch(`https://biomed-server.vercel.app/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  });
  return await res.json();
};

// become a instructor
export const becomeModerator = async (email) => {
  const updateRole = {
    moderator: true,
  };

  const res = await fetch(`https://biomed-server.vercel.app/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updateRole),
  });
  return await res.json();
};

// get admin role
export const getAdminRole = async (email) => {
  const res = await fetch(`https://biomed-server.vercel.app/users/${email}`);
  const user = await res.json();
  return user?.admin;
};

// get moderator role
export const getModeratorRole = async (email) => {
  const res = await fetch(`https://biomed-server.vercel.app/users/${email}`);
  const user = await res.json();
  return user?.moderator;
};

// get client role
export const getClientRole = async (email) => {
  const res = await fetch(`https://biomed-server.vercel.app/users/${email}`);
  const user = await res.json();
  return user?.client;
};
