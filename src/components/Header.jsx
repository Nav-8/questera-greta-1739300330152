import React from 'react';
import { FaSlack } from 'react-icons/fa';

const Header = ({ totalTasks, completedTasks }) => {
  return (
    <div className="w-full bg-white shadow-sm mb-8 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaSlack className="text-3xl text-[#36C5F0]" />
            <h1 className="text-2xl font-bold text-gray-800">Slack Tasks</h1>
          </div>
          <div className="flex space-x-4">
            <div className="text-sm">
              <span className="text-gray-500">Total Tasks:</span>
              <span className="ml-2 font-semibold">{totalTasks}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-500">Completed:</span>
              <span className="ml-2 font-semibold">{completedTasks}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;