// Form Autosave Simulation
// Create a simple input field.
// Use useEffect to watch the input value and console.log "Auto-saving..." whenever the input changes (simulate auto-save).

import React, { useEffect,useState } from 'react'

const AutoSave = () => {
    const [inputValue,setInputValue]=useState("")
    useEffect(()=>{
        console.log("AutoSaving");
        
    },[inputValue])
  return (
    <div>
      <input type="text" onChange={(e)=>setInputValue(e.target.value)} />
    </div>
  )
}

export default AutoSave
