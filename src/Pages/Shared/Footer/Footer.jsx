import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const { data: socialMedia, isLoading } = useQuery({
        queryFn: async () => {
            const res = await axios(`https://biomed-server.vercel.app/social-media`);
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
                        <Link to={`${socialMedia[0].facebook}`}>
                            <FaFacebookF />
                        </Link>
                        <Link to={`${socialMedia[0].twitter}`}>
                            <FaTwitter />
                        </Link>
                        <Link to={`${socialMedia[0].instagram}`}>
                            <FaInstagram />
                        </Link>
                        <Link to={`${socialMedia[0].linkedin}`}>
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
                <hr className="h-px mt-10 mb-6 border-0 bg-gray-600"></hr>
                <div className="flex flex-col md:flex-row justify-between mb-8">
                    {/*"Pages" section */}
                    <div>
                        <p className="font-semibold text-xl">Pages</p>
                        <div className="mt-3 md:mt-4">
                            <p>About Us</p>
                            <p>Become Seller</p>
                            <p><Link to={"/"}>Blogs</Link></p>
                            <Link to="/terms">Terms of Service</Link>
                        </div>
                    </div>

                    {/*"Categories" section */}
                    <div className="mt-3 md:mt-0">
                        <p className="font-semibold text-xl">Categories</p>
                        <div className="mt-3 md:mt-4">
                            <p>Design & Creative</p>
                            <p>Development & IT</p>
                            <p>Music & Audio</p>
                            <p>Programming & Tech</p>
                            <p>Digital Marketing</p>
                            <p>Finance & Accounting</p>
                            <p>Writing & Translation</p>
                            <p>Trending</p>
                            <p>Lifestyle</p>
                        </div>
                    </div>

                    {/*"Support" section */}
                    <div className="mt-3 md:mt-0">
                        <p className="font-semibold text-xl mb-3">Support</p>
                        <div>
                            <p>Help & Support</p>
                            <p>FAQ Freeio</p>
                            <Link to='contact'><p>Contact Us</p></Link>
                            <p>Services</p>
                            <Link to="/terms">Terms of Service</Link>
                        </div>
                    </div>

                    {/*"Subscribe" section */}
                    <div className="mt-4 md:mt-0 me-5">
                        <p className="font-semibold text-xl mb-3">Subscribe</p>
                        <div className="md:p-4 p-3 w-full border-2 md:rounded-xl rounded flex flex-col md:flex-row md:gap-5">
                            <input
                                className="md:flex-grow py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-0"
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
                <p className="text-center md:mt-4 mt-3">© Biomed {currentYear}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
