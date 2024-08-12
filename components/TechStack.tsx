"use client";
import { motion } from "framer-motion";
import { LeftCurve, RightCurve } from "./ui/Curves";
import MagicButton from "./ui/MagicButton";
import { useState } from "react";

const collabApps = [
  {
    id: 1,
    name: "Tailwind CSS",
    designation: "Utility-First CSS",
    icon: "/tail.svg",
  },
  {
    id: 2,
    name: "TypeScript",
    designation: "Typed JavaScript",
    icon: "/ts.svg",
  },
  {
    id: 3,
    name: "Sanity.io",
    designation: "Headless CMS",
    icon: "/sanity.svg",
  },
  {
    id: 4,
    name: "Node.js",
    designation: "Server-side JavaScript",
    icon: "/nodejs.svg",
  },
  { id: 5, name: "Clerk", designation: "Authentication", icon: "c.svg" },
  {
    id: 6,
    name: "MongoDB",
    designation: "NoSQL Database",
    icon: "/mongodb.svg",
  },
  {
    id: 7,
    name: "Framer Motion",
    designation: "Animation Library",
    icon: "/fm.svg",
  },
  { id: 8, name: "React", designation: "UI Library", icon: "/re.svg" },
];

const TechStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const rotationClasses = [
    "rotate-0",
    "rotate-45",
    "rotate-90",
    "rotate-135",
    "rotate-180",
    "rotate-225",
    "rotate-270",
    "rotate-315",
  ];

  const reverseRotationClasses = [
    "no-rotate",
    "-rotate-45",
    "-rotate-90",
    "-rotate-135",
    "-rotate-180",
    "-rotate-225",
    "-rotate-270",
    "-rotate-315",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container lg:flex my-20">
      <div className="max-w-[25rem]">
        <motion.h2
          className="text-left text-[40px] md:text-3xl lg:text-4xl font-bold my-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-red-400">Tech Stack</span>
        </motion.h2>

        <motion.ul
          className="max-w-[22rem] mb-10 md:mb-14"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.li className="mb-3 py-3" variants={itemVariants}>
            <div className="flex items-center">
              <img src={"/check.svg"} width={24} height={24} alt="check" />
              <h6 className="body-2 ml-5">High Performance</h6>
            </div>
            <p className="text-white-100 mt-2 text-sm pl-10">
              Optimized for speed and scalability.
            </p>
          </motion.li>
          <motion.li className="mb-3 py-3" variants={itemVariants}>
            <div className="flex items-center">
              <img src={"/check.svg"} width={24} height={24} alt="check" />
              <h6 className="body-2 ml-5">Modern Design</h6>
            </div>
            <p className="text-white-100 mt-2 text-sm pl-10">
              Beautiful, responsive, and user-friendly interfaces.
            </p>
          </motion.li>
          <motion.li className="mb-3 py-3" variants={itemVariants}>
            <div className="flex items-center">
              <img src={"/check.svg"} width={24} height={24} alt="check" />
              <h6 className="body-2 ml-5">Developer Efficiency</h6>
            </div>
            <p className="text-white-100 mt-2 text-sm pl-10">
              Quick development cycles with TypeScript and modern frameworks.
            </p>
          </motion.li>
        </motion.ul>
        <motion.a href="#projects" initial="initial" animate="animate">
          <MagicButton title="Explore My Work" position="left" />
        </motion.a>
      </div>

      <div className="lg:ml-auto xl:w-[38rem] mt-4">
        <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
          <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
              <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                <img src={"/next.svg"} width={48} height={48} alt="Next.js" />
              </div>
            </div>
          </div>

          <ul>
            {collabApps.map((app, index) => (
              <li
                key={app.id}
                className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom ${rotationClasses[index]}`}
                onMouseEnter={() => setHoveredIndex(app.id)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl ${reverseRotationClasses[index]}`}
                >
                  <img
                    className="m-auto"
                    width={32}
                    height={32}
                    alt={app.name}
                    src={app.icon}
                  />
                </div>
                {hoveredIndex === app.id && (
                  <div
                    className="absolute -top-24 left-1/2 transform -translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                    style={{
                      transform: `rotate(${-index * 45}deg)`, // Apply counter-rotation
                    }}
                  >
                    <div className="font-bold text-white text-base">
                      {app.name}
                    </div>
                    <div className="text-white text-xs">{app.designation}</div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <LeftCurve />
          <RightCurve />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
