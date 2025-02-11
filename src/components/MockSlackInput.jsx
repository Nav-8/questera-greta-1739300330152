import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const MockSlackInput = ({ onNewTask }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onNewTask({
        id: Date.now(),
        text: message,
        from: 'John Doe',
        timestamp: new Date().toISOString(),
        completed: false
      });
      setMessage('');
    }
  };

  return (
    <div className="w-full max-w-3xl mb-8">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Mock Slack Message</h2>
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a mock Slack message..."
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#36C5F0] text-white px-4 py-2 rounded-md flex items-center space-x-2"
            type="submit"
          >
            <FaPaperPlane />
            <span>Send</span>
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default MockSlackInput;