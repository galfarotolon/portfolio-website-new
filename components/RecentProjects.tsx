"use client";

import { projects } from "@/data";
import { CardHover } from "./ui/CardHover";
import { motion } from "framer-motion";

const RecentProjects = () => {
  return (
    <div className="py-20 px-4 sm:px-6 md:px-10" id="projects">
      <motion.h2
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-4xl font-bold px-4 sm:px-6 md:px-10 leading-tight"
      >
        A selection of{" "}
        <span className="block sm:inline text-blue-500">featured projects</span>
      </motion.h2>
      <CardHover items={projects} className="gap-16 mt-10" />
    </div>
  );
};

export default RecentProjects;
