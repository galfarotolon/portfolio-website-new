"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, useInView } from "framer-motion";
import { experiences } from "../data/index";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "./hoc";
import "react-vertical-timeline-component/style.min.css";

type ExperienceProps = {
  experience: {
    date: string;
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    points: string[];
  };
  position: string;
};

const ExperienceCard: React.FC<ExperienceProps> = ({
  experience,
  position,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-20"
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
    >
      <VerticalTimelineElement
        className="max-w-[90%] sm:max-w-[80%] lg:max-w-[100%]"
        contentStyle={{ background: "#1d1836", color: "#fff" }}
        contentArrowStyle={{
          borderRight: "7px solid  #232631",
        }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        position={position}
        icon={
          <div className="flex justify-center items-center w-full h-full ">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[80%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[20px] sm:text-[24px] font-bold">
            {experience.title}
          </h3>
          <p
            className="text-white-100 text-[14px] sm:text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[12px] sm:text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <>
      <section id="experience" className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center text-4xl font-bold mb-4 px-4 sm:px-0">
            My <span className="text-violet-500">Experience</span>
          </h2>
        </motion.div>
        <motion.div
          className="text-white-100 py-4 sm:px-20 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          In 2020, I switched careers by completing a full stack web development
          bootcamp. Now, with over 3 years of experience, I have worked in
          startups and undertaken freelance projects. My goal is to become a
          full stack web developer who can create exceptional web experiences
          while staying updated with the latest technologies.
        </motion.div>

        <div className="pl-4 sm:pl-0 mt-20 flex flex-col">
          <VerticalTimeline animate={false}>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
                position={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Experience, "work");
