import axios from "axios";
import React, { useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiDotsHorizontal } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
// import { BsTrashFill } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PostDropdown = ({ postId, refetchFunction }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const openDropdown = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  //   delete handler
  const handleDeletePost = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/posts/${postId}`).then((res) => {
          if (res.data.deletedCount >= 0) {
            Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
            navigate('/community');
          }
          refetchFunction();
        });
      }
    });
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
        className="flex items-center cursor-pointer"
      >
        <BiDotsHorizontal className="text-2xl" />
      </div>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className="absolute top-full right-0 mt-2 dark:bg-gray-800 bg-white border border-gray-300 shadow-md rounded-md"
        >
          <ul className="flex flex-col">
            <Link className="px-5 py-2 w-full dark:hover:bg-slate-600 hover:bg-green-600 hover:text-white duration-500 cursor-pointer flex items-center gap-2">
              <AiFillEdit />
              Edit
            </Link>
              <li onClick={handleDeletePost} className="px-5 py-2 w-full dark:hover:bg-slate-600 hover:bg-red-600 hover:text-white duration-500 cursor-pointer flex items-center gap-2">
                <FaTrashAlt /> Remove
              </li>
            
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostDropdown;
