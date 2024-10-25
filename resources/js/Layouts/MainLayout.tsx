import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="bg-white h-full">
      <div className="hidden lg:block h-screen bg-white fixed w-0 lg:w-64 border border-gray-400/30 z-50">
        <Sidebar></Sidebar>
      </div>

      <div>
        <div className="ml-0 lg:ml-64 h-screen">
          <Header></Header>

          <div className="p-3 lg:p-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
