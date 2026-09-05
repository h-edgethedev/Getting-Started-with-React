import "./App.css"
import useFetch from "./Hooks/UseFetch";
import FetchTodos from "./Working with Data using swr"
import { useState, useEffect } from "react";

function App() {
    const { data, loading, error } = useFetch(" https://justmeme.wtf/api/v1/trending")
    if (loading){
        return <h2>Loading....</h2>
    }
    if (error){
        return <h2>{error.message}</h2>
    }
    const randomNumber = Math.ceil(Math.random()*10)+1
    const trending5 = data.trending.slice(randomNumber, randomNumber+6)
    return (
            <>
                <h2>Memes</h2>
                <ul>
                    {trending5.map((meme, index) =>(
                        <img src={meme.url} alt="meme.id" key={index} height={"250px"} width={"250px"}/>
                    ))}
                </ul>
            </>
        )
}

export default App;