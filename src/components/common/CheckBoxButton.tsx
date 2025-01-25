"use client"

import React from "react";

function CheckBoxButton({
  value,
  title,
  type,
  id,
}: {
  value: number;
  title?: string;
  type?: string;
  id: string;
}) {
  return (
    <div className="relative pt-1">
      <input onChange={(e)=>{console.log(e)}} className="hidden peer" id={id} type={type ?? "checkbox"} value={value} />
      <label className="border py-1 px-8 peer-checked:bg-[#ebe5df] peer-checked:text-black rounded-md" htmlFor={id}>{title}</label>
    </div>
  );
}

export default CheckBoxButton;
