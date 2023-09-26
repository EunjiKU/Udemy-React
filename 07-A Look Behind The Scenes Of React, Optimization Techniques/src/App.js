import React, { useState, useCallback } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput'

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("뀨잉");

  const toggleParagraphHandler = useCallback(() => {
    // setShowParagraph(!showParagraph);
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  }, [])

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
