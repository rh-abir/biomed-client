import React from 'react';
import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import { MdLibraryBooks } from 'react-icons/md';
import { GiConfirmed } from 'react-icons/gi';
import PostForm from './PostForm/PostForm';

const PostBlog = () => {
    return (
        <div className="min-h-screen dark:bg-gray-700 dark:text-white p-6">
            <DashboardTitle title={"Post a new blog"} slogan={"Ready to jump back in?"} />
            <div className="dark:bg-gray-800  bg-white min-h-screen">
                <div className="p-10">
                    <h2 className="text-lg font-semibold dark:text-white text-gray-600 mb-10">
                        Post blog
                    </h2>
                    <div>
                        <div className="dark:bg-gray-800 dark:text-white grid gap-5 lg:flex items-center lg:gap-20">
                            <div className="text-2xl flex items-center gap-5">
                                <div className="dark:bg-gray-800 dark:text-white bg-[#c6fcb5] text-primary p-5 rounded-full">
                                    <MdLibraryBooks className="text-5xl" />
                                </div>
                                <h2>Blog Details</h2>
                            </div>
                            <div className="text-2xl flex items-center gap-5">
                                <div className="dark:bg-gray-800 dark:text-white bg-[#c6fcb5] text-primary p-5 rounded-full">
                                    <GiConfirmed className="text-5xl" />
                                </div>
                                <h2>Confirmation</h2>
                            </div>
                        </div>
                    </div>
                    <PostForm/>
                </div>
            </div>
        </div>
    );
};

export default PostBlog;