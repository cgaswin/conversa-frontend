import React,{useState} from "react";
import DashboardNav from "../components/DashboardNav";
import { AiOutlinePlus } from "react-icons/ai";
import ChatCard from "../components/ChatCard";

const Dashboard = () => {

  const [showMenu,setShowMenu] = useState(true)

  return (
    <div className="flex">
      {showMenu&&<DashboardNav />}
      <div className="flex flex-col ">
        <div className="flex justify-between w-full mt-10 ml-10">
          <div className="flex flex-col gap-4 sm:gap-14">
            <h2 className="text-3xl">Chats</h2>
            <p className="text-gray-400">Recent chats</p>
          </div>
          <div>
            <button className="bg-black text-white flex items-center gap-2 justify-around w-auto px-10 py-5 mr-14 sm:px-10 sm:py-5 sm:mr-20 rounded-xl">
              <AiOutlinePlus />
              Create New Chat
            </button>
          </div>
        </div>
        <div className="mt-5 ml-10">
        <ChatCard />
        <ChatCard />
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
