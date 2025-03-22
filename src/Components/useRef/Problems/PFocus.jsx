// Problem 1: Focus an Input Field Automatically
// Task:
// Create an input box.
// When the page loads, the input should automatically gain focus (without clicking).

import React, { useEffect, useRef } from 'react'

const PFocus = () => {
    const inputRef=useRef()
    useEffect(()=>{
      inputRef.current.focus()
    },[])
  return (
    <div>
      <input ref={inputRef} type="text"  placeholder='enter your name'/>
    </div>
  )
}

export default PFocus
