import React from "react";

import Table from "react-bootstrap/Table";

// Icons from react-icons library
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdSearch } from "react-icons/io";
import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";

function TaskList({
  tasks,
  onEdit,
  onDelete,
  handleNewTaskClick,
  refreshPage,
}) {
  return (
    <div className="main-taskList-div">
      {/* Sub-menu section including title and task controls */}
      <div className="sub-menu-div">
        {/* TaskList header: Task Menu Icon, Title, and Task Overview */}
        <div className="taskList-info-div">
          <div className="flex">
            <span>
              <TfiMenuAlt className="icon" />
            </span>
            <span>
              <h2>Task</h2>
              <p>All Tasks</p>
            </span>
          </div>
          {/* Controls for adding a new task, refreshing, and searching */}
          <div>
            <div className="group-button-div">
              {/* Button to add a new task */}
              <button onClick={handleNewTaskClick} className="button">
                New Task
              </button>
              {/* Button to refresh the page */}
              <button className="button" onClick={refreshPage}>
                Refresh
              </button>
            </div>
            {/* Search bar */}
            <div>
              <input type="text" className="search-bar-input" />
              <IoMdSearch className="search-icon" />
              {/* Search icon */}
            </div>
          </div>
        </div>
        <div>{/* <p>{tasks.index} record</p> */}</div>

        {/* Table to display the task list */}
        <div className="table-container">
          <Table responsive className="styled-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Assigned To</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th colSpan={2}>Comments</th>
              </tr>
            </thead>
            {/* Loop through tasks array and render each task in a row */}
            {tasks.map((task, index) => (
              <tbody>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{task.assignedTo}</td>
                  <td>{task.status}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.priority}</td>
                  <td>{task.description}</td>
                  <td>
                    <span className="task-show-button">
                      {/* Edit task button */}
                      <button onClick={() => onEdit(index)} className="button">
                        Edit
                      </button>
                      {/* Delete task button */}
                      <button
                        onClick={() => onDelete(index)}
                        className="button"
                      >
                        Delete
                      </button>
                    </span>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
        {/* Pagination and navigation for task records */}
        <div className="bottom-div">
          <div
            className="flex"
            style={{ alignItems: "center", marginLeft: "10px" }}
          >
            {/* Show number of tasks per page */}
            <div
              style={{
                backgroundColor: "whitesmoke",
                color: "purple",
                width: "50px",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              20
            </div>
            {/* Page navigation buttons: Up and Down */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <button
                style={{ padding: "1px", width: "50px", borderRadius: "5px" }}
              >
                <MdKeyboardArrowUp />
                {/* Move to the previous set of records */}
              </button>
              <button
                style={{ padding: "1px", width: "50px", borderRadius: "5px" }}
              >
                <MdKeyboardArrowDown />
                {/* Move to the next set of records */}
              </button>
            </div>
          </div>
          {/* Bottom pagination controls (First, Previous, Next, Last) */}
          <div style={{ width: "400px" }} className="flex group-button-div">
            <button className="button">
              <MdKeyboardDoubleArrowUp className="bottom-icon" />
              {/* Navigate to the first page */}
              First
            </button>
            <button className="button">
              <MdKeyboardDoubleArrowLeft className="bottom-icon" />
              {/* Navigate to the previous page */}
              Prev
            </button>
            {/* Current page number */}
            <div
              style={{
                backgroundColor: "purple",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              2
            </div>
            <button className="button">
              <MdKeyboardDoubleArrowRight className="bottom-icon" />
              {/* Navigate to the next page */}
              Next
            </button>
            <button className="button">
              <MdKeyboardDoubleArrowDown className="bottom-icon" />
              {/* Navigate to the last page */}
              Last
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
