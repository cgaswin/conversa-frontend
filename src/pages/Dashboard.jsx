import React from "react";
import DashboardNav from "../components/DashboardNav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <DashboardNav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
