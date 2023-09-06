import React from "react";
import faqimg from "../../../assets/faq.svg";
import Container from "../../../components/Shared/Container/Container";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";

const FrequentlyAskQuestion = () => {
  return (
    <Container>
      <div className="dark:bg-gray-800 bg-white mb-10">
        <div>
          <SectionTitle heading="FreQuently Asked Questions? (FAQ)"></SectionTitle>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="grid divide-y divide-neutral-200 max-w-2xl mt-4">
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium text-xl cursor-pointer list-none">
                  <span>
                    {" "}
                    <strong className="text-3xl">Q.</strong> What is purpose of
                    the Task Evaluation Platform?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="dark:text-neutral-400 text-neutral-700 mt-3 group-open:animate-fadeIn">
                  <strong className="text-2xl">A. </strong>
                  The Task Evaluation Platform is designed to streamline the
                  process of assessing and grading tasks, assignments, or
                  projects. It provides a centralized digital environment for
                  both educators and learners to submit tasks efficiently..
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium text-xl cursor-pointer list-none">
                  <span>
                    <strong className="text-3xl">Q.</strong> How do I submit a
                    task for evaluation on the platform?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="dark:text-neutral-400 text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {" "}
                  <strong className="text-2xl">A. </strong>
                  To submit a task for evaluation, log in to your account and
                  navigate to the task submission section. Upload the required
                  files or provide relevant details as instructed by your course
                  or assignment guidelines.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium text-xl cursor-pointer list-none">
                  <span>
                    {" "}
                    <strong className="text-3xl">Q.</strong> Can I track the
                    progress of my task evaluation?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="dark:text-neutral-400 text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {" "}
                  <strong className="text-2xl">A. </strong>
                  Yes, you can track the progress of your task evaluation
                  through the platform. After submission, you will receive
                  notifications and updates on the status of your task.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium text-xl cursor-pointer list-none">
                  <span>
                    {" "}
                    <strong className="text-3xl">Q.</strong> How are tasks
                    evaluated on the this platform?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="dark:text-neutral-400 text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {" "}
                  <strong className="text-2xl">A. </strong>
                  Tasks are evaluated based on predefined criteria set by the
                  instructor or evaluator. These criteria might include factors
                  such as accuracy, creativity, adherence to guidelines, and
                  quality of presentation.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium text-xl cursor-pointer list-none">
                  <span>
                    {" "}
                    <strong className="text-3xl">Q.</strong> What happens if I
                    disagree with my results?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="dark:text-neutral-400 text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {" "}
                  <strong className="text-2xl">A. </strong>
                  If you have concerns about your task evaluation results, you
                  can follow the platform guidelines to request a review or
                  re-evaluation. The platform administrators will review your
                  request and consider it accordingly.
                </p>
              </details>
            </div>
          </div>
          <div>
            <img className="w-[600px]" src={faqimg} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FrequentlyAskQuestion;
