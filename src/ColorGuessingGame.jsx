import React, { useState, useEffect } from "react";

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

const ColorGuessingGame = () => {
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(
    parseInt(localStorage.getItem("score")) || 0
  );
  const [message, setMessage] = useState("Guess the correct color!");
  
  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setMessage("Guess the correct color!");
    setScore(0)
  };

  const handleGuess = (color) => {
    if (color === targetColor) {
      setMessage("Correct! 🎉");
      setScore((prevScore)=> prevScore + 1);
    } else {
      setMessage("Wrong! Try again.");
    }
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(newColor);
    
  };

  return (
    <div className="flex flex-col text-white items-center p-6 bg-[#09122C] min-h-screen">
      <h1 className="text-2xl font-bold mb-4" data-testid="gameInstructions">
        Guess the correct color!
      </h1>
      <div
        className="w-32 h-32 rounded-lg mb-4"
        style={{ backgroundColor: targetColor }}
        data-testid="colorBox"
      ></div>
      <div className="grid grid-cols-3 gap-4">
        {colors.map((color) => (
          <button
            key={color}
            className="w-20 h-10 rounded text-white font-bold"
            style={{ backgroundColor: color }}
            onClick={() => handleGuess(color)}
            data-testid="colorOption"
          >
            {color}
          </button>
        ))}
      </div>
      <p className="mt-4 text-lg" data-testid="gameStatus">{message}</p>
      <p className="mt-2 text-lg font-bold" data-testid="score">Score: {score}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={startNewGame}
        data-testid="newGameButton"
      >
        New Game
      </button>
    </div>
  );
};

export default ColorGuessingGame;