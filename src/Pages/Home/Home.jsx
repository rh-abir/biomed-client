import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import FrequentlyAskQuestion from "./FrequentlyAskQuestion/FrequentlyAskQuestion";
import RecentJob from "./RecentJob/RecentJob";
import TopCompany from "./TopCompany/TopCompany";
import TrendingTasks from "./TrendingTasks/TrendingTasks";
import UserTestimonials from "./UserTestimonials/UserTestimonials";
import WorkThrough from "./WorkThrough/WorkThrough";
import Categorys from "./categorys/Categorys";

const Home = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white md:pt-5">
      <Banner />
      <TrendingTasks />
      <Categorys />
      <RecentJob />
      <AboutUs />
      <TopCompany />
      <UserTestimonials />
      <WorkThrough />
      <FrequentlyAskQuestion />
    </div>
  );
};

export default Home;
