import React, { useEffect, useState } from 'react'

const APIerror = () => {
    const [message,setMessage]=useState()
    useEffect(()=>{
        const fetchAPI=async()=>{
            try{
                const response=await fetch(`https://jsonplaceholder.typicode.com/invalid-endpoint`)
                console.log(response);
                if(!response.ok){
                    throw new Error(`"Failed ",${response.status}`);
                }

                

            }catch(err){
                console.log(err);
                
setMessage(err)


            }
        }
        fetchAPI()
    },[])
  return (
    <div>
        {
            message && <p>{`${message} `}</p>
        }
      
    </div>
  )
}

export default APIerror
