// Create a counter that starts from 0 and increases every second.
// Use setInterval inside useEffect.
// Clear the interval when the component unmounts.
import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
       
     const Time=   setInterval(() => {
            setCount((preval)=>preval+1)
        }, 1000);
        return ()=>{
            clearInterval(Time)
        }
    },)
  return (
    <>
    <div>{count}</div>

      
    </>
  )
}

export default Timer
