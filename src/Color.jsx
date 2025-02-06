import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Color = () => {
   const  colors = ["#6E8E59","#4B164C","#09122C","#000957","#16404D","#96414d"]
   const [targetColors,setTargetColors] = useState("#000957");
  const [message,setMessage] = useState("Click to play");
  const [score, setScore] = useState(
    parseInt(localStorage.getItem("score")) || 0
  )

   
  
const tryColorChange=(color)=>{
     if(targetColors === color){
    setMessage('You Passed!')
    setScore((prevScore)=> prevScore +1)
  }
  else{
    setMessage('You Failed')
    setScore(score)
  }
  //Using Array destructuring to avoid same color repetition 
    const newColorArray = [...colors];
  for(let i = newColorArray.length - 1; i > 0; i--){
        const randomColorIndex = Math.floor(Math.random()* (i+1));
    [newColorArray[i],newColorArray[randomColorIndex]]  = [newColorArray[randomColorIndex],newColorArray[i]];
        
  }
  setTargetColors(newColorArray[0]);
 }
    
            const newGame = ()=>{
              const randomIndex = Math.floor(Math.random()*colors.length);
                          setMessage("Play A game")
              setTargetColors(colors[randomIndex]);
              setScore(0);
              localStorage.setItem("score","0")
            }


  return (
    <div className='min-h-screen font-serif bg-blue-300 flex flex-col px-4 py-6 text-white mx-10 rounded-xl'>

        <div className='  flex flex-col items-center bg-black  min-h-screen rounded-xl mx-5 px-10 py-10 '>
            <div className=''>
            <h1 className='text-center text-2xl font-bold mb-4 text-blue-500'>Guessing Game</h1>
            <h1 className='text-xl font-semibold text-center mb-4 text-blue-500' data-testid="gameInstructions">Guess The correct Color!</h1>


            <motion.div 
            className='h-32 mx-auto border-2 w-32 rounded-2xl' 
             data-testid="colorBox"
            key={targetColors}
            initial={{ opacity: 0, x: -50}}
            animate={{opacity:1,x:0}}
            exit={{opacity: 0, x:50}}
            transition={{duration: 0.5, ease:"easeInOut", type:"spring", stiffness:120}}
            style={{backgroundColor:targetColors}}
            >                     
            </motion.div>
            
            <div className='text-blue-500 my-4 mx-2 text-center'>
            <p className='text-lg' data-testid='gameStatus'>{message} </p>
            <p className='text-lg font-semibold' data-testid='score'>Score:{score} </p> 
            </div>
           
{/* House For the six box colors */}
            <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6  justify-center mt-4 gap-4 py-4  '>

            {colors.map((color) => (
          <button
            key={color}
            className="w-16 border-white shadow-md hover:scale-105 h-10
            transition-transform 
            rounded text-white font-bold"
            style={{ backgroundColor: color }}
            onClick={() => tryColorChange(color)}
            data-testid="colorOption"
          >
            
          </button>
        ))}

       
            </div>
            </div>

            <button 
        className='bg-blue-500 w-40  text-white rounded-lg text-center
         py-2 px-6 mt-6 text-lg font-semibold ' 
        data-testid="newGameButton"
        onClick={ newGame}>New Game</button>
        <p className='text-[8px]  my-4' data-testid='gameInstructions'>Instructions on how to play:
          <li>click on any color that matches the big button color, to restart click on the new game button </li>
        </p>
           

        </div>


      
    </div>
  )
}

export default Color
