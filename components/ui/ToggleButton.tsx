import { FaAddressBook, FaTimes } from "react-icons/fa";

const ToggleButton: React.FC<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className="fixed top-10 left-10 flex items-center justify-center cursor-pointer z-[6000] bg-gray-800 text-white px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 rounded-full hover:bg-gray-700 transition-colors"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <FaTimes className="text-white" />
      ) : (
        <>
          <FaAddressBook className="text-white mr-2" />
          <span className="text-xs sm:text-sm md:text-base">Contact Info</span>
        </>
      )}
    </div>
  );
};

export default ToggleButton;
