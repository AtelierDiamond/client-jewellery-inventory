"use client";

import React, { FC, ReactNode } from "react";
import MenuBar from "@/components/base/MenuBar";
import Profile from "@/components/common/Profile";
import "@fontsource-variable/montserrat";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <MenuBar />
      <Profile />
      <div className="flex justify-between items-center bg-[#e8ecef] py-4 mt-0">
        <div className="relative flex h-full flex-1 flex-col overflow-y-auto">
          <main className="flex-1 font-montserrat">{children}</main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
