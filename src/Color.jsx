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
    setMessage('you Failed')
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


  //  function colorChange(color){
              
  //   if(targetColors === color){
  //     setMessage('You Passed!')
  //     setScore((prevScore)=> prevScore +1)
  //   }
  //   else{
  //     setMessage('you Failed')
  //     setScore(score)
  //   }
  //   //Using Array destructuring to avoid same color repetition 
  //     const newColorArray = [...colors];
  //   for(let i = newColorArray.length - 1; i > 0; i--){
  //         const randomColorIndex = Math.floor(Math.random()* (i+1));
  //     [newColorArray[i],newColorArray[randomColorIndex]]  = [newColorArray[randomColorIndex],newColorArray[i]];
          
  //   }
  //   setTargetColors(newColorArray[0]);
                           
  //           }

                        


            const newGame = ()=>{
              const randomIndex = Math.floor(Math.random()*colors.length);
                          setMessage("Play A game")
              setTargetColors(colors[randomIndex]);
              setScore(0);
              localStorage.setItem("score","0")
            }


  return (
    <div className='min-h-screen font-serif flex flex-col p-6 text-white mx-10 rounded-xl'>

        <div className='flex flex-col items-center bg-black  min-h-screen rounded-xl mx-5 px-10 py-10 '>
            <div className=''>
            <h1 className='text-center text-2xl font-bold mb-4 text-blue-500'>Guessing Game</h1>
            <h1 className='text-2xl font-bold mb-4 text-blue-500' data-testid="gameInstructions">Guess The correct Color!</h1>


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
            
            <div className='text-blue-500 my-2 mx-2 text-2xl'>
            <p>{message} </p>
            <p>Score:{score} </p> 
            </div>
           

{/* House For the six box colors */}
            <div className='grid grid-cols-3 lg-grid lg-grid-cols-6
             gap-4 py-4  '>

            {colors.map((color) => (
          <button
            key={color}
            className="w-20 h-10 rounded text-white font-bold"
            style={{ backgroundColor: color }}
            onClick={() => tryColorChange(color)}
            data-testid="colorOption"
          >
            
          </button>
        ))}

       
            </div>
            </div>

            <button 
        className='bg-blue-500 text-white rounded-lg text-center
         py-1 px-6 ' 
        data-testid="newGameButton"
        onClick={ newGame}>New Game</button>
           

        </div>


      
    </div>
  )
}

export default Color
