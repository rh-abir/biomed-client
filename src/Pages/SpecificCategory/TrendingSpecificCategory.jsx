import React from 'react';
import { Link } from 'react-router-dom';

const TrendingSpecificCategory = ({ task }) => {
    return (
        <div className="flex gap-3">
            <img
                className="w-16 h-16 object-cover rounded-full"
                src={task.image}
                alt="latest-blog-thumbnail"
            />

            <div>
                <Link
                    className="text-lg transition duration-200 leading-3  hover:text-primary font-semibold "
                >
                    {task.title}
                </Link>
                <div className="flex gap-2 mt-1">
                    <div>
                        <img
                            className="w-5 h-5 rounded-full"
                            src={task.profileImage}
                            alt="writer image"
                        />
                    </div>
                    <div className="text-xs">
                        <h2>{task.profileName}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingSpecificCategory;