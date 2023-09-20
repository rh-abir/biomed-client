import React, { useState, useEffect } from 'react';
import { FaTrophy } from 'react-icons/fa';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the backend API here
    fetch(`${import.meta.env.VITE_BASE_URL}/allusers`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of user objects
        setUsers(data);
      })
      .catch((error) => {
        console.error('get leader board user error', error);
      });
  }, []);

  // Sort the users by score in descending order
  const sortedUsers = users.sort((a, b) => b.score - a.score);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      {sortedUsers.map((user, index) => (
        <div
          key={user.id}
          className="bg-white shadow-md p-4 rounded-lg mb-4 flex items-center justify-between"
        >
          <div className="flex items-center">
            <div className="mr-4">
              {index < 3 ? (
                <FaTrophy
                  className={`${
                    index === 0
                      ? 'text-yellow-500'
                      : index === 1
                      ? 'text-gray-500'
                      : 'text-orange-500'
                  } text-2xl`}
                />
              ) : (
                <span className="text-gray-400 text-2xl">{index + 1}</span>
              )}
            </div>
            <div>
              <img
                src={user.image} // Replace with the actual image URL or import method
                className="w-12 h-12 rounded-full"
                alt={user.name}
              />
            </div>
            <div className="ml-4">
              <p className="text-lg font-semibold">{user.name}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-600">Score: {user.score}</p>
            <p className="text-gray-600">Country: {user.country}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
