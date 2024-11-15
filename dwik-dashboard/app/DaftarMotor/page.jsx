import React from "react";
import DetailMotor from "../Section/DetailListMotor/DetailMotor";
import Sidebar from "../Components/Sidebar/Sidebar";
import DashboardNav from "../Components/DashboardNav/DashboardNav";

export default function Main() {
  return (
    <div>
      <Sidebar />
      <DashboardNav />
      <div className=" ms-[270px] p-4 min-h-screen">
        <div className="wraper-content">
          <DetailMotor />
        </div>
      </div>
    </div>
  );
}
