import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import AllChats from "./components/AllChats";
import Home from "./components/Home"
import Error from "./pages/Error"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} >
        <Route index element={<AllChats />} />
        <Route path="chat" element={<Chat />} />
        <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
