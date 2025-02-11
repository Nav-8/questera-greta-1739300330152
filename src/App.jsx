import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import TodoList from './components/TodoList';
import MockSlackInput from './components/MockSlackInput';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTask = (task) => {
    setTodos([task, ...todos]);
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedTasks = todos.filter((todo) => todo.completed).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header totalTasks={todos.length} completedTasks={completedTasks} />
      
      <main className="max-w-3xl mx-auto px-4 py-8">
        <MockSlackInput onNewTask={handleNewTask} />
        
        <AnimatePresence>
          {todos.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-500">No tasks yet. Start by sending a mock Slack message!</p>
            </motion.div>
          ) : (
            <TodoList
              todos={todos}
              onToggleComplete={handleToggleComplete}
              onDeleteTodo={handleDeleteTodo}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;