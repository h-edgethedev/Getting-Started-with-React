import { useState } from "react";


export const ToggleApp = () => {
  const [isVisible, setIsVisible] = useState(true);

  function handleToggleVisibility() {
    setIsVisible(!isVisible)
  }

  return (
    <div id="toggle-container">
      <button id="toggle-button" onClick={handleToggleVisibility}>{isVisible? "Hide": "Show"} Message</button>
      {isVisible && <p id="message">I love freeCodeCamp!</p>}
    </div>
  );
};
function App() {
  return (
    <>
      <ToggleApp />
    </>
  )
}

export default App;