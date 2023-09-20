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
import { getAdminRole, getClientRole, getUserRole } from "../api/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [getId, setGetid] = useState("");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [clientRole, setClientRole] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [adminRole, setAdminRole] = useState(null);
  const [dashboardToggle, setDashboardToggle] = useState(false);
  const [tasksSidebarToggle, setTasksSidebarToggle] = useState(false);
  const [communitySidebarToggle, setCommunitySidebarToggle] = useState(false);
  const [searchPosts, setSearchPosts] = useState("");
  const [getPosts, setGetPosts] = useState([]);
  const [searchBlogs, setSearchBlogs] = useState("");
  const [getBlogsData, setGetBlogsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tab, setTab] = useState("");

  // home page search
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");
  const [getSearchData, setGetSearchData] = useState([]);

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios
          .post(`${import.meta.env.VITE_BASE_URL}/jwt`, {
            email: currentUser?.email,
          })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
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

  // user role
  useEffect(() => {
    if (user) {
      getUserRole(user?.email).then((data) => setUserRole(data));
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


  // Search Functionality of Community Posts
  useEffect(() => {
    if (searchPosts) {
      fetch(`https://biomed-server.vercel.app/postSearch/${searchPosts}`)
        .then((res) => res.json())
        .then((data) => {
          setGetPosts(data);
          console.log("search data", data);
        });
    }
  }, [searchPosts]);

  // Category Functionality of Community Posts
  useEffect(() => {
    fetch(`https://biomed-server.vercel.app/categories/${tab}`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, [tab]);

  // Search Functionality of Blogs
  useEffect(() => {
    if (searchBlogs) {
      fetch(`https://biomed-server.vercel.app/blogSearch/${searchBlogs}`)
        .then((res) => res.json())
        .then((data) => {
          setGetBlogsData(data);
          console.log("search data", data);
        });
    }
  }, [searchBlogs]);

  // Search banner page
  // Search Functionality of Blogs
  useEffect(() => {
    if (search) {
      fetch(
        `https://biomed-server.vercel.app/jobSearchByTitle/${search}/${industry}`
      )
        .then((res) => res.json())
        .then((data) => {
          setGetSearchData(data);
        });
    }
  }, [search, industry]);

  const authInfo = {
    getId,
    setGetid,
    user,
    loading,
    userRole,
    adminRole,
    setAdminRole,
    clientRole,
    setClientRole,
    dashboardToggle,
    tasksSidebarToggle,
    communitySidebarToggle,
    setLoading,
    createUser,
    loginUser,
    updateUser,
    logoutUser,
    resetPassword,
    googleLoginUser,
    setDashboardToggle,
    setTasksSidebarToggle,
    setCommunitySidebarToggle,
    // my profile data sharing
    myProfileData,
    // posts searching
    searchPosts,
    setSearchPosts,
    getPosts,
    // manage jobs single job
    manageJobs,
    // blogs search
    searchBlogs,
    setSearchBlogs,
    getBlogsData,
    // post category
    tab,
    setTab,
    categories,

    // banner search
    search,
    setSearch,
    industry,
    setIndustry,
    getSearchData,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
