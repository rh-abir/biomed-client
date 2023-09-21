import axios from "axios";

// save user with role in database
export const saveUser = (user, updateData) => {
  return new Promise((resolve, reject) => {
    const currentUser = {
      email: user?.email,
      name: user?.displayName,
      image: user?.photoURL,
      userRole: true,
      updateData,
    };

    // todo change url 
    fetch(`http://localhost:5000/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};



export const getFriends = async(email) => {
  try{
      const res = await axios.get(`http://localhost:5000/get-friends/${email}`)
      // return res.data
      // console.log(res)
      return res?.data
  }catch(err) {
      console.log(err)
  }
};


export const saveClient = (user, updateData) => {
  return new Promise((resolve, reject) => {
    const currentUser = {
      email: user?.email,
      name: user?.displayName,
      image: user?.photoURL,
      updateData,
    };

    fetch(`${import.meta.env.VITE_BASE_URL}/users/${user?.email}`, {
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

  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  });
  return await res.json();
};

// become a instructor
export const becomeAdmin = async (email) => {
  const updateRole = {
    admin: true,
  };

  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${email}`, {
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
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${email}`);
  const user = await res.json();
  return user?.admin;
};

// get admin role
export const getUserRole = async (email) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${email}`);
  const userRoleGet = await res.json();
  return userRoleGet?.userRole;
};

// get client role
export const getClientRole = async (email) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${email}`);
  const user = await res.json();
  return user?.client;
};
