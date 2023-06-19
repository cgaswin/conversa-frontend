import React from 'react'

const ChatBoxRight = (props) => {
  console.log({props})
  return (
    <div className='bg-gray-50 border fixed right-10  text-black shadow-sm w-fit py-2 rounded-l-2xl rounded-br-2xl  mt-10 px-10'>{props.text}</div>
  )
}

export default ChatBoxRight