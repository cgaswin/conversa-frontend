import React, { useEffect, useState } from "react";
import bot from "../assets/bot.png";
import { ImCross } from "react-icons/im";
import { CiMicrophoneOn } from "react-icons/ci";
import ChatBoxLeft from "../components/ChatBoxLeft";
import ChatBoxRight from "../components/ChatBoxRight";
// import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import regeneratorRuntime from "regenerator-runtime";

const Chat = () => {
  const [themeValue, setThemeValue] = useState("");
  const [chatReply, setChatReply] = useState("dummy message");
  const [microphone, setMicrophone] = useState(false);


  const [isListening, setIsListening] = useState(false)
  const [chat, setChat] = useState(null)
  const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
  const  mic = new SpeechRecognition()

  mic.continuous = true
  mic.interimResults = true
  mic.lang = 'en-US'
    


  

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setChat(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const handleReset = () =>{
    setChat("")
  }
  
  const handleTheme = (event) => {
    setThemeValue(event.target.value);
  };

  useEffect(() => {
    handleListen()
  }, [isListening])

  return (
    <div className="flex   flex-col shadow-inner p-5 w-full mx-auto md:border-l md:b-l-black-2">
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

      <div className="flex flex-col justify-between h-full  ">
      <div>
        <ChatBoxLeft text={chatReply} />
        <ChatBoxRight text={chatReply} />
      </div>
      <div className=" flex flex-row items-center gap-4 ">
        <div className="w-full flex gap-3 flex-row items-center justify-between">
          <input
            className="border w-full mt-1 px-6  py-6   rounded-xl "
            type="text"
            name="chat"
            value={chat}
            placeholder="press on the mic to speak"
          />
        <button onClick={handleReset} className="bg-red-600  rounded-md px-8 text-white py-6 outline-none">
          Reset
        </button>
        </div>
        <div>
        <button
          onClick={()=>setIsListening(prevState => !prevState)}
          className="rounded-full w-20 h-20 bg-blue-300 hover:bg-blue-500 "
        >
          <CiMicrophoneOn color="white" size={50} className="mx-auto" />
        </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Chat;
