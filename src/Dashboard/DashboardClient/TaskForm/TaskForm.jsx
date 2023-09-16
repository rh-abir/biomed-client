import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/task_form/banner.svg";
import Container from "../../../components/Shared/Container/Container";

const TaskForm = () => {
  return (
    <div className="py-32">
      <Container>
        <div className="grid grid-cols-2 items-center">
          <img src={banner} alt="banner" />
          <div className="flex flex-col gap-10">
            <h1 className="text-4xl font-bold">
              Create, Share <span className="text-primary">forms</span> easily
            </h1>
            <p className="font-medium">
              Formale lets you create forms super simply. All you need to do is
              create a free account and you'll be all set. You can share the
              link of your form with others and see thier submissions. It's
              suitable for online MCQ exam and for job recruitments
            </p>
            <Link to="/create-form" className="bg-primary tex-gray-50 px-3 py-2 rounded-md hover:bg-hover self-start text-gray-100 text-lg uppercase">
              get started
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TaskForm;
