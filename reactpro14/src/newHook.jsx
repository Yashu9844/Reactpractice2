import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const newHook = () => {

   const [windowSize , setWindow] = useState({
    width:0,
    height:0
   })

 const handleSize = ()=>{
    setWindow({
        width:window.innerWidth,
        height:window.innerHeight
    })
 } 


useEffect(()=>{

 handleSize()
 window.addEventListener('resize',handleSize)

 return ()=>{
    window.removeEventListener('resize',handleSize)
 }


},[])



  return (
    windowSize
  )
}

export default newHook
