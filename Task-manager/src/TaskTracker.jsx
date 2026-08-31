import { useState } from "react";
import "./App.css"

function TaskTracker() {
    const [input, setInput] = useState("")
    const [tasks, setTask] = useState([])
    function handleTaskInput(event) {
        setInput(event.target.value)
    }
    function addTask() {
        if (input === "".trim()) {
            alert("You need to input a task!")
            return
        }
        const newTask = {
            id: Date.now(),
            task: input,
            date: new Date().toLocaleDateString(),
            completed: false
        }
        setTask((prevTasks) => [...prevTasks, newTask])
        console.log(tasks)
        setInput("")
    }
    function handleDelete(id) {
        setTask((prevTasks) =>
            prevTasks.filter((task) => task.id !== id)
        )
    }

    function handleToggle(id) {
        setTask((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: true
                    }
                }
                return task
            })
        )
        console.log(tasks)
    }
    // // console.log(new Date().toLocaleDateString())
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
                            <li className="task" id={task.id}>
                                <strong>{task.task}</strong><br />
                                <small>{task.date} </small>
                                <button className="delete-task" onClick={() => handleDelete(task.id)}>Delete</button>
                                <input type="checkbox" name="task-completed-status" onChange={() => handleToggle(task.id)} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TaskTracker;