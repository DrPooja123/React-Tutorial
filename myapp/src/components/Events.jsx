import React from 'react'

const Events = () => {

    const handleClick=()=>{
        document.getElementById("htag").innerHTML="Event Triggered"
    }
    const handleClickEvent=(name)=>{
        document.getElementById("htag1").innerHTML=name + "Language"
    }

  return (
    <div class="max-w-[1200px] mx-auto h-96 bg-yellow-500">

        <button onClick={handleClick}>Click Me</button>
        <h1 id="htag">Events</h1>
    
        <button onClick={()=>handleClickEvent("Java")}>Click Handle</button>
        <h1 id="htag1">Events</h1>

    </div>
  )
}

export default Events