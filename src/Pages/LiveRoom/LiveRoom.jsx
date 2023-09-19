import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const LiveRoom = () => {
  const [value, setValue] = useState();

  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <>
      <div className="grid grid-cols-2 min-h-screen">
        <div>
          <img
            className="h-full object-cover"
            src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="pt-32 flex items-center justify-center px-5">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Enter Room Code"
            className="border px-3 py-4 outline-none"
          />
          <button
            className="bg-primary px-5 py-4 text-gray-50"
            onClick={handleJoinRoom}
          >
            Join
          </button>
        </div>
      </div>
    </>
  );
};

export default LiveRoom;
