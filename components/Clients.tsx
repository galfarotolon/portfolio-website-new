"use client";

import React, { useState } from "react";
import { testimonials } from "@/data";
import { InfiniteCards } from "./ui/InfiniteCards";
import { FaFastForward, FaFastBackward } from "react-icons/fa";

const Clients = () => {
  const [speed, setSpeed] = useState<"fast" | "normal" | "slow">("normal");

  const cycleSpeed = (direction: "faster" | "slower") => {
    setSpeed((prevSpeed) => {
      switch (prevSpeed) {
        case "slow":
          return direction === "faster" ? "normal" : "slow";
        case "normal":
          return direction === "faster" ? "fast" : "slow";
        case "fast":
          return direction === "faster" ? "fast" : "normal";
        default:
          return "normal";
      }
    });
  };

  return (
    <section id="testimonials" className="py-20">
      <h2 className="text-center text-4xl font-bold">
        Kind words from{" "}
        <span className="text-green-500">satisfied clients</span>
      </h2>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteCards items={testimonials} direction="right" speed={speed} />
        </div>
        <div className="mt-4 flex gap-4">
          <button
            onClick={() => cycleSpeed("slower")}
            className="p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Slow Down"
          >
            <FaFastBackward className="text-xl" />
          </button>
          <button
            onClick={() => cycleSpeed("faster")}
            className="p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Speed Up"
          >
            <FaFastForward className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;

{
  /* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div> */
}
