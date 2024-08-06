import { motion } from "framer-motion";
import { FaLinkedin, FaFileAlt, FaWhatsapp, FaPhone } from "react-icons/fa";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
    },
  },
};

const SidebarLinks: React.FC = () => {
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
      animate="open"
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
