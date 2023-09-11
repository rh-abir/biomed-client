import React from 'react';
import { Link } from 'react-router-dom';

const LatestSpecificCategory = ({ latestData }) => {
    return (
        <div className="flex gap-3">
            <img
                className="w-16 h-16 object-cover rounded-full"
                src={latestData.image}
                alt="latest-blog-thumbnail"
            />

            <div>
                <Link
                    className="text-lg transition duration-200 leading-3  hover:text-primary font-semibold "
                >
                    {latestData.title}
                </Link>
                <div className="flex gap-2 mt-1">
                    <div>
                        <img
                            className="w-5 h-5 rounded-full"
                            src={latestData.profileImage}
                            alt="writer image"
                        />
                    </div>
                    <div className="text-xs">
                        <h2>{latestData.profileName}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestSpecificCategory;