import React, { useState } from "react";
import DashboardNav from "../components/DashboardNav";

const Profile = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="flex">
      {showMenu && <DashboardNav />}
      <div className="flex flex-col mt-10 mx-auto">
        <div className="flex flex-col mt-5">
          <label htmlFor="name">Name</label>
          <input
            className="border mt-1 px-6  md:w-[350px] bg-gray-100 py-2 rounded-xl"
            type="text"
            name="name"
            value={"aswin"}
            disabled
          />
        </div>

        <div className="flex flex-col mt-5">
          <label htmlFor="email">Email</label>
          <input
            className="border mt-1 px-6 md:w-[350px] bg-gray-100 py-2 rounded-xl"
            type="text"
            name="email"
            value={"testmail@gmail.com"}
            disabled
          />
        </div>

        <fieldset className="border-t mt-10 border-slate-300">
        <legend class="mx-auto px-4  text-xl">Change Password</legend>
        </fieldset>

        <div className="flex flex-col mt-5">
          <label htmlFor="password">New password</label>
          <input
            className="border mt-1 px-6 w-[350px]  py-2 rounded-xl"
            type="password"
            name="password"
          />
        </div>

        <div className="flex flex-col mt-5">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            className="border mt-1 px-6 w-[350px]  py-2 rounded-xl"
            type="password"
            name="confirmPassword"
          />
        </div>

        <button className="bg-black text-white mt-5 md:px-30 py-3 rounded-xl hover:shadow-sm hover:shadow-slate-400">
            Submit
          </button>
      </div>
    </div>
  );
};

export default Profile;
