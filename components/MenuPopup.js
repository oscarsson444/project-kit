import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { MdSunny, MdCloudySnowing } from "react-icons/md";

const isClickInsideRectangle = (e, element) => {
  const r = element.getBoundingClientRect();
  const inside =
    e.clientX > r.left &&
    e.clientX < r.right &&
    e.clientY > r.top &&
    e.clientY < r.bottom;
  return inside;
};

const paths = [
  { icon: <MdSunny className="h-10 w-10" />, to: "/weather", name: "Weather" },
  { icon: <MdSunny className="h-10 w-10" />, to: "/", name: "Home" },
];

export const MenuPopup = ({ isOpen, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);

  const variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0 },
  };

  return (
    <dialog
      ref={ref}
      onCancel={onClose}
      className="bg-transparent overflow-hidden w-[425px] h-[425px] outline-none"
      onClick={(e) =>
        ref.current && !isClickInsideRectangle(e, ref.current) && onClose()
      }
    >
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ type: "spring", stiffness: 280, damping: 25 }}
        className="glass glass-blur w-[390px] h-[390px] absolute top-[calc(50%-200px)] left-[calc(50%-200px)]"
      >
        <div className="grid grid-cols-4 grid-rows-4 gap-4 p-4">
          {paths.map((item, key) => (
            <div className="flex flex-col p-2 justify-center items-center gap-2 cursor-pointer hover:bg-white/20 rounded w-20 h-20">
              {item.icon}
              <p className="text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </dialog>
  );
};
