import { Fragment, useRef } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import footballers from './footballers';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [query, setQuery] = useState("")
  const debouncedQuery = useDebounce(query, 1000)

  useEffect(() => {
    if (debouncedQuery) {
      const results = footballers.filter((footballer) =>
        footballer.toLowerCase().includes(debouncedQuery.toLowerCase())
      )
      console.log(`Search results: ${results}`)
    }
    else {
      console.log(`Search Results: []`)
    }
  }, [debouncedQuery])
  return (
    <>
      <h1 style={{textAlign: "center"}}>Footballer Search App</h1>
      <div style={{textAlign: 'center'}}>
        <input type="text" style={{padding: "0.5rem", width: "30%"}} value={query} onChange={(e)=> setQuery(e.target.value)} placeholder='Search for a footballer...'/>
      </div>
    </>
  )
}

export default App;
