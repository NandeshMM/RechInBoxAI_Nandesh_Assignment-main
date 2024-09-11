import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeToggle from "../Switch_Theme_Button/Switch_Theme_Button.js";
import './Nav_Bar.css';

function TopBar() {
  return (
    <div className={`topbar ${document.body.classList.contains('dark') ? 'dark' : ''}`}>
      <div>Onebox</div>

      <div className="topbar-right">
        <ThemeToggle />
        Tim's Workspace <MdOutlineKeyboardArrowDown className="topbar-icon" />
      </div>
    </div>
  );
}

export default TopBar;
