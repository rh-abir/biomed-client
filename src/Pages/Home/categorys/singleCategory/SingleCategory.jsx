import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({ items }) => {
    const { icon, sub_title, title } = items;
    return (
        <div className='border px-9 py-10 hover:border-slate-600 dark:border-gray-700 dark:hover:border-slate-600 rounded-md transition'>
            <Link to={`/specificCategory/${title}`}>
                <div className='mb-6'>
                    <img className='w-[50px] h-[50px]' src={icon} alt="" />
                </div>
                <div className='space-y-2'>
                    <h2 className='lg:text-xl sm:font-semibold lg:font-normal'>{title}</h2>
                    <p className='text-slate-500'>{sub_title}</p>
                </div>
            </Link>
        </div>
    );
};

export default SingleCategory;