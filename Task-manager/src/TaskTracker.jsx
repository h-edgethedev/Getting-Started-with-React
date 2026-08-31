import { useState } from "react";
import "./App.css"

function TaskTracker() {
    const [input, setInput] = useState("")
    const [tasks, setTask] = useState([])
    function handleTaskInput(event) {
        setInput(event.target.value)
    }
    function addTask() {
        const newTask = {
            id: Date.now(),
            task: input,
            date: new Date().toLocaleDateString()
        }
        setTask((prevTasks) => [...prevTasks, newTask])
        console.log(tasks)
    }
    function handleDelete(buttonEl) {

    }
    // console.log(new Date().toLocaleDateString())
    return (
        <div id="task-div">
            <div className="search-elements">
                <input type="text" id="add-task" placeholder="Input Task" onChange={handleTaskInput} className="input" value={input} />
                <button className="cssbuttons-io-button" onClick={addTask}>
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
                    </svg>
                    <span>Add</span>
                </button>
            </div>


            <div className="tasks-container">
                <ul>
                    {
                        tasks.map((task) => (
                            <li className="task" id="{task.id}">
                                <strong>{task.task}</strong><br />
                                <small>{task.date} </small>
                                <button className="delete-task" onClick={deleteTask(this)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TaskTracker;