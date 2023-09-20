import React from 'react';
import { SlLocationPin } from 'react-icons/sl';
import { IoCashOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEye } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';

const AllApplicationsCard = ({shortlistedResume}) => {
    const {profile_url,location,salary,full_name} = shortlistedResume;
    return (
        <div style={{border:'1px solid #ecedf2'}} className='lg:p-7 md:p-4 p-3 rounded-lg lg:flex gap-6 w-full'>
        <img className='lg:w-24 lg:h-20 md:w-20 md:h-20 w-20 h-20 mt-3 md:mt-0 object-cover overflow-hidden rounded-full' src={profile_url || <Skeleton />}/>
        <div className='mt-4 lg:mt-0 md:mt-2'>
            <p className='font-semibold mb-2'>{full_name}</p>
            <div className='lg:flex'>
                <div className='flex gap-2 text-sm flex-wrap'>
               
                    <p className='flex items-center gap-1 text-gray-600'><SlLocationPin size={17} /> {location || <Skeleton />}</p>
                        <p className='flex items-center gap-2 text-gray-600'><IoCashOutline size={18} /> ${salary || <Skeleton  count={10}/>} / hour</p>
                </div>
                <div className='flex gap-4 lg:ms-16 md:my-3 my-3'>
                    <button className='dark:bg-slate-700 dark:text-white bg-[#F0F5F7] hover:bg-[#1967D2] hover:text-white w-8 h-8 rounded-lg text-[#1967d2] flex justify-center items-center'><AiOutlineEye size={18}/></button>

                    <button className='dark:bg-slate-700 dark:text-white bg-[#F0F5F7] hover:bg-[#1967D2] hover:text-white w-8 h-8 rounded-lg text-[#1967d2] flex justify-center items-center'><RiDeleteBin6Line size={18}/></button>
                </div>
            </div>
          
        </div>
    </div>
    );
};

export default AllApplicationsCard;