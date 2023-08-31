import { createBrowserRouter } from "react-router-dom";
import CommunityHome from "../Community/CommunityHome/CommunityHome";
import CommunityProfileHome from "../Community/CommunityProfileHome/CommunityProfileHome";
import AllClients from "../Dashboard/DashboardAdmin/AllClients/AllClients";
import AllModerator from "../Dashboard/DashboardAdmin/AllModerator/AllModerator";
import AllUsers from "../Dashboard/DashboardAdmin/AllUsers/AllUsers";
import AppliedJobs from "../Dashboard/DashboardCandidate/AppliedJobs/AppliedJobs";
import CandidateHome from "../Dashboard/DashboardCandidate/CandidateHome/CandidateHome";
import EditProfile from "../Dashboard/DashboardCandidate/MyProfile/EditProfile/EditProfile";
import MyProfile from "../Dashboard/DashboardCandidate/MyProfile/MyProfile";
import ShortlistedJobs from "../Dashboard/DashboardCandidate/ShortlistedJobs/ShortlistedJobs";
import UploadResume from "../Dashboard/DashboardCandidate/UploadResume/UploadResume";
import AllApplications from "../Dashboard/DashboardClient/AllApplications/AllApplications";
import ClientHome from "../Dashboard/DashboardClient/ClientHome/ClientHome";
import ClientMessage from "../Dashboard/DashboardClient/ClientMessage/ClientMessage";
import PostTask from "../Dashboard/DashboardClient/PostTask/PostTask";
import ShortlistedResumes from "../Dashboard/DashboardClient/ShortlistedResumes/ShortlistedResumes";
import Community from "../Layout/Community";
import CommunityProfile from "../Layout/CommunityProfile";
import Dashboard from "../Layout/Dashboard";
import Root from "../Layout/Root";
import BlogDetails from "../Pages/Blogs/BlogDetails/BlogDetails";
import Blogs from "../Pages/Blogs/Blogs";
import BrowseJobs from "../Pages/BrowseJobs/BrowseJobs";
import BrowseJobsDetails from "../Pages/BrowseJobs/BrowseJobsDetails/BrowseJobsDetails";
import BrowseJobsHome from "../Pages/BrowseJobs/BrowseJobsHome";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import RegisterClient from "../Pages/LoginClient/RegisterClient/RegisterClient";
import Terms from "../components/Terms/Terms";
import PrivateRoute from "./PrivateRoute";
import InstructorProfile from "../Dashboard/DashboardClient/InstructorProfile/InstructorProfile";
import InstructorView from "../Dashboard/DashboardClient/InstructorProfile/InstructorView/InstructorView";
import ManageTask from "../Dashboard/DashboardClient/ManageTask/ManageTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`https://biomed-server.vercel.app/blogs/${params.id}`),
      },

      {
        path: "/browseJobs",
        element: <BrowseJobs />,
        children: [
          {
            path: "/browseJobs/browseJobs-home",
            element: <BrowseJobsHome />,
          },
        ],
      },
      {
        path: "/jobsDatail/:id",
        element: <BrowseJobsDetails />,
        loader: ({ params }) =>
          fetch(`https://biomed-server.vercel.app/singlejob/${params.id}`),
      },
      {
        path: "/",
        element: <Terms></Terms>,
      },
      {
        path: "/registerclient",
        element: <RegisterClient />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/client-home",
        element: <ClientHome />,
      },
      {
        path: "/dashboard/candidate-home",
        element: <CandidateHome />,
      },
      {
        path: "/dashboard/my-profile",
        element: <MyProfile />,
      },
      {
        path: "/dashboard/applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/dashboard/upload-resume",
        element: <UploadResume />,
      },
      {
        path: "/dashboard/post-task",
        element: <PostTask />,
      },
      {
        path: "/dashboard/instructor-profile",
        element: <InstructorProfile />,
      },
      {
        path: "/dashboard/instructor-view",
        element: <InstructorView />,
      },
      {
        path: "/dashboard/shortlisted-jobs",
        element: <ShortlistedJobs />,
      },
      {
        path: "/dashboard/manage-task",
        element: <ManageTask />,
      },
      {
        path: "/dashboard/all-applications",
        element: <AllApplications />,
      },
      {
        path: "/dashboard/shortlisted-resumes",
        element: <ShortlistedResumes />,
      },
      {
        path: "/dashboard/editProfile",
        element: <EditProfile />,
      },
      {
        path: "/dashboard/client-message",
        element: <ClientMessage />,
      },

      // dashboard admin
      {
        path: "/dashboard/all-users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/all-client",
        element: <AllClients />,
      },
      {
        path: "/dashboard/all-moderator",
        element: <AllModerator />,
      },
    ],
  },
  // Community Routes
  {
    path: "/community",
    element: (
      <PrivateRoute>
        <Community />
      </PrivateRoute>

    ),
    children: [
      {
        path: "/community",
        element: <CommunityHome />,
      },
    ],
  },
  {
    path: "/community/community-profile",
    element: <CommunityProfile />,
    children: [
      {
        path: "/community/community-profile",
        element: <CommunityProfileHome />
      },
    ],
  },
]);

export default router;
