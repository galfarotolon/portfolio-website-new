"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaBars, FaTimes } from "react-icons/fa";

const FloatingNav = ({
  navItems,
  className,
  isNavbarOpen,
  toggleNavbar,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  isNavbarOpen: boolean;
  toggleNavbar: () => void;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      toggleNavbar();
    }
  };

  useEffect(() => {
    if (isNavbarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavbarOpen]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "hidden sm:flex w-full sm:right-10 max-w-fit fixed z-[5000] top-10 lg:inset-x-0 lg:mx-auto px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-2 sm:space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 flex items-center space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 cursor-pointer"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-xs sm:text-sm md:text-base">
                {navItem.name}
              </span>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
      <div
        className="fixed top-14 right-10 transform -translate-y-1/2 flex items-center justify-center cursor-pointer z-[6000] bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors sm:hidden"
        onClick={toggleNavbar}
      >
        {isNavbarOpen ? (
          <FaTimes className="text-white" />
        ) : (
          <FaBars className="text-white" />
        )}
      </div>
      <AnimatePresence>
        {isNavbarOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-1/2 bg-gray-800 z-[5000] sm:hidden"
          >
            <div className="relative p-8 h-full">
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                {navItems.map((navItem: any, idx: number) => (
                  <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    className={cn(
                      "block text-white text-sm py-2 px-4 hover:bg-gray-700 rounded"
                    )}
                  >
                    {navItem.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNav;
