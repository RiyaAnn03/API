// : Count Button Clicks Without useState
// Use useRef to count how many times a button is clicked, without using useState. Log the count to the console.

import React, { useRef } from 'react'

const ButtonCount = () => {
     const buttonRef=useRef(0)
     function handlebutton(){
        buttonRef.current++
             console.log(buttonRef.current);

     }
     
  return (
    <>
    <button onClick={handlebutton}>Click me</button>
      
    </>
  )
}

export default ButtonCount
