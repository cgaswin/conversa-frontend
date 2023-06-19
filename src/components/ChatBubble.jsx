import React from 'react'
import ChatBoxRight from './ChatBoxRight';
import ChatBoxLeft from './ChatBoxLeft';

const ChatBubble = ({messages}) => {
    const renderMessage = (message) => {
        if (message.user_role === "user") {
          return <ChatBoxRight text={message.text} />;
        } else if (message.user_role === "bot") {
          return <ChatBoxLeft text={message.text} />;
        }
      };

      // Sort messages by timestamp
  const sortedMessages = messages.sort((a, b) =>
  new Date(a.time) > new Date(b.time) ? 1 : -1
);


    return (
        <div className="flex flex-col items-start m gap-2">
      {sortedMessages.map((message, index) => (
        <div className={`mt-${index === 0 ? '0' : '10'}`} key={index}>{renderMessage(message)}</div>
      ))}
    </div>
      )
}

export default ChatBubble