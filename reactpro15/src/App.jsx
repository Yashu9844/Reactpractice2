import React from 'react'

const App = () => {

 const handleTop = ()=>{
    window.scrollTo({
      top:0,
      left:0,
      
      behavior:'smooth'})
 }

 const handleBottom = ()=>{
    window.scrollTo({
      top:document.body.scrollHeight,
      left:0,
      
      behavior:'smooth'})
    }

    const handleScrollToBabu = () => {
      const element = document.querySelector(".babu");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    
  return (
    <div>
      <div className="" >
        <button onClick={handleScrollToBabu}>Scroll to Bottom</button>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <div className="babu">
       <h1>hello everyone here is the babu </h1> 
       </div>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
       
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>

        <h1>hello everyone </h1>
     
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <h1>hello everyone </h1>
        <button onClick={handleTop}>Scroll to Top</button>
      </div>
    </div>
  )
}

export default App
