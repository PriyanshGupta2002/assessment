import { FaFilter } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
const TopBar = () => {
  return (
    <div className="flex items-center justify-between p-4 dark:text-white">
      <HiMenuAlt2 className="w-5 h-5" />

      <FaFilter className="w-5 h-5" />
    </div>
  );
};

export default TopBar;
