import TaskCard from "./TaskCard/TaskCard";

const BrowseTasksHome = ({ browseJobsData }) => {
  return (
    <>
      {/* Task card */}
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {browseJobsData.map((jobsdata) => (
          <TaskCard key={jobsdata._id} task={jobsdata} />
        ))}
      </div>
    </>
  );
};

export default BrowseTasksHome;
