import React, { useContext } from "react";
import { AuthContext } from "../../../../../../Provider/AuthProvider";
import TaskCard from "../../../../../BrowsTasks/TaskCard/TaskCard";
import Container from "../../../../../../components/Shared/Container/Container";
import { Link } from "react-router-dom";

const SearchShow = () => {
  const { getSearchData } = useContext(AuthContext);
  return (
    <>
      {getSearchData.length === 0 && (
        <div className=" flex flex-col gap-2 items-center min-h-[calc(100vh-20px)] justify-center ">
          <h2 className="p-5 text-red-400 font-bold text-center  text-4xl">
            No Task Found Yet
          </h2>
          <Link to={"/"} className="bg-primary px-5 py-2 text-xl rounded-md hover:bg-hover text-gray-50">Back Home</Link>
        </div>
      )}
      <Container>
        <div className="pt-32 pb-12 min-h-screen grid md:grid-cols-2 2xl:grid-cols-3">
          <div>
            {getSearchData?.map((jobsdata) => (
              <TaskCard key={jobsdata._id} task={jobsdata} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default SearchShow;
