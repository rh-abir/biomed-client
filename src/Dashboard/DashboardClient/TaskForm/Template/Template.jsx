import React from "react";
import { MoreVertOutlined, UnfoldMore } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Container from "../../../../components/Shared/Container/Container";
import { FaPlus } from "react-icons/fa";
import MainBody from "../MainBody/Mainbody";

const Template = () => {
  return (
    <>
    <div className="pt-32 pb-12 bg-[#f4f4f9]">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-md text-[#202124]">Start New Form </span>
          </div>
          <div className="flex items-center">
            <div>
              Template gallery
              <UnfoldMore />
            </div>
            <IconButton>
              <MoreVertOutlined />
            </IconButton>
          </div>
        </div>
        <div className="mt-20">
          <IconButton >
            <FaPlus className="text-5xl cursor-pointer  text-primary" />
          </IconButton>
        </div>
      </Container>
    </div>
    <Container>
        <MainBody />
    </Container>
    </>
  );
};

export default Template;
