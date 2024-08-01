"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./ui/GoogleGeminiEffect";

export const TechStack = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.5], [0, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.5], [0, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.5], [0, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.5], [0, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.5], [0, 1.2]);

  const frontendIconPosition = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      className="h-[300vh] w-full  rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <div className="sticky top-0 h-screen">
        <GoogleGeminiEffect
          title=""
          description="Contact me to make your next idea a reality."
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
        {/* <motion.div
          style={{
            translateX: frontendIconPosition,
            translateY: "-50%",
            position: "sticky",
          }}
          className="absolute top-[50%] left-[10%]"
        >
          <img src="/fm.svg " />
        </motion.div> */}
      </div>
    </div>
  );
};
