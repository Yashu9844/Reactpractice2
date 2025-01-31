import React from 'react'
import { useEffect } from 'react'

const useOut = (ref , handler) => {

        useEffect(()=>{
              const listner = (event)=>{
                if(!ref.current || ref.current.contains(event.target)){
                  return
                }

                handler(event)


              }

            document.addEventListener('mousedown', listner);
            document.addEventListener('touchstart', listner);

            return ()=>{
              document.removeEventListener('mousedown', listner);
              document.removeEventListener('touchstart', listner);
            }



        },[ref , handler])

  return (
    <div>
      
    </div>
  )
}

export default useOut
