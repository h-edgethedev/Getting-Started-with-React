function App() {
  return (
    <div className="App">
      <UserList />
      <Button buttonText="Click Me" isActive={true}/>
    </div>
  )

}

function UserList() {
  const users = [
    { id: "user-001-employee", name: "Alice", email: "alice@example.com" },
    { id: "user-002-employee", name: "Bob", email: "bob@example.com" },
    { id: "user-003-employee", name: "John", email: "john@example.com" },
  ];
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name} </h3>
          <h3>{user.email} </h3>
          <h3>{user.id} </h3>
        </div>
      ))}
    </div>
  )
}

function Button({ buttonText, isActive }) {
  const defaultStyles = {
    backgroundColor: isActive ? "green": "blue",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",    
  };

  return <button style={defaultStyles}>{buttonText}</button>;
}


export default App;