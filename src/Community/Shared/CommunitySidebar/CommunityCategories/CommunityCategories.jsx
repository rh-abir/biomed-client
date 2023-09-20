import React, { useContext } from "react";
import { Tab, TabList, Tabs } from "react-tabs";
import { AuthContext } from "../../../../Provider/AuthProvider";

const CommunityCategories = () => {
  const { setTab } = useContext(AuthContext);

  return (
    <p className="text-lg m-4">
      <Tabs>
        <TabList>
          <Tab
            className="text-gray-800 cursor-pointer hover:text-primary duration-300"
            selectedClassName="text-primary font-semibold"
            onClick={() => setTab()}
          >
            All Posts
          </Tab>
          <Tab
            className="text-gray-800 cursor-pointer hover:text-primary duration-300"
            selectedClassName="text-primary font-semibold"
            onClick={() => setTab("General Discussion")}
          >
            General Discussion
          </Tab>
          <Tab
            className="text-gray-800 cursor-pointer hover:text-primary duration-300"
            selectedClassName="text-primary font-semibold"
            onClick={() => setTab("Technology and Science")}
          >
            Technology and Science
          </Tab>
          <Tab
            className="text-gray-800 cursor-pointer hover:text-primary duration-300"
            selectedClassName="text-primary font-semibold"
            onClick={() => setTab("Nature and Beauty")}
          >
            Nature and Beauty
          </Tab>
          <Tab
            className="text-gray-800 cursor-pointer hover:text-primary duration-300"
            selectedClassName="text-primary font-semibold"
            onClick={() => setTab("Entertainment")}
          >
            Entertainment
          </Tab>
          <Tab
            className="text-gray-800 cursor-pointer hover:text-primary duration-300"
            selectedClassName="text-primary font-semibold"
            onClick={() => setTab("Lifestyle and Health")}
          >
            Lifestyle and Health
          </Tab>
          <Tab
            className="text-gray-800 cursor-pointer hover:text-primary duration-300"
            selectedClassName="text-primary font-semibold"
            onClick={() => setTab("News and Current Events")}
          >
            News and Current Events
          </Tab>
        </TabList>
      </Tabs>
    </p>
  );
};

export default CommunityCategories;
