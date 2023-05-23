import React from 'react'
import bot from "../assets/bot.png"
import {RiDeleteBin5Line} from "react-icons/ri"

const ChatCard = () => {
  return (
    <div className=' w-auto mr-4 mt-2 border border-black rounded-md cursor-pointer '>
        <div className='flex items-center justify-between p-5'>
            <div className='flex items-center gap-3 '>
            <img src={bot}/>
            <h4>Your Assistant</h4>
            </div>
            <button className=' sm:mr-10 bg-red-600 rounded-sm px-5 py-2 transform transition duration-500 hover:scale-105'>
            <RiDeleteBin5Line size={20} color='white'/>
            </button>
        </div>
        <p className='p-5 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facilis iure eius fuga nihil commodi tempora iste repellendus, assumenda nulla, magni amet incidunt quas ea quaerat error odio ut omnis.</p>

    </div>
  )
}

export default ChatCard