import React from "react";
import type { LayoutProps } from "../types/LayoutProps";



const layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex justify-center">
      <div className="w-[1120px] h-[1156px] flex-shrink-0  ">
        <div className="w-[800px] flex pt-[60px] pb-[64px] flex-col items-center ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
