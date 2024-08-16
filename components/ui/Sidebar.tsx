"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
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

const Sidebar: React.FC<{
  isContactInfoOpen: boolean;
  toggleContactInfo: () => void;
}> = ({ isContactInfoOpen, toggleContactInfo }) => {
  const containerRef = useRef(null);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-full w-full bg-transparent z-[5000]"
        initial={false}
        animate={isContactInfoOpen ? "open" : "closed"}
        variants={sidebarVariants}
        ref={containerRef}
      >
        <motion.div
          className={`${
            isContactInfoOpen ? "bg-gray-800" : "bg-transparent"
          } h-full p-8 max-w-[200px] w-full sm:max-w-[150px] md:max-w-[150px] lg:max-w-[250px] xl:max-w-[200px]`}
        >
          <SidebarLinks isOpen={isContactInfoOpen} />
        </motion.div>
      </motion.div>
      <motion.div
        className="fixed top-14 sm:top-[4rem] left-10 transform -translate-y-1/2 flex items-center justify-center cursor-pointer z-[6000] bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
        onClick={toggleContactInfo}
      >
        {isContactInfoOpen ? (
          <FaTimes className="text-white" />
        ) : (
          <>
            <FaAddressBook className="text-white" />
            <span className="hidden sm:inline text-xs sm:text-sm ml-2">
              Contact Info
            </span>
          </>
        )}
      </motion.div>
    </>
  );
};

export default Sidebar;
