import { createBrowserRouter } from "react-router-dom";
import CommunityHome from "../Community/CommunityHome/CommunityHome";
import CommunityProfileHome from "../Community/CommunityProfileHome/CommunityProfileHome";
import AllClients from "../Dashboard/DashboardAdmin/AllClients/AllClients";
import AllModerator from "../Dashboard/DashboardAdmin/AllModerator/AllModerator";
import AllUsers from "../Dashboard/DashboardAdmin/AllUsers/AllUsers";
import PostBlog from "../Dashboard/DashboardAdmin/PostBlog/PostBlog";
import SocialMedia from "../Dashboard/DashboardAdmin/SocialMedia/SocialMedia";
import AppliedTasks from "../Dashboard/DashboardCandidate/AppliedTasks/AppliedTasks";
import CandidateHome from "../Dashboard/DashboardCandidate/CandidateHome/CandidateHome";
import EditProfile from "../Dashboard/DashboardCandidate/MyProfile/EditProfile/EditProfile";
import MyProfile from "../Dashboard/DashboardCandidate/MyProfile/MyProfile";
import ShortlistedTasks from "../Dashboard/DashboardCandidate/ShortlistedTasks/ShortlistedTasks";
import AllApplications from "../Dashboard/DashboardClient/AllApplications/AllApplications";
import ClientHome from "../Dashboard/DashboardClient/ClientHome/ClientHome";
import ClientMessage from "../Dashboard/DashboardClient/ClientMessage/ClientMessage";
import InstructorProfile from "../Dashboard/DashboardClient/InstructorProfile/InstructorProfile";
import InstructorView from "../Dashboard/DashboardClient/InstructorProfile/InstructorView/InstructorView";
import ManageTask from "../Dashboard/DashboardClient/ManageTask/ManageTask";
import PostTask from "../Dashboard/DashboardClient/PostTask/PostTask";
import Community from "../Layout/Community";
import CommunityProfile from "../Layout/CommunityProfile";
import Dashboard from "../Layout/Dashboard";
import Root from "../Layout/Root";
import BlogDetails from "../Pages/Blogs/BlogDetails/BlogDetails";
import Blogs from "../Pages/Blogs/Blogs";
import BrowseTasks from "../Pages/BrowsTasks/BrowseTasks";
import BrowseTasksDetails from "../Pages/BrowsTasks/BrowseTasksDetails/BrowseTasksDetails";
import BrowseTasksHome from "../Pages/BrowsTasks/BrowseTasksHome";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import RegisterClient from "../Pages/LoginClient/RegisterClient/RegisterClient";
import Terms from "../components/Terms/Terms";
import PrivateRoute from "./PrivateRoute";
import TaskOverview from "../Dashboard/DashboardCandidate/TaskOverview/TaskOverview";
import TaskDetails from "../Dashboard/DashboardCandidate/TaskDetails/TaskDetails";
import TaskSubmission from "../Dashboard/DashboardCandidate/TaskSubmission/TaskSubmission";
import TaskHistory from "../Dashboard/DashboardCandidate/TaskHistory/TaskHistory";
import LeaderBoard from "../Dashboard/DashboardCandidate/LeaderBoard/LeaderBoard";

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
        path: "/browseTasks",
        element: <BrowseTasks />,
        children: [
          {
            path: "/browseTasks/browseTasks-home",
            element: <BrowseTasksHome />,
          },
        ],
      },
      {
        path: "/tasksDatail/:id",
        element: <BrowseTasksDetails />,
        loader: ({ params }) =>
          fetch(`https://biomed-server.vercel.app/singlejob/${params.id}`),
      },
      {
        path: "/terms",
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
        path: "/dashboard/task-overview",
        element: <TaskOverview />,
      },
      {
        path: "/dashboard/task-details",
        element: <TaskDetails />,
      },
      {
        path: "/dashboard/task-submission",
        element: <TaskSubmission />,
      },
      {
        path: "/dashboard/task-history",
        element: <TaskHistory />,
      },
      {
        path: "/dashboard/leaderboard",
        element: <LeaderBoard/>,
      },
      {
        path: "/dashboard/applied-tasks",
        element: <AppliedTasks></AppliedTasks>,
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
        path: "/dashboard/shortlisted-tasks",
        element: <ShortlistedTasks />,
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
      {
        path: "/dashboard/social-media",
        element: <SocialMedia />,
      },
      {
        path: "/dashboard/post-blog",
        element: <PostBlog />,
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
        element: <CommunityProfileHome />,
      },
    ],
  },
]);

export default router;
