import React, { useEffect,useState } from 'react'

const NameApi = () => {
    const [inputValue,setinputValue]=useState("")
    const [fetchData,setFetchData]=useState({})
    const [click,setClick]=useState(false)
    const [error,setError]=useState("")
    useEffect(()=>{
        const FetchGender=async ()=>{
            if(!inputValue.trim("")) return
           try{
            const response=await fetch(`https://api.genderize.io?name=${inputValue}`)
            if(!response.ok){
                throw new Error("Failed to fetch gender");
                 }
                 const data = await response.json();
                 setFetchData(data);
                //  setClick(false)
           }
           catch (error){ 
                console.error("Error fetching users:", error);
                setError(error.message)
           }
           finally{
            setClick(false)
           }
        }
        FetchGender();
    },[click])
  return (
    <>
    <input onChange={(e)=>{setinputValue(e.target.value)}}  value={inputValue}  type="text"  placeholder='Enter a name'/>
    <button onClick={()=>setClick(true)}   >Submit</button>
      <div>{fetchData.gender}</div>
      <p>{error}</p>
    </>
  )
}

export default NameApi
