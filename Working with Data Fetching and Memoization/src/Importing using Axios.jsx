import { useState, useEffect } from "react";
import "./App.css"
import axios from "axios"

function axiosFetchData() {
    const [data, setData]= useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users")
                setData(res.data)
            }
        }
    })
    return (
        <>

        </>
    )
}