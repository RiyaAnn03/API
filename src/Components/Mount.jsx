// 1. Console log "Component Loaded" once when the component mounts.
// Create a simple component.
// Use useEffect to log "Component Loaded" only once when it mounts.

import React, { useEffect} from 'react'

const Mount = () => {
    useEffect(()=>{
        console.log("component mount");
        
    },[])
  return (
    <>
      <div></div>
    </>
  )
}

export default Mount
