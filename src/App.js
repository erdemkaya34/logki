import React from 'react'
import papa from "./papa.png"
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

function App() {
  return (
    <div className="flex h-196">
    <div className="w-1/2 ml-24 h-3/4">
      <div className=" mt-40 pl-12 pr-20 ">
        <h1 className="text-7xl mb-8 text-gray-800 font-medium font-sans">LOGIN</h1>
        <input 
          type="text" 
          className="w-full mb-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" 
          placeholder="Username" 
        />
        <input 
          type="password" 
          className="w-full mb-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" 
          placeholder="Password" 
        />
        <button className="bg-gray-900 text-white px-4 py-2 rounded-md mr-2 w-40">LOGIN</button>
        
        <div className="flex items-center mb-2 mt-4">
          <div className="flex-grow border-t border-gray-950"></div>
          <span className="mx-2 text-center text-black font-normal">OR</span>
          <div className="flex-grow border-t border-gray-950"></div>
        </div>

       <div className='flex mt-7'>
        <a href="/#" className=" ml-40 "><AiFillFacebook className='text-blue-900 size-7 rounded-xl' /></a>
        <a href="/#"><FcGoogle className='size-6 ml-14'  /></a>
        </div> 
      </div>
      <br></br>
      <div className="mt-7 mr-7 text-center">
        <a href='/#' className="block text-gray-800">Click here to sign up</a>
      </div>
    </div>
    <div className="w-1/2  ml-40" >
      <img src={papa} alt="papagan görseli" className="w-full h-3/4 rounded-tl-[7rem] rounded-bl-[7rem]" />
    </div>
  </div>
  )
}

export default App