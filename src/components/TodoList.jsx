import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTrash } from 'react-icons/fa';
import { format } from 'date-fns';

const TodoList = ({ todos, onToggleComplete, onDeleteTodo }) => {
  return (
    <div className="w-full max-w-3xl">
      {todos.map((todo) => (
        <motion.div
          key={todo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`flex items-center justify-between p-4 mb-3 rounded-lg shadow-sm ${
            todo.completed ? 'bg-gray-100' : 'bg-white'
          }`}
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onToggleComplete(todo.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'
              }`}
            >
              {todo.completed && <FaCheck className="text-white text-sm" />}
            </button>
            <div>
              <p className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {todo.text}
              </p>
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <span>From: {todo.from}</span>
                <span>•</span>
                <span>{format(new Date(todo.timestamp), 'MMM d, h:mm a')}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onDeleteTodo(todo.id)}
            className="text-red-500 hover:text-red-600 p-2"
          >
            <FaTrash />
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default TodoList;