"use client";
import React, { useState, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import SidebarLinks from "./SidebarLinks";
import { FaAddressBook, FaTimes } from "react-icons/fa";

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-full w-full bg-transparent z-[5000]"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        ref={containerRef}
      >
        <motion.div
          className={`${
            isOpen ? "bg-gray-800" : "bg-transparent"
          } h-full p-8 max-w-xs w-full`}
        >
          <SidebarLinks isOpen={isOpen} />
        </motion.div>
      </motion.div>
      <motion.div
        className="fixed top-10 left-10 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer z-[6000]"
        onClick={() => toggleOpen()}
      >
        {isOpen ? (
          <FaTimes className="text-white" />
        ) : (
          <FaAddressBook className="text-white" />
        )}
      </motion.div>
    </>
  );
};

export default Sidebar;
