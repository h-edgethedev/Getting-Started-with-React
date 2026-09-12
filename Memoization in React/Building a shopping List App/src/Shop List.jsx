import { useState } from "react";
import { useCallback } from "react";
import "./App.css"
const items = ["Apples", "Bananas", "Strawberries", "Blueberries", 'Mangoes', "Pineapples", "Lettuce", "Broccoli", "Paper Towels", "Dish Soap"]

export const ShoppingList = () => {
    const [query, setQuery] = useState("")
    const [selectedItems, setSelectedItems] = useState([])
    const filteredItems = items.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    function toggleItem(item) {
        setSelectedItems
    }
    return (
        <div className="container">
            <h1>Shopping List</h1>
            <form>
                <label htmlFor="search">Search for an item:
                    <input type="search" name="search" id="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." aria-describedby="search-description" />
                </label>
                <p id="search-description">Type to filter the list below:</p>
                <ul>
                    {filteredItems.map((item) => (

                        <li key={item}><label><input type="checkbox" onChange={(item) => toggleItem(item)} />{item}</label></li>
                    ))}
                </ul>
            </form>
        </div>
    )
}