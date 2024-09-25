import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
function TaskForm({
  onSave, // Function to call when saving a new task
  initialData = null, // Initial data for editing a task (if any)
  onUpdate, // Function to call when updating an existing task
  handleNewTaskClose, // Function to close the task form
}) {
  // State to manage form inputs with initial empty values
  const [formData, setFormData] = useState({
    assignedTo: "",
    status: "",
    dueDate: "",
    priority: "",
    description: "",
  });

  // Effect to set form data when editing an existing task
  useEffect(() => {
    if (initialData) {
      setFormData(initialData); // Populate the form with initial data
    }
  }, [initialData]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormData({ ...formData, [name]: value }); // Update the respective field in formData
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //  Prevent default form submission behavior
    if (
      // Validate that all required fields are filled
      formData.assignedTo &&
      formData.status &&
      formData.dueDate &&
      formData.priority &&
      formData.description
    ) {
      // Call appropriate function based on whether editing or creating a new task
      if (initialData) {
        onUpdate(formData); // Call update function if initial data is provided
      } else {
        onSave(formData); // Call save function if creating a new task
      }

      // Clear the form after submission
      setFormData({
        assignedTo: "",
        status: "",
        dueDate: "",
        priority: "",
        description: "",
      });
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: "3",
      }}
    >
      <div>
        <div className="main-Div">
          {/* Close button to handle closing the task form */}
          <button onClick={handleNewTaskClose} className="close-button">
            <AiOutlineClose className="close-icon" />
          </button>{" "}
          <h1>{initialData ? "Edit Task" : "New Task"}</h1>
          <div className="input-div">
            {/* Form starts here */}
            <form onSubmit={handleSubmit}>
              <div className="flex-div">
                {/* Input for assignedTo */}
                <div>
                  <div>
                    <label>Assigned To</label>
                  </div>
                  <div>
                    <input
                      required
                      type="text"
                      name="assignedTo"
                      value={formData.assignedTo}
                      onChange={handleChange}
                      placeholder="Assign task to..."
                    />
                  </div>
                </div>
                {/* Input for dueDate */}
                <div>
                  <div>
                    <label>Due Date</label>
                  </div>
                  <div>
                    <input
                      type="date"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* Dropdown for task status */}
              <div className="flex-div">
                <div>
                  <div>
                    <label>Status</label>
                  </div>
                  <div>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Complete">Complete</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Not Started">Not Started</option>
                    </select>
                  </div>
                </div>

                {/* Dropdown for task priority */}
                <div>
                  <div>
                    <label>Priority</label>
                  </div>
                  <div>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Low">Low</option>
                      <option value="High">High</option>
                      <option value="Normal">Normal</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Textarea for task description */}
              <div style={{ marginLeft: "100px" }} className="description-div">
                <div>
                  <label>Description</label>
                </div>
                <div>
                  <textarea
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Task description..."
                    required
                    className="description-textArea"
                  />
                </div>
              </div>
              {/* Button div for cancel and submit actions */}
              <div className="button-div">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      assignedTo: "",
                      status: "",
                      dueDate: "",
                      priority: "",
                      description: "",
                    })
                  }
                >
                  Cancel
                </button>
                {/* Submit button to add or update task */}
                <button type="submit">{initialData ? "Update" : "Add"}</button>
              </div>
            </form>
            {/* Form ends here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
