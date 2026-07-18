import react from 'react'
function Navbar(){
    return(<nav className=" bg-emerald-600 flex py-5 px-10 items-center justify-between "><h2 className="text-2xl font-bold">FIGURE OUT</h2>
     <div className=" flex gap-10 items-center">
      <h4 className="text-xl">About</h4>
     <h4 className="text-xl">Services</h4>
     <h4 className="text-xl">Contact</h4>
     <h4 className="text-xl">Account</h4></div></nav>)
}
export default Navbar;