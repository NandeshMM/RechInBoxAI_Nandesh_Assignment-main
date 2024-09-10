import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function TopBar() {
  // Determine if the dark mode class should be applied
  const isDarkMode = document.body.classList.contains('dark');

  return (
    <div className={`w-screen fixed top-0 h-16 px-14 flex items-center justify-between ${isDarkMode ? 'bg-gray-900 text-white border-b border-gray-800' : 'bg-white text-gray-600 border-b border-gray-300'}`}>
      <div className="text-2xl">Onebox</div>

      <div className="flex items-center pr-10">
        <ThemeToggle />
        <span className="mr-3">Tim's Workspace</span>
        <MdOutlineKeyboardArrowDown className="text-3xl ml-3" />
      </div>
    </div>
  );
}

export default TopBar;
