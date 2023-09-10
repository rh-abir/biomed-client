import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import { FaAlignJustify } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { becomeClient } from "../../../api/auth";
import logo from "../../../assets/logo.png";
import Dark from "../../../components/Dark/Dark";
import ClientModal from "../../../components/Modal/ClientModal/ClientModal";
import ProfileDropdown from "../../../components/ProfileDropdown/ProfileDropdown";
import Container from "../../../components/Shared/Container/Container";
import "./Header.css";
import MenuItem from "./MenuItem/MenuItem";

const Header = () => {
  const { user, clientRole, setClientRole } = useContext(AuthContext);
  const navigate = useNavigate();
  const [roleModal, setRoleModal] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [toggle, setToggle] = useState(false);

  const roleModalHandler = (email) => {
    becomeClient(email).then(() => {
      setClientRole(true);
      toast.success("You are client now, Post Tasks!");
      navigate("/dashboard/post-task");
      closeRoleModal();
    });
  };

  const closeRoleModal = () => {
    setRoleModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full bg-green-200 z-50 transition-all ease-in-out duration-200 ${
        scrolling ? "backdrop-blur-lg bg-opacity-80 shadow-md" : ""
      }`}
    >
      <div className="relative z-20 ">
        <Container>
          <nav className="flex items-center justify-between py-5">
            <div className="flex items-center gap-10 2xl:gap-16">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
              <div>
                <ul className="hidden  xl:flex items-center space-x-4 2xl:space-x-6">
                  <MenuItem name={"Home"} path={"/"} />
                  <MenuItem
                    name={"Browse Tasks"}
                    path={"/browseTasks/browseTasks-home"}
                  />
                  <MenuItem name={"Blog"} path={"/blogs"} />
                  <MenuItem name={"Community Forum"} path={"/community"} />
                </ul>
              </div>
            </div>
            <div className="hidden xl:flex items-center gap-10">
              {!clientRole && (
                <button
                  onClick={() => setRoleModal(true)}
                  disabled={!user}
                  className={`${
                    !user ? "cursor-not-allowed" : "cursor-pointer"
                  } text-gray-100 bg-primary px-5 py-2 rounded-3xl font-normal xl:font-medium hover:text-gray-200`}
                >
                  Create a Task
                </button>
              )}
              <div>
                {user ? (
                  <ProfileDropdown />
                ) : (
                  <ul className="flex items-center space-x-3">
                    <MenuItem name={"Login"} path={"/login"} />
                    <span>|</span>
                    <span className="cursor-pointer">
                      <Link to={"/register"} className="font-medium">
                        Sign Up
                      </Link>
                    </span>
                  </ul>
                )}
              </div>
              <Dark />
            </div>
            {/* toggle button */}
            <button className="xl:hidden" onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <AiOutlineClose className="text-2xl" />
              ) : (
                <FaAlignJustify className="text-2xl" />
              )}
            </button>
          </nav>
        </Container>

        {toggle && (
          <div
            className={`absolute flex flex-col items-center ${
              toggle && "animated-slideIn"
            } bg-[#80faa9] w-full py-5 animate-fadeIn`}
          >
            <div className="flex justify-center items-center gap-16 xl:hidden">
              <div className="mb-10">
                <ul className="flex flex-col text-2xl gap-3 items-center xl:hidden">
                  <MenuItem name={"Home"} path={"/"} />
                  <MenuItem
                    name={"Browse Tasks"}
                    path={"/browseTasks/browseTasks-home"}
                  />
                  <MenuItem name={"Top Tasks"} path={"/"} />
                  <MenuItem name={"Blog"} path={"/blogs"} />
                  <MenuItem name={"Community Forum"} path={"/community"} />
                </ul>
              </div>
            </div>
            <div className="mb-2 md:hidden">
              <Dark />
            </div>
            <div className="flex xl:hidden flex-col items-center gap-10">
              {!clientRole && (
                <button
                  onClick={() => setRoleModal(true)}
                  disabled={!user}
                  className={`${
                    !user ? "cursor-not-allowed" : "cursor-pointer"
                  } text-primary font-normal xl:font-medium hover:text-hover`}
                >
                  Post a Job
                </button>
              )}
              <div>
                {user ? (
                  <ProfileDropdown />
                ) : (
                  <ul className="flex items-center space-x-6">
                    <MenuItem name={"Login"} path={"/login"} />
                    <span className="bg-primary text-gray-100 px-8 py-3 rounded-md hover:bg-[#4ca068] transition cursor-pointer">
                      <Link to={"/register"} className="font-medium">
                        Sign Up
                      </Link>
                    </span>
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <ClientModal
        closeModal={closeRoleModal}
        email={user?.email}
        modalHandler={roleModalHandler}
        isOpen={roleModal}
      />
    </div>
  );
};

export default Header;
