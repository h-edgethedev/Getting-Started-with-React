import { useState, useEffect } from "react";
import "./App.css"

function FruitSearch() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([])
    function handleSubmit(e) {
        e.preventDefault()
    }

    useEffect(() => {
        if (query.trim() === "") {
            setResults([])
            return
        }
        const timeoutId = setTimeout(async () => {
            try {
                const response = await fetch(`https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`)
                const data = await response.json()
                setResults([data.map((item) => item.name)])
                console.log(data)
            } catch(error) {
                console.error
            }
        }, 700) 
        return ()=>clearTimeout(timeoutId)
    }, [query])
    return (
        <div id="search-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search-input">Search for fruits: </label>

                <input type="search" id="search-input" value={query} onChange={(e) => setQuery(e.target.value)} />
            </form>

            <div id="results">
                {results.length > 0 ? results.map((item) => (
                    <p className="result-item" key={item}>
                        {item}
                    </p>
                )) : (<p>No results found</p>)}
            </div>
        </div>
    )
}

export default FruitSearch;