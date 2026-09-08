import { useState, useEffect, useCallback } from "react";
import CounterChild from "./counterChild";

function Counter() {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(new Date().toLocaleTimeString())
    const handleClick = useCallback(()=>{
        setCount(count+1)
    })

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimer(new Date().toLocaleTimeString())
        }, 1000)

        return ()=> clearInterval(interval)
    }, [])
    return(
        <div>
            <h1>Time: {timer} </h1>
            <p>Count: {count} </p>
            <button onClick={handleClick}>Increment</button>
            <CounterChild onClick={handleClick}/>
        </div>
    )
}

export default Counter;