import { useState, useMemo } from "react";

const items = [
    "Apples",
    "Bananas",
    "Strawberries",
    "Blueberries",
    "Mangoes",
    "Pineapple",
    "Lettuce",
    "Broccoli",
    "Paper Towels",
    "Dish Soap",
];

export const ShoppingList = () => {
    const [query, setQuery] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);

    console.log("Filtering items...")
    const filteredItems = useMemo(() => {
        return (
            items.filter((item) =>
                item.toLowerCase().includes(query.toLowerCase()), [query]
            )
        )
})

const toggleItem = (item) => {
    setSelectedItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
};

return (
    <div className="container">
        <h1>Shopping List</h1>
        <form>
            <label htmlFor="search">Search for an item:</label>
            <input
                id="search"
                type="search"
                placeholder="Search..."
                aria-describedby="search-description"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <p id="search-description">Type to filter the list below:</p>
            <ul>
                {filteredItems.map((item) => {
                    const isChecked = selectedItems.includes(item);
                    return (
                        <li
                            key={item}
                            style={{ textDecoration: isChecked ? "line-through" : "none" }}
                        >
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => toggleItem(item)}
                                    checked={isChecked}
                                />
                                {item}
                            </label>
                        </li>
                    );
                })}
            </ul>
        </form>
    </div>
);
};