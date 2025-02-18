import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import useOut from './useOut'
import newHook from './newHook'

const App = () => {

 const [show , setShow] = useState(false)
 const ref = useRef()

 useOut(ref , ()=>setShow(false))

 useEffect(()=>{
   console.log(ref.current)
 },[ref])


const windowSize = newHook();

const {width , height} = windowSize

  return (
    <div>

     <div className="" ref={ref}>
          { show    ? (

            <div>
             <h3> this  crazy right </h3>

            </div>
          ) : (
            <button  onClick={()=> setShow(true)} >ow</button>
          )}
            
             <p> window width: {width}px </p>
             <p> window height: {height}px </p>
            


     </div>
    </div>
  )
}

export default App
