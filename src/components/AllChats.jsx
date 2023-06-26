import React from 'react'
import ChatCard from "./ChatCard";
import NewChat from './NewChat';

const AllChats = () => {
    // const [showCreateChat, setShowCreateChat] = useState(true);

    // useEffect(() => {
    //   const handleResize = () => {
    //     setShowCreateChat(window.innerWidth > 400);
    //   };
  
    //   handleResize(); // Initial check on component mount
  
    //   window.addEventListener("resize", handleResize);
  
    //   return () => {
    //     window.removeEventListener("resize", handleResize);
    //   };
    // }, []);
  return (
    <div className="flex flex-col ">
        <div className="flex justify-between overflow-x-hidden  w-full mt-10 pl-10">
          <div className="flex flex-col gap-4  md:mt-5 sm:gap-14">
            <h2 className="text-3xl">Chats</h2>
            <p className="text-gray-400">Recent chats</p>
          </div>
          <NewChat/>
        </div>
        <div className=" -ml-10 mt-5 sm:ml-10">
          <ChatCard />
          <ChatCard />
        </div>
      </div>
  )
}

export default AllChats