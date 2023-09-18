import { ArrowDropDown, FolderOpen, Storage } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const MainBody = () => {
  return (
    <div className="main_body">
      <div className="flex items-center justify-between py-10">
        <div className="top-left">Recent Form</div>
        <div className="top-right flex items-center gap-32">
          <div>
            Owned by anyone <ArrowDropDown />
          </div>
          <div>
            <IconButton>
              <Storage style={{ fontSize: "16px", color: "black" }} />
            </IconButton>
            <IconButton>
              <FolderOpen style={{ fontSize: "16px", color: "black" }} />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="bottom">
        
      </div>
    </div>
  );
};

export default MainBody;
