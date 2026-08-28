import { useState } from "react";

// function Counter() {
//   const initialValue = 0
//   const [count, setCount] = useState(initialValue)
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <br />
//       <button onClick={() => setCount(count+1)}>Increment</button>
//     </div>
//   )
// }

function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    age: 31,
    city: "LA",
  });

  // Change user age directly
  // const handleAgeChange = (e) => {
  //   setUser((prevUser)=>{
  //     const updatedUser = {...prevUser, age: e.target.value}
  //     console.log("Previous State", prevUser)
  //     console.log(`Updated State: ${updatedUser}`)
  //     return updatedUser
  //   })
  //   console.log(user);
  // };

  // const handleCityChange = (e)=>{
  //   setUser((prevUser)=>{
  //     const updatedUser = {...prevUser, city: e.target.value}
  //     return updatedUser
  //   })
  // }
  // Change user age directly

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({ ...prevUser, [name]: value }))
  }
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <h2>Update User's name</h2>
      <input type="text" name="name" value={user.name} onChange={handleChange} />
      <h2>Update User Age </h2>
      <input type="number" name="age" value={user.age} onChange={handleChange} />
      <h2>Update User's city</h2>
      <input type="text" name="city" id="city" value={user.city} onChange={handleChange} />
    </div>
  );
}

function ItemsList() {
  const [items, setItems] = useState([
    { id: 0, name: "Item 1" },
    { id: 1, name: "Item 2" },
    { id: 2, name: "Item 3" }
  ])

  const addItem = () => {
    const newItem = {
      id: items.length + 1, name: `Item ${items.length + 1}`
    }
    // items.push(newItem)
    setItems((prevItems) => [...prevItems, newItem])
  }

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Creates a new array
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <>
      <Profile />
      <ItemsList />
    </>
  )
}
export default App;