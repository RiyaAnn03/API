import React, { useEffect, useRef } from 'react'

const Style = () => {
   const inputref= useRef()
   const buttonref=useRef()
   function handleSubmit(){
// buttonref.current.style.background="blue"
// buttonref.current.style.padding="3px"
buttonref.current.style.display="none"
   }
   useEffect(()=>{
inputref.current.focus()
   },[])
  return (
    <div>
      <input ref={inputref} type="text" placeholder='enter your name' />
<button onClick={()=>handleSubmit()} ref={buttonref}>Submit</button>
    </div>
  )
}

export default Style
