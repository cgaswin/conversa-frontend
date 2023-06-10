import React, { useState } from "react";
import bot from "../assets/bot.png";
import { ImCross } from "react-icons/im";
import { CiMicrophoneOn } from "react-icons/ci";
import ChatBoxLeft from "../components/ChatBoxLeft";
import ChatBoxRight from "../components/ChatBoxRight";

const Chat = () => {
  const [themeValue, setThemeValue] = useState("");
  const [chat, setChat] = useState("test");
  const [chatReply, setChatReply] = useState("dummy message");

  const handleChat = () => {
    setChat("replace dummy");
  };

  const handleTheme = (event) => {
    setThemeValue(event.target.value);
  };

  return (
    <div className="flex  flex-col shadow-inner p-5 w-full mx-auto md:border-l md:b-l-black-2">
      <div className="flex items-center justify-around gap-3 rounded-sm p-2 bg-slate-50">
        <div className="flex items-center gap-3 ">
          <img src={bot} />
          <h4>Your Assistant</h4>
        </div>
        <div>
          <label htmlFor="theme">
            <select
              className="text-xl px-2 rounded-sm"
              name="theme"
              value={themeValue}
              onChange={handleTheme}
            >
              <option value="airport">Airport</option>
              <option value="restaurant">Restaurant</option>
            </select>
          </label>
        </div>
        <button className="bg-red-400 rounded-md px-2 py-2">
          <ImCross color="white" />
        </button>
      </div>

      <div>
        <ChatBoxLeft text={chatReply} />
        <ChatBoxRight text={chatReply} />
      </div>

      <div className="flex fixed bottom-10">
          <input
            className="border mt-1 px-6  py-10   rounded-xl "
            type="text"
            name="chat"
            value={chat}
            placeholder="press on the mic to speak"
          />
        <button onClick={handleChat} className="rounded-full w-20 h-20 bg-blue-300 hover:bg-blue-500 fixed bottom-10 right-10">
          <CiMicrophoneOn color="white" size={50} className="mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
