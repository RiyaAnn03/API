import React from 'react'

const Message = () => {
    function Myfunction(param){
        console.log(param);
        

    }
  return (
    <div>
      <button onClick={()=>Myfunction(2)}>clicke me</button>
    </div>
  )
}

export default Message
