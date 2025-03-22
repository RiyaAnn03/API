import React, { useRef } from 'react'

const Focus = () => {
    const inpuRef=useRef()
    const Focus=()=>{
        // inpuRef.current.focus( )
        inpuRef.current.value="hi"
    }
  return (
    <div>
      <input type="text" ref={inpuRef} />
      <button onClick={Focus}>Focus Click</button>
    </div>
  )
}

export default Focus
