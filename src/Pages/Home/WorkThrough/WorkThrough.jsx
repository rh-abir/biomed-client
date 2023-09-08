import React from 'react';
import Container from '../../../components/Shared/Container/Container';
import SectionTitle from '../../../components/Shared/SectionTitle/SectionTitle';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AiOutlineCheck, AiOutlineCheckCircle, AiOutlineDollarCircle, AiOutlineFileDone, AiOutlineQuestionCircle, AiOutlineStar, AiOutlineUser } from 'react-icons/ai';

const WorkThrough = () => {
    return (
        <Container>
            <SectionTitle
                heading="Platform Walkthrough"
                text="Discover the seamless journey of task evaluation from submission to success."
            />

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={
                        <span className="text-2xl font-bold text-blue-600">
                            Sign-Up
                        </span>
                    }
                    iconStyle={{ background: 'rgb(0, 128, 64)', color: '#fff' }}
                    icon={<AiOutlineUser />}
                >
                    <h3 className="text-xl font-bold">Creating Your Account</h3>
                    <h4 className="text-lg font-semibold">Registration Process</h4>
                    <p>
                        Here you will find a straightforward and user-friendly registration process designed to get you started on our platform quickly and efficiently.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={
                        <span className="text-2xl font-bold text-red-600">
                            Task-Submission
                        </span>
                    }
                    iconStyle={{ background: 'rgb(19, 172, 83)', color: '#fff' }}
                    icon={<AiOutlineCheckCircle />}
                >
                    <h3 className="text-xl font-bold">Uploading Tasks</h3>
                    <h4 className="text-lg font-semibold">Task Details</h4>
                    <p>
                        We make it easy for you to get your tasks on our platform. Uploading Tasks is a breeze, and you can provide Task Details to ensure precise evaluation and optimal results.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={
                        <span className="text-2xl font-bold text-orange-600">
                            Task-Evaluation
                        </span>
                    }
                    iconStyle={{ background: 'rgb(0, 168, 133)', color: '#fff' }}
                    icon={<AiOutlineCheck />}
                >
                    <h3 className="text-xl font-bold">Our Assessment Process</h3>
                    <h4 className="text-lg font-semibold">Quality Control</h4>
                    <p>
                        In the Evaluation step, our platform employs a rigorous Assessment Process and stringent Quality Control measures to deliver accurate and dependable task evaluations.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={
                        <span className="text-2xl font-bold text-indigo-600">
                            Feedback
                        </span>
                    }
                    iconStyle={{ background: 'rgb(0, 128, 128)', color: '#fff' }}
                    icon={<AiOutlineStar />}
                >
                    <h3 className="text-xl font-bold">Receiving Feedback</h3>
                    <h4 className="text-lg font-semibold">Improving Your Work</h4>
                    <p>
                        Receiving Feedback empowers you with valuable insights, while Improving Your Work helps you enhance your skills and deliver even better results.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date={
                        <span className="text-2xl font-bold text-purple-600">
                            Results
                        </span>
                    }
                    iconStyle={{ background: 'rgb(35, 155, 86)', color: '#fff' }}
                    icon={<AiOutlineFileDone />}
                >
                    <h3 className="text-xl font-bold">Accessing Your Evaluation Results</h3>
                    <h4 className="text-lg font-semibold">Performance Metrics</h4>
                    <p>
                        Effortlessly access your Evaluation Results and track Performance Metrics to measure and enhance your performance with ease.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date={
                        <span className="text-2xl font-bold text-teal-600">
                            Payment
                        </span>
                    }
                    iconStyle={{ background: 'rgb(36, 121, 137)', color: '#fff' }}
                    icon={<AiOutlineDollarCircle />}
                >
                    <h3 className="text-xl font-bold">Payment Options</h3>
                    <h4 className="text-lg font-semibold">Billing and Compensation</h4>
                    <p>
                        Discover versatile Payment Options tailored to your preferences. Our Billing and Compensation process ensures accurate and timely transactions, securing your financial interests seamlessly.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date={
                        <span className="text-2xl font-bold text-pink-600">
                            Support
                        </span>
                    }
                    iconStyle={{ background: 'rgb(70, 130, 180)', color: '#fff' }}
                    icon={<AiOutlineQuestionCircle />}
                >
                    <h3 className="text-xl font-bold">Customer Support</h3>
                    <h4 className="text-lg font-semibold">Assistance and Resources</h4>
                    <p>
                        Our dedicated Customer Support team is here to address your queries and concerns promptly. Explore a wealth of Assistance and Resources to empower your journey on our platform, making your experience as smooth as possible.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement

                />
            </VerticalTimeline>
        </Container>
    );
};

export default WorkThrough;
