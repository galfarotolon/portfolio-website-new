import { motion } from "framer-motion";
import { FaLinkedin, FaFileAlt, FaWhatsapp, FaPhone } from "react-icons/fa";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.001,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 0,
    opacity: 0,
  },
};

const SidebarLinks: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const items = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/guillermo-alfaro",
    },
    { name: "CV", icon: <FaFileAlt />, link: "#" },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/yourphonenumber",
    },
    { name: "Phone", icon: <FaPhone />, link: "tel:+51943488800" },
  ];

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full"
      variants={variants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      {items.map((item) => (
        <motion.a
          href={item.link}
          key={item.name}
          variants={itemVariants}
          className="flex items-center space-x-2 text-xl py-2 px-4 rounded-md hover:scale-105 transition-transform"
        >
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SidebarLinks;
