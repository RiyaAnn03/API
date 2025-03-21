import React, { useState } from 'react'

const Error = () => {
    const [message,setMessage]=useState("")
    function myFunction(){
    try{
        throw new Error("failed");

    }catch(err){
        setMessage("failed")
        
    }

    }
  return (
    <div>
        <button onClick={myFunction}>Click</button>
        {message && <p style={{color:"red"}}>{message}</p>}
      
    </div>
  )
}

export default Error
