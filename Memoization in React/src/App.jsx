import { useState } from "react";
import ExpensiveSquare from "./hooks/memo";
import { useEffect } from "react";

function App(){
    const [timer, setTimer] = useState(0)
    const [num, setNum] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=> setTimer((c)=> c+1), 1000)
        return ()=> clearInterval(interval)
    }, [])
    return(
        <div>
            <h1>Timer: {timer} </h1>
            <ExpensiveSquare num={num}/>
            <button onClick={()=> setNum((n)=>n+1)}></button>

        </div>
    )
}

export default App