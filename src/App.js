
import { useState } from 'react';
import './App.css';
function App() {
  const [showtext, setShowtext] = useState(true);
  const hideshow = () => {
    setShowtext(!showtext)
  }
  return (
       
    <div className="App">
      <button onClick={hideshow}>how/hide</button>
      {showtext === true && <h1>hello my name is nathanael</h1>}
    </div>
  );
};

export default App;

