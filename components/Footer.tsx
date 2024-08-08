import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 md:mb-10 sm:px-10 px-5 max-w-7xl mx-auto relative"
      id="contact"
    >
      {/* background grid */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 object-cover"
        />
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Guillermo Alfaro
        </p>

        <div className="flex items-center mt-3 sm:mt-0 md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
