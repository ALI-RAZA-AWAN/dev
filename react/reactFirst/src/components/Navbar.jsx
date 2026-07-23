import react from 'react'
import {Link} from  'react-router-dom'
function Navbar(){
    return(<nav className=" bg-emerald-600 flex py-5 px-10 items-center justify-between "><h2 className="text-2xl font-bold">FIGURE OUT</h2>
     <div className=" flex gap-10 items-center">
        <input className='bg-white text-black' type="text" />
      
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/Contact'>Contact</Link>
      <Link to='/product'>Product</Link>
      
      
        </div></nav>)}
      
   
    

export default Navbar;