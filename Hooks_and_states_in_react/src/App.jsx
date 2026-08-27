import { useState } from "react";

function Counter() {
  const initialValue = 0
  const [count, setCount] = useState(initialValue)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}


function App() {
  return(
    <>
      <Counter/>
    </>
  )
}
export default App;