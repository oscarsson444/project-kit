"use client";
import { TbGridDots } from "react-icons/tb";
import { useState } from "react";
import { motion } from "framer-motion";

export const Navigator = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    console.log("click");
    setShowMenu((prevState) => !prevState);
  };

  const variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0 },
  };

  return (
    <div className="w-full h-full">
      <div
        onClick={handleClick}
        className="absolute top-5 right-12 h-[50px] w-[50px] rounded-[50%] bg-primary cursor-pointer"
      >
        <div className="flex justify-center items-center w-full h-full">
          <TbGridDots className="h-8 w-8" />
        </div>
      </div>

      <motion.div
        initial={false}
        animate={showMenu ? "open" : "closed"}
        variants={variants}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="absolute top-[calc(50%-100px)] left-[calc(50%-100px)] w-[200px] h-[200px] bg-primary"
      >
        <p>Menu</p>
      </motion.div>
    </div>
  );
};
