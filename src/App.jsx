import React, { useState } from "react";
import './App.css';

function App() {
  const [heading, setHeading] = useState("Welcome to your choice maker, Dr. Cheff!");
  const [player, setPlayer] = useState(6);
  const [isRolling, setIsRolling] = useState(false);

  function handleClick() {
    const value = Math.floor(Math.random() * 6) + 1;
    
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false) 
      if (value % 2 === 0) {
        setHeading("Your choice is even!")
      } else {
        setHeading("Your choice is odd!")
      }
      setPlayer(value);
    }, 1000);

    
  }

  const imagePath = `./images/dice-${player}.png`;
   
  return (
    <div className="main-body">
      <div>
        <h1 className="heading">{heading}</h1>
        <button className="game-btn permanent-marker-regular" onClick={handleClick}>{isRolling? "ROLLING..." : "ROLL"}</button>
        <div className="image-container">
          <div className={isRolling? "rolling" : ""}><img src={imagePath} alt={player} /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
