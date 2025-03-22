import React, { useState } from 'react'


const Visible = () => {
      const [click,setClick]=useState(true)
     

  return (
    <>
   {click && <p>hi</p>}
    <button onClick={()=>setClick(!click)}>Invisible text</button>
      
    </>
  )
}

export default Visible
