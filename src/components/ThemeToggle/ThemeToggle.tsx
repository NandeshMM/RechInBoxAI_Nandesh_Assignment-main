import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import './ThemeToggle.css';
import theme from "../Images/light_mode.png"

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className={`theme-toggle ${darkMode ? 'dark-theme-toggle' : ''}`}>
            <button
                className={`theme-toggle-button ${darkMode ? 'dark-theme-toggle-button' : ''}`}
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? (
                    <img className="theme-toggle-icon dark-theme-toggle-icon" src={theme} alt="" />
                ) : (
                    <FaMoon className="theme-toggle-icon" />
                )}
            </button>
        </div>
    );
}

export default ThemeToggle;
