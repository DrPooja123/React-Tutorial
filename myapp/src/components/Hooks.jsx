import React , {useState} from 'react'

const Hooks = () => {

  const [number,setNumber]=useState(0)

  const handleClick=()=>{
    setNumber(number+1);
  }

  return (
    <div>


    <button  className="bg-blue-400  px-8 py-4" onClick={()=>handleClick()}>Click</button>
   <div>{number}</div>
    </div>
  )
}

export default Hooks