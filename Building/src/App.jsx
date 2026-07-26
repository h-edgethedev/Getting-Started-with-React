import './App.css'
// import "./index.jsx"
import { Card } from './card.jsx'

function App() {
  return (
    <div className="flex-container">
      <Card name={"Mark"} title={"Front-End developer"} bio={"I like to work with different front-end technologies and play video games."} />
      <Card name={"Tiffany"} title={"Engineering manager"} bio={"I have worked in tech for 15 years and love to help people grow in this industry."} />
      <Card name={"Doug"} title={"Back-End developer"} bio={"I have been a software developer for over 20 years and I love working with Go and Rust."}/>
    </div>
  )
}

export default App;