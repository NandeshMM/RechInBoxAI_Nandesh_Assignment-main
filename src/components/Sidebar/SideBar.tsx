import { useState } from "react";
import sidebar_logo from '../../assets/sidebar-logo.png';
import home_icon from '../../assets/home_icon.png';
import search_icon from '../../assets/contact_icon.png';
import mail_icon from '../../assets/mail_icon.png';
import send_icon from '../../assets/send_icon.png';
import stack_icon from '../../assets/menu_icon.png'; 
import inbox_icon from '../../assets/inbox_icon.png';
import stats_icon from '../../assets/analytics_icon.png';

type SideBarProps = {
  onMenuItemClick: (path: string) => void;
};

function SideBar({ onMenuItemClick }: SideBarProps) {
  const [selectedItem, setSelectedItem] = useState('/');

  const handleMenuItemClick = (path: string) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  const isDarkMode = document.body.classList.contains('dark');

  return (
    <div className={`flex flex-col items-center justify-between h-screen w-14 p-2 fixed top-0 left-0 border-r-2 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} overflow-y-auto z-10`}>
      <div className="flex flex-col items-center gap-4 mt-[-5px] mb-7">
        <img src={sidebar_logo} alt="Logo" className="h-12 object-left" />
      </div>
      <div className="flex flex-col items-center gap-5 text-gray-400 text-lg">
        {[
          { path: '/', icon: home_icon },
          { path: '/search', icon: search_icon },
          { path: '/mail', icon: mail_icon },
          { path: '/send', icon: send_icon },
          { path: '/stack', icon: stack_icon },
          { path: '/inbox', icon: inbox_icon },
          { path: '/stacks', icon: stats_icon }
        ].map(({ path, icon }) => (
          <div
            key={path}
            className={`flex items-center justify-center p-1 cursor-pointer ${selectedItem === path ? 'transform scale-110 rounded-lg bg-gray-200 dark:bg-gray-800 transition-transform duration-300 ease-in-out' : ''}`}
            onClick={() => handleMenuItemClick(path)}
          >
            <img src={icon} alt="" className="w-6 h-6" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full">
        PS
      </div>
    </div>
  );
}

export default SideBar;
