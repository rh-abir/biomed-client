import React, { useEffect, useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import faqimg from "../../../assets/faq.svg";
import Container from "../../../components/Shared/Container/Container";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";

const FrequentlyAskQuestion = () => {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    fetch("/faqs.json")
      .then((res) => res.json())
      .then((data) => setFaq(data));
  }, []);


  return (
    <>
      <Container>
        <div className="dark:bg-gray-800 bg-white mb-10 px-6 py-1">
          <div>
            <SectionTitle heading="Frequently Asked Questions (FAQ)"></SectionTitle>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="grid divide-y divide-neutral-200 max-w-2xl mt-4">
              {faq.map((n, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                  data-aos-offset="200"
                  className="py-5"
                  key={index}
                >
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium text-xl cursor-pointer list-none">
                      <span>
                        <strong className="text-3xl">Q.</strong>
                        {n.headline}
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
                      {n.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
            <div className="ps-2">
              <img className="w-[600px]" src={faqimg} alt="" />
            </div>
          </div>
        </div>
      </Container>
      <div className="flex justify-end">
        <button
          onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
          className="m-3 text-center text-2xl text-primary p-2 rounded-full dark:bg-gray-200 bg-gray-800"
        >
          <FaRegArrowAltCircleUp></FaRegArrowAltCircleUp>
        </button>
      </div>
    </>
  );
};

export default FrequentlyAskQuestion;
