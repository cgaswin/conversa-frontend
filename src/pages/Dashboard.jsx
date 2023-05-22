import React from "react";
import DashboardNav from "../components/DashboardNav";
import { AiOutlinePlus } from "react-icons/ai";
import ChatCard from "../components/ChatCard";

const Dashboard = () => {
  return (
    <div className="flex">
      <DashboardNav />
      <div className="flex flex-col">
        <div className="flex justify-between w-full mt-10 ml-10">
          <div className="flex flex-col gap-14">
            <h2 className="text-3xl">Chats</h2>
            <p className="text-gray-400">Recent chats</p>
          </div>
          <div>
            <button className="bg-black text-white flex items-center justify-around  w-[300px] px-10 py-5 mr-10 rounded-xl">
              <AiOutlinePlus />
              Create New Chat
            </button>
          </div>
        </div>
        <div className="mt-10 ml-10">
        <ChatCard />
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
