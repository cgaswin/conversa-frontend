import React from 'react'
import ChatBoxRight from './ChatBoxRight';
import ChatBoxLeft from './ChatBoxLeft';

const ChatBubble = ({messages}) => {
    const renderMessage = (message) => {
       return <ChatBoxRight text={message.text} error={message.error}/>
      };

      const renderBotMessage = (message) => {
         return <ChatBoxLeft text={message.reply}/>
        };

      // Sort messages by timestamp
  const sortedMessages = messages.sort((a, b) =>
  new Date(a.time) > new Date(b.time) ? 1 : -1
);


    return (
        <div className="flex flex-col items-start m gap-2">
      {sortedMessages.map((message, index) => (
        <div className={`mt-${index === 0 ? '0' : '10'}`} key={index}>
          {renderMessage(message)}
          {renderBotMessage(message)}

          </div>
      ))}
    </div>
      )
}

export default ChatBubble