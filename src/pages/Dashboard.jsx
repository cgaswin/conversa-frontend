import React, { useState,useEffect } from "react";
import DashboardNav from "../components/DashboardNav";
import { AiOutlinePlus } from "react-icons/ai";
import ChatCard from "../components/ChatCard";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showCreateChat, setShowCreateChat] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowCreateChat(window.innerWidth > 400);
    };

    handleResize(); // Initial check on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex">
      {showMenu && <DashboardNav />}
      <div className="flex flex-col ">
        <div className="flex justify-between w-full mt-10 ml-10">
          <div className="flex flex-col gap-4 -mt-5 md:mt-5 sm:gap-14">
            <h2 className="text-3xl">Chats</h2>
            <p className="text-gray-400">Recent chats</p>
          </div>
          <div>
            <button className="bg-black text-white flex items-center gap-2 justify-around w-auto px-5 -mt-2 py-5 mr-14 sm:px-10 sm:py-5 sm:mr-20 rounded-xl cursor-pointer transform transition duration-500 hover:md:scale-105">
              <AiOutlinePlus />
              {showCreateChat ? "Create New Chat" : ""}
            </button>
          </div>
        </div>
        <div className=" -ml-10 mt-5 sm:ml-10">
          <ChatCard />
          <ChatCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
