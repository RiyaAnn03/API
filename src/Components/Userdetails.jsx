import React, { useEffect, useState } from 'react'

const Userdetails = () => {
    const [userId,setUserId]=useState(1)
    const [fetchData,setFetchdata]=useState(null)
    useEffect(()=>{
        if(userId>2) return
        
        const FetchAPI=async ()=>{
            try{
                const response=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                if(!response.ok){
                    throw new Error("Failed to fetch user details");
                }
                const data = await response.json();
                setFetchdata(data)
            }catch(error){
              console.log(error);

            }
        }
        FetchAPI()

    },[userId])
  return (
    <>
    <button onClick={()=>setUserId((prev)=>prev+1)}>Next User</button>
{
    fetchData &&     <div>{`${fetchData?.name} and ${fetchData?.email}`}</div>
 
}      
    </>
  )
}

export default Userdetails
