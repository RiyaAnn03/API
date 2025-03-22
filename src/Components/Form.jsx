import React, { useState } from 'react'

const Form = () => {
    const[inputName,setInputName]=useState("")
    const [password,setPassword]=useState()
    function handlesubmit(){
        if(inputName=="riya" && password== "riya123"){
            alert(`welcome ${inputName}`)
        }else{
            alert("Invalid name and password")
        }
         
        
    }
  return (
    <>
  <form onSubmit={handlesubmit} >
  <input onChange={(e)=>{setInputName(e.target.value)}}  type="text" placeholder='Please enter your name'  value={inputName}/>
    <input onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder='Please enter password'  value={password}/>
    <button type='submit'>submit</button>
  </form>

      
    </>
  )
}

export default Form
