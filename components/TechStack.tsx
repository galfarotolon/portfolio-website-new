import { LeftCurve, RightCurve } from "./ui/Curves"; // Update to match your file structure
import MagicButton from "./ui/MagicButton";

const collabApps = [
  {
    id: 1,
    title: "Tailwind CSS",
    icon: "/tail.svg",
  },
  {
    id: 2,
    title: "TypeScript",
    icon: "/ts.svg",
  },
  {
    id: 3,
    title: "Sanity.io",
    icon: "/sanity.svg",
  },
  {
    id: 4,
    title: "Node.js",
    icon: "/nodejs.svg",
  },
  {
    id: 5,
    title: "Clerk",
    icon: "c.svg",
  },
  {
    id: 6,
    title: "MongoDB",
    icon: "/mongodb.svg",
  },
  {
    id: 7,
    title: "Framer Motion",
    icon: "/fm.svg",
  },

  {
    id: 8,
    title: "React",
    icon: "/re.svg",
  },
];

const TechStack = () => {
  return (
    <div className="container lg:flex my-20">
      <div className="max-w-[25rem]">
        <h2 className="text-left text-[40px] md:text-3xl lg:text-4xl font-bold my-4 ">
          My <span className="text-red-400">Tech Stack</span>
        </h2>

        <ul className="max-w-[22rem] mb-10 md:mb-14">
          {/* Customize these points to your strengths */}
          <li className="mb-3 py-3">
            <div className="flex items-center">
              <img src={"/check.svg"} width={24} height={24} alt="check" />
              <h6 className="body-2 ml-5">High Performance</h6>
            </div>
            <p className="text-white-100 mt-2 text-sm pl-10">
              Optimized for speed and scalability.
            </p>
          </li>
          <li className="mb-3 py-3">
            <div className="flex items-center">
              <img src={"/check.svg"} width={24} height={24} alt="check" />
              <h6 className="body-2 ml-5">Modern Design</h6>
            </div>
            <p className="text-white-100 mt-2 text-sm pl-10">
              Beautiful, responsive, and user-friendly interfaces.
            </p>
          </li>
          <li className="mb-3 py-3">
            <div className="flex items-center">
              <img src={"/check.svg"} width={24} height={24} alt="check" />
              <h6 className="body-2 ml-5">Developer Efficiency</h6>
            </div>
            <p className="text-white-100 mt-2 text-sm pl-10">
              Quick development cycles with TypeScript and modern frameworks.
            </p>
          </li>
        </ul>

        <MagicButton title="Explore My Work" position="left" />
      </div>

      <div className="lg:ml-auto xl:w-[38rem] mt-4">
        <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
          <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
              <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                <img
                  src={"/next.svg"} // Central icon for your main technology
                  width={48}
                  height={48}
                  alt="Next.js"
                />
              </div>
            </div>
          </div>

          <ul>
            {collabApps.map((app, index) => (
              <li
                key={app.id}
                className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                  index * 45
                }`}
              >
                <div
                  className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                    index * 45
                  }`}
                >
                  <img
                    className="m-auto"
                    width={32}
                    height={32}
                    alt={app.title}
                    src={app.icon}
                  />
                </div>
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
