import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const { data: socialMedia = [], isLoading } = useQuery({
    queryKey: ["socialMedia"],
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/social-media`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="mx-auto ms-5">
        <div className="flex flex-col md:flex-row justify-between me-5">
          <div className="flex gap-8 mb-6 md:mb-0">
            <Link to="/terms">Terms of Service</Link>
            <p>Privacy Policy</p>
          </div>
          <div className="flex gap-5 items-center">
            <p>Follow Us</p>
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
            <Link to="/">
              <FaInstagram />
            </Link>
            <Link to="/">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
        <hr className="h-px mt-10 mb-6 border-0 bg-gray-600"></hr>
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/*"Pages" section */}
          <div>
            <p className="font-semibold text-xl">Reach Us</p>
            <div className="mt-3 md:mt-4">
              <div className="flex items-center">
                <AiOutlinePhone className="text-2xl" />
                <p className="ms-2">+8801993881454</p>
              </div>
              <div className="flex items-center py-1"><AiOutlineMail className="text-2xl" />
                <p className="ms-2">commandos701@gmail.com</p>
              </div>
              <div className="flex items-center"><AiOutlineEnvironment className="text-2xl" />
                <p className="ms-2">
                  45 Sadar Road, Barisal, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/*"Categories" section */}
          <div className="mt-3 md:mt-0">
            <p className="font-semibold text-xl">Company</p>
            <div className="mt-3 md:mt-4">
              <Link to='/blogs'><p>Blogs</p></Link>
              <p>About Us</p>
              <p>Privacy Policy</p>
              <p>Latest Updates</p>
            </div>
          </div>

          {/*"Support" section */}
          <div className="mt-3 md:mt-0">
            <p className="font-semibold text-xl mb-3">Support</p>
            <div>
              <p>FAQs</p>
              <Link to="/contact"><p>Contact Us</p></Link>
              <Link to="/terms">Terms of Service</Link>
              <p>Platform Walkthrough</p>
            </div>
          </div>

          {/*"Subscribe" section */}
          <div className="mt-4 md:mt-0 me-5">
            <p className="font-semibold text-xl mb-3">Subscribe</p>
            <div className="md:p-4 p-3 w-full border-2 md:rounded-xl rounded flex flex-col md:flex-row md:gap-5">
              <input
                className="bg-gray-900 md:flex-grow py-2 px-3 rounded focus:outline-none focus:ring-green-300 mb-2 md:mb-0"
                type="email"
                placeholder="Your email address"
              />
              <button className="text-white p-2 rounded-md bg-primary transition duration-300 w-full md:w-auto">
                Send
              </button>
            </div>
          </div>
        </div>
        <hr className="h-px mb-10 border-0 bg-gray-600"></hr>
        <p className="text-center md:mt-4 mt-3">
          © Biomed {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
