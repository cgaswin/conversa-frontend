import React from 'react'


const ChatBoxRight = (props) => {
  return (
    <div className='flex flex-col mt-5 self-end '>
      <div className='bg-gray-50 border text-black shadow-sm w-fit py-2 rounded-l-2xl rounded-br-2xl px-10'>
        {props.text}
      </div>
      {props.error && (
        <div className='text-red-400 mt-2  px-10'>{props.error}</div>
      )}
    </div>
  );
};


export default ChatBoxRight