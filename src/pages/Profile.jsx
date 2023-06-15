import React,{useContext, useState} from "react";
import axios from "../api/axios"
import UserContext from "../context/UserContext";

const Profile = () => {

  const [newPassword,setNewPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")

  const {userId} = useContext(UserContext)


  const handleSubmit = async(event) => {
   if(newPassword!=confirmPassword){
    alert("passwords do not match")
   }
   else if(!newPassword){
    alert("enter your new password")
  }
  else if(!newPassword){
    alert("enter your password again to confirm")
  }
   else{
    event.preventDefault();
      try {
        const {data} = await axios.put("/password/update",{id:userId,newPassword})
        setConfirmPassword("")
        setNewPassword("")
        if(data.success){
          alert("password succesfully changed")
        }
      } catch (error) {
        console.log(error.respose.data)
      }
   }
  }

  const handlePassword = (e) =>{
    setNewPassword(e.target.value)
  }

  const handleConfirmPassword = (e) =>{
    setConfirmPassword(e.target.value)
  }

  return (
    <div className="flex mx-auto ">
      <div className="flex flex-col mt-10 mx-auto">
        <fieldset className="border-t mt-10 border-slate-300">
        <legend className="mx-auto px-4  text-xl">Change Password</legend>
        </fieldset>

        <div className="flex flex-col mt-5">
          <label htmlFor="password">New password</label>
          <input
            className="border mt-1 px-6 w-[350px]  py-2 rounded-xl"
            type="password"
            name="password"
            onChange={handlePassword}
            value={newPassword}
          />
        </div>

        <div className="flex flex-col mt-5">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            className="border mt-1 px-6 w-[350px]  py-2 rounded-xl"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
        </div>

        <button onClick={handleSubmit} className="bg-black text-white mt-5 md:px-30 py-3 rounded-xl hover:shadow-sm hover:shadow-slate-400">
            Submit
          </button>
      </div>
    </div>
  );
};

export default Profile;
