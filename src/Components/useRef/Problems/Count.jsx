// Create an input box that updates its value using useState.
// However, track how many times the component re-renders using useRef and show the re-render count on the screen.

import React, { useRef, useState } from 'react'


const Count = () => {
    const [inputValue,setInputValue]=useState("")
    const inputRef=useRef(1)
    console.log(inputRef.current++);
    

  return (
    <>
      <input onChange={(e)=>setInputValue(e.target.value)} type="text" placeholder='please enter a text' value={inputValue} />

    </>
  )
}

export default Count
