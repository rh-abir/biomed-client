import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { getAdminRole, getClientRole } from "../api/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clientRole, setClientRole] = useState(null);
  const [adminRole, setAdminRole] = useState(null);
  const [dashboardToggle, setDashboardToggle] = useState(false);
  const [tasksSidebarToggle, setTasksSidebarToggle] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, url) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleLoginUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     if(currentUser){
  //       axios.post('https://biomed-server.vercel.app/jwt', {email: currentUser.email})
  //       .then(data =>{
  //           localStorage.setItem('access-token', data.data.token)
  //           setLoading(false);
  //       })
  //   }
  //     else{
  //       localStorage.removeItem('access-token')
  //   }
  //   });
  //   return () => {
  //     return unsubscribe();
  //   };
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // Admin role
  useEffect(() => {
    if (user) {
      getAdminRole(user?.email).then((data) => setAdminRole(data));
    }
  }, [user]);

  // client role
  useEffect(() => {
    if (user) {
      getClientRole(user?.email).then((data) => setClientRole(data));
    }
  }, [user]);

  // Share my profile data
  const { data: myProfileData = [] } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axios(
        `https://biomed-server.vercel.app/users/${user?.email}`
      );
      return res.data;
    },
  });

  // get single job using email
  const { data: manageJobs = [] } = useQuery({
    queryKey: ["manageJobs"],
    queryFn: async () => {
      const res = await axios.get(
        `https://biomed-server.vercel.app/jobs/${user?.email}`
      );
      return res.data;
    },
  });

  const authInfo = {
    user,
    loading,
    adminRole,
    setAdminRole,
    clientRole,
    setClientRole,
    dashboardToggle,
    tasksSidebarToggle,
    setLoading,
    createUser,
    loginUser,
    updateUser,
    logoutUser,
    resetPassword,
    googleLoginUser,
    setDashboardToggle,
    setTasksSidebarToggle,
    // my profile data sharing
    myProfileData,

    // manage jobs single job
    manageJobs,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
