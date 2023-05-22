import React from 'react'
import bot from "../assets/bot.png"
import {RiDeleteBin5Line} from "react-icons/ri"

const ChatCard = () => {
  return (
    <div className='w-[1000px] border border-black rounded-md'>
        <div className='flex items-center justify-between p-5'>
            <div className='flex items-center gap-3 '>
            <img src={bot}/>
            <h4>Your Assistant</h4>
            </div>
            <div className='mr-10 hover:scale-150'>
            <RiDeleteBin5Line size={20}/>
            </div>
        </div>
        <p className='p-5 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facilis iure eius fuga nihil commodi tempora iste repellendus, assumenda nulla, magni amet incidunt quas ea quaerat error odio ut omnis.</p>

    </div>
  )
}

export default ChatCard