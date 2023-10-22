import React, { useState, useRef } from 'react';
import "./App.css";

function App() {
  const txtArea = useRef(null);
  const [isLocked, setIsLocked] = useState(false);

  const handleCopy = () => {
    txtArea.current.select();
    document.execCommand('copy');
    alert('Text has been copied to the clipboard');
  };

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div className="container">
      <textarea
        ref={txtArea}
        placeholder="Write your text here..."
        disabled={isLocked}
        
      ></textarea>
      <br />
      <button className="button" onClick={handleCopy}>
        Copy
      </button>
      <button className="button" onClick={() => {}}>
        Save
      </button>
      <button className="button" onClick={toggleLock}>
        {isLocked ? 'Unlock' : 'Lock'}
      </button>
    </div>
  );
}

export default App;
