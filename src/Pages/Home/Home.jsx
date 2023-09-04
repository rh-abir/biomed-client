import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import FrequentlyAskQuestion from "./FrequentlyAskQuestion/FrequentlyAskQuestion";
import PreferenceJobs from "./PreferenceJobs/PreferenceJobs";
import RecentJob from "./RecentJob/RecentJob";
import TopCompany from "./TopCompany/TopCompany";
import TrendingTasks from "./TrendingTasks/TrendingTasks";
import Categorys from "./categorys/Categorys";

const Home = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white md:pt-5">
      <CategoryMenu />
      <Banner />
      <TrendingTasks />
      <Categorys />
      <RecentJob />
      <AboutUs />
      <TopCompany />
      <PreferenceJobs />
      <FrequentlyAskQuestion />
    </div>
  );
};

export default Home;
