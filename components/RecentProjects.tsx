"use client";

import { projects } from "@/data";
import { CardHover } from "./ui/CardHover";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-green-500">recent projects</span>
      </h1>
      <CardHover items={projects} className="p-4 gap-16 mt-10" />
    </div>
  );
};

export default RecentProjects;
