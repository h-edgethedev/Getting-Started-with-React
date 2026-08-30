import { useState } from "react";

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
    function handleDelete(id){

    }
    // console.log(new Date().toLocaleDateString())
    return (
        <div id="task-div">
            <input type="text" id="add-task" placeholder="Input Task" onChange={handleTaskInput} value={input} />
            <button id="add-task-btn" onClick={addTask}>Add</button>
            <ul>
                {
                    tasks.map((task) => (
                        <li className="task" id="{task.id}">
                            <strong>{task.task}</strong><br />
                            <small>{task.date} </small>
                            <button className="delete-task">Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TaskTracker;