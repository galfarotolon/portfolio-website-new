"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SidebarLinks from "./SidebarLinks";
import { FaTimes } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

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
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        toggleContactInfo();
      }
    };

    if (isContactInfoOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isContactInfoOpen, toggleContactInfo]);

  return (
    <>
      {isContactInfoOpen && (
        // Overlay for detecting clicks outside of the sidebar
        <div
          className="fixed inset-0 bg-transparent z-[4000]"
          onClick={toggleContactInfo}
        />
      )}
      <motion.div
        className="fixed top-0 left-0 h-full bg-transparent z-[5000]"
        initial={false}
        animate={isContactInfoOpen ? "open" : "closed"}
        variants={sidebarVariants}
        ref={containerRef}
      >
        <motion.div
          className={`${
            isContactInfoOpen ? "bg-gray-800" : "bg-transparent"
          } h-full p-8 max-w-[200px] sm:max-w-[150px] md:max-w-[150px] lg:max-w-[250px] xl:max-w-[200px]`}
        >
          <SidebarLinks isOpen={isContactInfoOpen} />
        </motion.div>
      </motion.div>
      <motion.div
        className="fixed top-14 sm:top-[4rem] left-10 transform -translate-y-1/2 flex items-center justify-center cursor-pointer z-[6000] bg-gray-800 text-white px-2 py-2 sm:px-4 rounded-full hover:bg-gray-700 transition-colors"
        onClick={toggleContactInfo}
      >
        {isContactInfoOpen ? (
          <FaTimes className="text-white" />
        ) : (
          <>
            <IoIosContact className="text-white w-6 h-6" />
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
