"use client";

import React, {FC, ReactNode} from "react";
import MenuBar from "@/components/base/MenuBar";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <MenuBar />
            <div className="relative flex h-full flex-1 flex-col overflow-y-auto ">
            <main className="flex-1 font-serif">{children}</main>
          </div>
        </>
    );
};

export default MainLayout;
