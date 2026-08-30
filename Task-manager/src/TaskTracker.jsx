import { useState } from "react";

function TaskTracker() {
    const [input, setInput] = useState("")
    const [tasks, setTask] = useState([])
    function handleTaskInput(event){
        setInput(event.target.value)
    }
    function addTask(){
        const newTask = {
            id: tasks.length+1,
            task: input
        }
        setTask((prevTasks)=> [...prevTasks, newTask])
        console.log(tasks)
    }
    return (
        <div id="task-div">
            <input type="text" id="add-task" placeholder="Input Task" onChange={handleTaskInput} value={input}/>
            <button id="add-task-btn" onClick={addTask}>Add</button>
        </div>
    )
}

export default TaskTracker; 