import React, { useState } from "react";
import './App.css';

function App() {
  const [heading, setHeading] = useState("Welcome, Press Start to roll the die!");
  const [player1, setPlayer1] = useState(6);
  const [player2, setPlayer2] = useState(6);

  function handleClick() {
    const value1 = Math.floor(Math.random() * 6) + 1;
    const value2 = Math.floor(Math.random() * 6) + 1;

    if (value1 > value2) {
      setHeading("Player 1 Wins!");
    } else if (value1 < value2) {
      setHeading("Player 2 Wins!");
    } else {
      setHeading("Draw!");
    }  
    
    setPlayer1(value1);
    setPlayer2(value2);
  }

  const imagePath1 = `./images/dice-${player1}.png`;
  const imagePath2 = `./images/dice-${player2}.png`;  
   
  return (
    <div className="main-body">
      <div>
        <h1 className="heading">{heading}</h1>
        <button className="game-btn permanent-marker-regular" onClick={handleClick}>START</button>
        <div className="image-container">
          <div>Player 1<img src={imagePath1} alt={player1} /></div>
          <div>Player 2<img src={imagePath2} alt={player2} /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
