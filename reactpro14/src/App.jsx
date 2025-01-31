import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import useOut from './useOut'

const App = () => {

 const [show , setShow] = useState(false)
 const ref = useRef()

 useOut(ref , ()=>setShow(false))

 useEffect(()=>{
   console.log(ref.current)
 },[ref])
  return (
    <div>
     hello buddy jsut checking the status of my skills forgot or not 

     <div className="" ref={ref}>
          { show    ? (

            <div>
             <h3> this something crazy right </h3>

            </div>
          ) : (
            <button  onClick={()=> setShow(true)} >Show</button>
          )}
     </div>
    </div>
  )
}

export default App
