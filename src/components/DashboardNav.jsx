import React, { useState, useEffect, useContext } from "react";
import Avatar from "../components/Avatar";
import dashboard from "../assets/dashboard.svg";
import chat from "../assets/chat.svg";
import person from "../assets/person.svg";
import logout from "../assets/logout.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import {  UserContext } from "../context/UserContext.jsx";
import {isAuthenticated, signout} from "../utils/auth"

const DashboardNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [windowWidth, setWindowWidth] = useState(true);
  const {username,loggedIn,handleLogin} = useContext(UserContext)

  const handleSignout = () => {
      signout()
      handleLogin(false)
  }

    const navigate = useNavigate();

  useEffect(()=>{
    if(!loggedIn){
      navigate("/login")
    }
  },[navigate,loggedIn])
 

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth > 700);
    };

    handleResize(); // Initial check on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {showMenu ? (
        <div className="fixed z-30 inset-0 bg-black bg-opacity-90 flex justify-start">
          <div className={`w-1/2 bg-white h-screen p-10 `}>
            <div
              className="float-right mt-1 -mr-4 cursor-pointer"
              onClick={toggleMenu}
            >
              <RxCross2 size={40} />
            </div>
            <div className="-ml-14 mt-20">
              <Avatar name={username} />
              <div className=" mt-5 flex flex-col gap-6  ">
                <div
                  className={`flex ml-12 pl-8 border-black cursor-pointer ${
                    activeTab == "home" ? " border-l-4  border-l-black-500" : ""
                  } `}
                  onClick={() => handleTab("home")}
                >
                  <NavLink to="/dashboard">
                    <div className="flex items-center">
                      <img src={dashboard} />
                      <p
                        className={`uppercase pl-2 ${
                          activeTab == "home" ? "text-black-800" : ""
                        } `}
                      >
                        Home
                      </p>
                    </div>
                  </NavLink>
                </div>

                <div
                  className={`flex ml-12 pl-8 border-black cursor-pointer ${
                    activeTab == "chat" ? " border-l-4  border-l-black-500" : ""
                  } `}
                  onClick={() => handleTab("chat")}
                >
                  <NavLink to="/chat">
                    <div className="flex items-center">
                      <img src={chat} />
                      <p className="uppercase pl-2 ">chat</p>
                    </div>
                  </NavLink>
                </div>

                <div
                  className={`flex ml-12 pl-8 border-black cursor-pointer ${
                    activeTab == "person"
                      ? " border-l-4  border-l-black-500"
                      : ""
                  } `}
                  onClick={() => handleTab("person")}
                >
                  <NavLink to="/profile">
                    <div className="flex items-center">
                      <img src={person} />
                      <p className="uppercase pl-2">Profile</p>
                    </div>
                  </NavLink>
                </div>

                <button
                  onClick={handleSignout}
                  className="flex ml-20 fixed bottom-10 cursor-pointer "
                >
                  <img src={logout} />
                  <p className="uppercase pl-2 text-gray-400 hover:text-black">
                    Logout
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : windowWidth ? (
        <div className={`w-1/4 border-r-2 bg-white h-screen p-10 `}>
          <div className="-ml-14 -mt-10">
            <Avatar name={username} />
            <div className=" mt-5 flex flex-col gap-6  ">
              <div
                className={`flex ml-12 pl-8 border-black cursor-pointer ${
                  activeTab == "home" ? " border-l-4  border-l-black-500" : ""
                } `}
                onClick={() => handleTab("home")}
              >
                <NavLink to="/dashboard">
                  <div className="flex items-center">
                    <img src={dashboard} />
                    <p
                      className={`uppercase pl-2 ${
                        activeTab == "home" ? "text-black-800" : ""
                      } `}
                    >
                      Home
                    </p>
                  </div>
                </NavLink>
              </div>

              <div
                className={`flex ml-12 pl-8 border-black cursor-pointer ${
                  activeTab == "chat" ? " border-l-4  border-l-black-500" : ""
                } `}
                onClick={() => handleTab("chat")}
              >
                <NavLink to="/dashboard/chat">
                  <div className="flex items-center">
                    <img src={chat} />
                    <p className="uppercase pl-2 ">chat</p>
                  </div>
                </NavLink>
              </div>

              <div
                className={`flex ml-12 pl-8 border-black cursor-pointer ${
                  activeTab == "person" ? " border-l-4  border-l-black-500" : ""
                } `}
                onClick={() => handleTab("person")}
              >
                <NavLink to="/dashboard/profile">
                  <div className="flex items-center">
                    <img src={person} />
                    <p className="uppercase pl-2">Profile</p>
                  </div>
                </NavLink>
              </div>

              <button
                onClick={handleSignout}
                className="flex ml-20 fixed bottom-10 cursor-pointer "
              >
                <img src={logout} />
                <p className="uppercase pl-2 text-gray-400 hover:text-black">
                  Logout
                </p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 ml-5 cursor-pointer z-40" onClick={toggleMenu}>
          <RxHamburgerMenu size={40} />
        </div>
      )}
    </>
  );
};

export default DashboardNav;
