"use client";

import React, { FC, ReactNode } from "react";
import MenuBar from "@/components/base/MenuBar";


const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <MenuBar />
      <div className="flex justify-between items-center mt-0">
        <div className="relative flex flex-1 ">
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
