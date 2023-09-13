import { createBrowserRouter } from "react-router-dom";
import CommunityHome from "../Community/CommunityHome/CommunityHome";
import PostDetails from "../Community/Shared/CommunityFeed/Posts/PostDetails/PostDetails";
import AddTeamMember from "../Dashboard/DashboardAdmin/AddTeamMember/AddTeamMember";
import AdminAboutUs from "../Dashboard/DashboardAdmin/AdminAboutUs/AdminAboutUs";
import AdminHome from "../Dashboard/DashboardAdmin/AdminHome/AdminHome";
import AdminProfile from "../Dashboard/DashboardAdmin/AdminProfile/AdminProfile";
import AdminProfileEdit from "../Dashboard/DashboardAdmin/AdminProfile/AdminProfileEdit/AdminProfileEdit";
import AllClients from "../Dashboard/DashboardAdmin/AllClients/AllClients";
import AllUsers from "../Dashboard/DashboardAdmin/AllUsers/AllUsers";
import PostBlog from "../Dashboard/DashboardAdmin/PostBlog/PostBlog";
import SocialMedia from "../Dashboard/DashboardAdmin/SocialMedia/SocialMedia";
import AppliedTasks from "../Dashboard/DashboardCandidate/AppliedTasks/AppliedTasks";
import CandidateHome from "../Dashboard/DashboardCandidate/CandidateHome/CandidateHome";
import Feedback from "../Dashboard/DashboardCandidate/Feedback/Feedback";
import EditProfile from "../Dashboard/DashboardCandidate/MyProfile/EditProfile/EditProfile";
import MyProfile from "../Dashboard/DashboardCandidate/MyProfile/MyProfile";
import ShortlistedTasks from "../Dashboard/DashboardCandidate/ShortlistedTasks/ShortlistedTasks";
import TaskDetails from "../Dashboard/DashboardCandidate/TaskDetails/TaskDetails";
import TaskHistory from "../Dashboard/DashboardCandidate/TaskHistory/TaskHistory";
import TaskOverview from "../Dashboard/DashboardCandidate/TaskOverview/TaskOverview";
import TaskSubmission from "../Dashboard/DashboardCandidate/TaskSubmission/TaskSubmission";
import AllApplications from "../Dashboard/DashboardClient/AllApplications/AllApplications";
import ClientHome from "../Dashboard/DashboardClient/ClientHome/ClientHome";
import ClientMessage from "../Dashboard/DashboardClient/ClientMessage/ClientMessage";
import EvaluateApplicants from "../Dashboard/DashboardClient/EvaluateApplicants/EvaluateApplicants";
import InstructorProfile from "../Dashboard/DashboardClient/InstructorProfile/InstructorProfile";
import InstructorView from "../Dashboard/DashboardClient/InstructorProfile/InstructorView/InstructorView";
import ManageTask from "../Dashboard/DashboardClient/ManageTask/ManageTask";
import PostTask from "../Dashboard/DashboardClient/PostTask/PostTask";
import TaskApplied from "../Dashboard/DashboardClient/TaskApplied/TaskApplied";
import Community from "../Layout/Community";
import Dashboard from "../Layout/Dashboard";
import Root from "../Layout/Root";
import BlogDetails from "../Pages/Blogs/BlogDetails/BlogDetails";
import Blogs from "../Pages/Blogs/Blogs";
import BlogsHome from "../Pages/Blogs/BlogsHome/BlogsHome";
import BrowseTasks from "../Pages/BrowsTasks/BrowseTasks";
import BrowseTasksDetails from "../Pages/BrowsTasks/BrowseTasksDetails/BrowseTasksDetails";
import BrowseTasksHome from "../Pages/BrowsTasks/BrowseTasksHome";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutDetails from "../Pages/Home/AboutUs/AboutDetails/AboutDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import RegisterClient from "../Pages/LoginClient/RegisterClient/RegisterClient";
import SpecificCategory from "../Pages/SpecificCategory/SpecificCategory";
import Terms from "../components/Terms/Terms";
import PrivateRoute from "./PrivateRoute";

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
        children: [
          {
            path: "/blogs",
            element: <BlogsHome />,
          },
          {
            path: "/blogs/blogDetails/:id",
            element: <BlogDetails />,
            loader: ({ params }) =>
              fetch(`https://biomed-server.vercel.app/blogs/${params.id}`),
          },
        ],
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
        element: (
          <PrivateRoute>
            <BrowseTasksDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://biomed-server.vercel.app/job/${params.id}`),
      },
      {
        path: "/specificCategory/:title",
        element: <SpecificCategory />,
        loader: ({ params }) =>
          fetch(`/categorysData/categorys.json/${params.title}`),
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
      {
        path: "/about-details",
        element: <AboutDetails />,
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
        path: "/dashboard/admin-home",
        element: <AdminHome />,
      },
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
      // {
      //   path: "/jobsDatail/:id",
      //   element: <BrowseTasksDetails />,
      //   loader: ({ params }) =>
      //     fetch(`https://biomed-server.vercel.app/applyTaskInstructor/${params.id}`),
      // },
      {
        path: "/dashboard/task-details",
        element: <TaskDetails />,
      },
      {
        path: "/dashboard/feedback",
        element: <Feedback />,
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
        path: "/dashboard/applied-tasks",
        element: <AppliedTasks></AppliedTasks>,
      },
      // dashboard client
      {
        path: "/dashboard/post-task",
        element: <PostTask />,
      },
      {
        path: "/dashboard/tasksApplied/:id",
        element: <TaskApplied />,
        loader: ({ params }) =>
          fetch(
            `https://biomed-server.vercel.app/applyTaskInstructor/${params.id}`
          ),
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
      {
        path: "/dashboard/evaluate-applicants",
        element: <EvaluateApplicants />,
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
        path: "/dashboard/social-media",
        element: <SocialMedia />,
      },
      {
        path: "/dashboard/post-blog",
        element: <PostBlog />,
      },
      {
        path: "/dashboard/admin-profile",
        element: <AdminProfile />,
      },
      {
        path: "/dashboard/admin-profile-edit",
        element: <AdminProfileEdit />,
      },
      {
        path: "/dashboard/about-us",
        element: <AdminAboutUs />,
      },
      {
        path: "/dashboard/team-member",
        element: <AddTeamMember />,
      },
    ],
  },
  // Community Routes
  {
    path: "/community",
    element: <Community />,
    children: [
      {
        path: "/community",
        element: <CommunityHome />,
      },
      {
        path: "/community/postDetails/:id",
        element: <PostDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/posts/${params.id}`),
      },
    ],
  },
]);

export default router;
