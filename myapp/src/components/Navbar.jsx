import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-black text-white ">
     <nav className="flex justify-between text-2xl p-4 ">
         <div >Skills Academy</div>
         <div className="mx-8">
            <ul className="flex justify-center gap-8">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </ul>
         </div>




    </nav>
     





    </div>
  )
}

export default Navbar