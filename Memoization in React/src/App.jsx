import { useState } from "react";
import ExpensiveSquare from "./hooks/memo";
import { useEffect } from "react";
import Counter from "./hooks/Use Callback";

function App() {
    // console.log("App rendered")
    // const [timer, setTimer] = useState(0);
    // const [num, setNum] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => setTimer((c) => c + 1), 1000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        // <div>
        //     <h1>Timer: {timer} seconds gone</h1>
        //     <ExpensiveSquare num={num} timer={timer} />
        //     <button onClick={() => setNum((n) => n + 1)}>Increase Number</button>
        // </div>
        <>
            <Counter/>
        </>
    );
}

export default App;