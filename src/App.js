import React, { useState } from "react";
import "./CSS/design.css"; // Importing CSS for styling

import TaskForm from "./Components/TaskForm"; // Importing TaskForm component
import TaskList from "./Components/TaskList"; // Importing TaskList component

function App() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to track the index of the task currently being edited
  const [editingIndex, setEditingIndex] = useState(null);
  // State to control the visibility of the task form
  const [isFormVisible, setFormVisible] = useState(false);

  // Function to save a new task to the tasks array
  const saveTask = (task) => {
    setTasks([...tasks, task]); // Add the new task to the existing tasks
  };

  // Function to refresh the task list (reset to empty)
  const refreshPage = () => {
    setTasks([]); // Clear the tasks array
  };

  // Function to initiate editing of a task by setting the editing index
  const editTask = (index) => {
    handleNewTaskClick(); // Open the task form for editing
    setEditingIndex(index); // Set the index of the task to be edited
  };

  // Function to update an existing task in the tasks array
  const updateTask = (updatedTask) => {
    setTasks((prevTasks) => {
      return prevTasks.map(
        (task, index) => (index === editingIndex ? updatedTask : task) // Update the task at the editingIndex
      );
    });
    setEditingIndex(null); // Reset the editing index after update
  };

  const deleteTask = (index) => {
    const s = window.confirm("Don you want to delete?");
    if (s === true) {
      setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    } // No else needed, as no action is taken if user cancels
  };

  // Function to show the task form for creating a new task
  const handleNewTaskClick = () => {
    setEditingIndex(null); // Clear editing index when creating a new task
    setFormVisible(true); // Show form to create a new task
  };

  // Function to hide the task form
  const handleNewTaskClose = () => {
    setEditingIndex(null); //// Clear editing index when closing the form
    setFormVisible(false); // Hide the task form
  };

  return (
    <div>
      {/* Render the TaskForm component if the form is visible */}
      {isFormVisible && (
        <TaskForm
          onSave={saveTask} // Function to save a new task
          initialData={editingIndex !== null ? tasks[editingIndex] : null} // Pass existing task data if editing
          onUpdate={updateTask} // Function to update the task
          handleNewTaskClose={handleNewTaskClose} // Function to close the form
        />
      )}

      {/* Render the TaskList component, passing necessary props */}
      <TaskList
        tasks={tasks} // List of tasks to display
        onEdit={editTask} // Function to handle editing a task
        onDelete={deleteTask} // Function to handle deleting a task
        handleNewTaskClick={handleNewTaskClick} // Function to open the form for a new task
        refreshPage={refreshPage} // Function to refresh the task list
      />
    </div>
  );
}

export default App;
