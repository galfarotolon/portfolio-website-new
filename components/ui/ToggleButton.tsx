import { motion } from "framer-motion";
import { FaAddressBook, FaTimes } from "react-icons/fa";

const ToggleButton = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setOpen(!isOpen);
      }}
      className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full"
    >
      {isOpen ? (
        <FaTimes size={24} color="white" />
      ) : (
        <FaAddressBook size={24} color="white" />
      )}
    </button>
  );
};

export default ToggleButton;
