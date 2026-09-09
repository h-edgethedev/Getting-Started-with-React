import React from "react";
const CounterChild = React.memo(({onClick}) =>{
    console.log("CounterChild component rendered")
    return <button onClick={onClick}>Increment from Child</button>
})

export default CounterChild;