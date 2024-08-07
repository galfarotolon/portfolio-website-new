"use client";

import { projects } from "@/data";
import { CardHover } from "./ui/CardHover";

const RecentProjects = () => {
  return (
    <div className="py-20 " id="projects">
      <h2 className="text-center text-[40px] md:text-3xl lg:text-4xl font-bold ">
        A small selection of{" "}
        <span className="text-blue-500">featured projects</span>
      </h2>
      <CardHover items={projects} className=" gap-16 mt-10" />
    </div>
  );
};

export default RecentProjects;
