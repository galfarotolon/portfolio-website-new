"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SidebarLinks from "./SidebarLinks";
import { cn } from "@/lib/utils";
import { FaAddressBook, FaTimes } from "react-icons/fa";

const sidebarVariants = {
  open: {
    clipPath: "circle(1500px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
      damping: 5,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="fixed top-10 left-10 z-[6000]">
        <motion.div
          className={cn(
            "w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes
              className="text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FaAddressBook className="text-white" />
          )}
        </motion.div>
      </div>
      <motion.div
        className={cn("fixed top-0 left-0 h-full w-full z-[5000]")}
        onClick={handleClickOutside}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <motion.div
          className={cn(
            "h-full p-8 max-w-xs w-full relative",
            isOpen ? "bg-gray-800" : "bg-transparent"
          )}
        >
          <div className="flex justify-end mb-4"></div>
          <SidebarLinks />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Sidebar;
