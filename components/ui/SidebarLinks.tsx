import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaFileAlt,
  FaWhatsapp,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1, // Stagger children to make them appear in sequence
      delayChildren: 0.3, // Delay the start of children animation
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // Reverse the order of disappearance
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2, // Make sure this happens faster than the sidebar background
    },
  },
};

const SidebarLinks: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const items = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/guillermo-alfaro/",
      newTab: true,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/galfarotolon",
      newTab: true,
    },
    {
      name: "CV",
      icon: <FaFileAlt />,
      link: "https://docs.google.com/document/d/1-R_XISy7JytR3cvx5UzjpyIBqgfrIaYvtu5fM3t1dMg/edit?usp=sharing",
      newTab: true,
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/51943488800",
      newTab: true,
    },
    {
      name: "Phone",
      icon: <FaPhone />,
      link: "tel:+51943488800",
      newTab: false, // Phone link should not open in a new tab
    },
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
          className="flex items-center space-x-2 text-md py-2 px-4 rounded-md hover:scale-105 transition-transform"
          target={item.newTab ? "_blank" : undefined}
          rel={item.newTab ? "noopener noreferrer" : undefined}
        >
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SidebarLinks;
