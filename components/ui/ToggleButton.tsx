import { FaAddressBook, FaTimes } from "react-icons/fa";

const ToggleButton: React.FC<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className="fixed top-10 left-10 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer z-[6000]"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <FaTimes className="text-white" />
      ) : (
        <FaAddressBook className="text-white" />
      )}
    </div>
  );
};

export default ToggleButton;
