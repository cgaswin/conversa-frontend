import React, { useState } from "react";
import Avatar from "../components/Avatar";
import dashboard from "../assets/dashboard.svg";
import chat from "../assets/chat.svg";
import person from "../assets/person.svg";
import logout from "../assets/logout.svg";

const DashboardNav = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="md:w-1/3 w-full pr-10 shadow-md  h-screen ">
      <Avatar name={"Aswin"} />
      <div className=" mt-5 flex flex-col gap-6  ">
        <div
          className={`flex ml-12 pl-8 border-black cursor-pointer ${
            activeTab == "home" ? " border-l-4  border-l-black-500" : ""
          } `}
          onClick={() => handleTab("home")}
        >
          <img src={dashboard} />
          <p
            className={`uppercase pl-2 ${
              activeTab == "home" ? "text-black-800" : ""
            } `}
          >
            Home
          </p>
        </div>

        <div
          className={`flex ml-12 pl-8 border-black cursor-pointer ${
            activeTab == "chat" ? " border-l-4  border-l-black-500" : ""
          } `}
          onClick={() => handleTab("chat")}
        >
          <img src={chat} />
          <p className="uppercase pl-2 ">chat</p>
        </div>

        <div
          className={`flex ml-12 pl-8 border-black cursor-pointer ${
            activeTab == "person" ? " border-l-4  border-l-black-500" : ""
          } `}
          onClick={() => handleTab("person")}
        >
          <img src={person} />
          <p className="uppercase pl-2">Person</p>
        </div>

        <div className="flex ml-20 fixed bottom-10 cursor-pointer ">
          <img src={logout} />
          <p className="uppercase pl-2 text-gray-400 hover:text-black">
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
