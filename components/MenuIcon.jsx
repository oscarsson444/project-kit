"use client";
import { useState } from "react";
import { TbGridDots } from "react-icons/tb";
import { MenuPopup } from "./MenuPopup";

export const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="fixed top-5 right-12 h-[50px] w-[50px] rounded-[50%] bg-primary cursor-pointer">
        <div className="flex justify-center items-center w-full h-full">
          <TbGridDots
            onClick={() => {
              setIsOpen(true);
            }}
            className="h-8 w-8"
          />
        </div>
      </div>
      <MenuPopup
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
};
