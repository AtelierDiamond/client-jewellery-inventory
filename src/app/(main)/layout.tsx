"use client";

import React, { FC, ReactNode } from "react";
import MenuBar from "@/components/base/MenuBar";


const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <MenuBar />
      <section className="flex-1 overflow-y-auto">
                   <main className="h-full ">{children}</main>
      </section>
    </div>
  );
};

export default MainLayout;
