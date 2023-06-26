import React, { useEffect, useState } from "react";
import bot from "../assets/bot.png";
import { ImCross } from "react-icons/im";
import { CiMicrophoneOn } from "react-icons/ci";
import ChatBoxLeft from "../components/ChatBoxLeft";
import ChatBoxRight from "../components/ChatBoxRight";
import ChatBubble from "../components/ChatBubble";
import { useParams,useNavigate } from "react-router-dom";

const Chat = () => {

  let {chatId} = useParams();
  console.log(chatId)

  const navigate = useNavigate();

  const [themeValue, setThemeValue] = useState("");
  const [chatReply, setChatReply] = useState("dummy message");
  const [isListening, setIsListening] = useState(false)
  const [chat, setChat] = useState("")
  const [messages,setMessages] = useState([])

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const  mic = new SpeechRecognition()

  mic.continuous = true
  mic.interimResults = true
  mic.lang = 'en-US'
  

  const handleListen = () => {
    if (isListening) {
      mic.start()
      console.log("mic on")
    } else {
      mic.stop()
      console.log("mic off")
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
  
  const abortChat = () => {
    localStorage.removeItem("chatId");
    alert("chat aborted");
    navigate(`/dashboard`)
   
  }
  

  const handleSubmit = async() => {
    console.log(chat) 
    await mic.stop()
    const newMessage = {
      text: chat,
      user_role: "user",
      time: new Date().toLocaleTimeString() // get current time in readable format
    };
    messages.push(newMessage)
    await setChat("")

  }

  const handleTheme = (event) => {
    setThemeValue(event.target.value);
  };

  useEffect(() => {
    handleListen()
  }, [isListening])

  return (
    <div className="flex h-screen  flex-col shadow-inner p-5 w-full mx-auto md:border-l md:b-l-black-2">
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
        <button onClick={abortChat} className="bg-red-400 rounded-md px-2 py-2">
          <ImCross color="white" />
        </button>
      </div>

      <div className="flex  flex-col justify-between h-full  ">
      <div className="overflow-y-scroll">
        <ChatBubble messages={messages} />
      </div>
      <div className=" flex flex-row items-center gap-4 ">
        <div className="w-full flex gap-3 flex-row items-center justify-between">
          <input
            className="border w-full mt-1 px-6  py-6   rounded-xl "
            type="text"
            name="chat"
            readOnly
            value={chat}
            placeholder="press on the mic to speak"
          />
        <button onClick={handleReset} className="bg-red-600 hover:bg-red-800 rounded-md px-8 text-white py-6 outline-none">
          Reset
        </button>
        <button onClick={handleSubmit} className="bg-green-600  hover:bg-green-800 rounded-md px-8 text-white py-6 outline-none">
          Submit 
        </button>
        </div>
        <div>
        <button
          onClick={()=>setIsListening(prevState => !prevState)}
          className={`rounded-full w-20 h-20 ${isListening?'bg-red-500':'bg-blue-300'} ${isListening? 'hover:bg-red-500':'hover:bg-blue-500'}  `}
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
