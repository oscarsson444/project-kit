import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { MdSunny } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import Link from "next/link";

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
  { icon: <IoHomeSharp className="h-10 w-10" />, to: "/", name: "Home" },
];

export const MenuPopup = ({ isOpen, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !isClickInsideRectangle(e, ref.current)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      ref={ref}
      variants={variants}
      transition={{ type: "spring", stiffness: 280, damping: 25 }}
      className="z-10 glass glass-blur w-[390px] h-[390px] fixed top-[calc(50%-200px)] left-[calc(50%-200px)]"
    >
      <div className="grid grid-cols-4 grid-rows-4 gap-4 p-4">
        {paths.map((item, index) => (
          <Link
            key={index}
            href={item.to}
            onClick={onClose}
            className="flex flex-col p-2 justify-center items-center gap-2 cursor-pointer hover:bg-white/20 rounded w-20 h-20"
          >
            {item.icon}
            <p className="text-sm">{item.name}</p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};
