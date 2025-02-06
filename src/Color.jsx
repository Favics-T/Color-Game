import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Color = () => {
   const  colors = ["#6E8E59","#4B164C","#09122C","#000957","#16404D","#96414d"]
   const [targetColors,setTargetColors] = useState("#000957");
  const [message,setMessage] = useState("Click to play");
  const [score, setScore] = useState(
    parseInt(localStorage.getItem("score")) || 0
  )

   
   function colorChange(color){
              
        if(targetColors === color){
          setMessage('You passed! 🎉')
          setScore((prevScore)=> prevScore+1)
        }
        else{
          setMessage('you failed');
          setScore(score);
        }

        const randomColor = Math.floor(Math.random()*colors.length)
        const newTargetColors = colors[randomColor];
              setTargetColors(newTargetColors);
                  
            }

                        


            const newGame = ()=>{
              const randomIndex = Math.floor(Math.random()*colors.length);
                          setMessage("Play A game")
              setTargetColors(colors[randomIndex]);
              setScore(0);
            }

           

            



    //  



  return (
    <div className='min-h-screen flex flex-col p-6 text-white'>

        <div className='flex flex-col items-center bg-black  min-h-screen '>
            <div className=''>
            <h1 className='text-center text-2xl font-bold mb-4'>Guessing Game</h1>
            <h1 className='text-2xl font-bold mb-4' data-testid="gameInstructions">Guess The correct Color!</h1>


            <motion.div 
            className='h-32 border-2 w-44 rounded-2xl 
             transition-all duration-500 ease-in-out '
            data-testid="colorBox"
            key={targetColors}
            initial={{ opacity: 0, x: -50}}
            animate={{opacity:1,x:0}}
            exit={{opacity: 0, x:50}}
            transition={{duration: 0.5, ease:"easeInOut", type:"spring", stiffness:120}}
            style={{backgroundColor:targetColors}}
            >
                     
            </motion.div>
            
            <p>{message} </p>
            <p>Score:{score} </p>

{/* House For the six box colors */}
            <div className='grid grid-cols-3 lg-grid lg-grid-cols-6
             gap-4 py-4  '>

            {colors.map((color) => (
          <button
            key={color}
            className="w-20 h-10 rounded text-white font-bold"
            style={{ backgroundColor: color }}
            onClick={() => colorChange(color)}
            data-testid="colorOption"
          >
            
          </button>
        ))}

        <button className='bg-blue-500 text-white rounded-lg
         w-full px-6 ' 
        data-testid="newGameButton"
        onClick={ newGame}>New Game</button>
            </div>
            </div>
           

        </div>


      
    </div>
  )
}

export default Color
