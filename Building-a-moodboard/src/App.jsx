import "./moodboard.jsx"
import './App.css'
import { MoodBoard, MoodBoardItem } from "./moodboard.jsx"
import { useState } from "react"

function handleSubmit(event) {
  event.preventDefault()

  const text = document.getElementById("Text")

  console.log("Form Submitted!")
  console.log(text.value)
}

function App() {
  return (
    <>
      <MoodBoard />
      <form onSubmit={handleSubmit}>
        <input type="text" name="Text" id="Text" placeholder="Input name" />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App;