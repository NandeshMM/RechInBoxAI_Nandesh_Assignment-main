import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

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
        <div className={`mr-10 ${darkMode ? 'dark:mr-10' : ''}`}>
            <button
                className={`bg-gray-200 text-gray-800 px-3 py-2 rounded-md flex items-center ${darkMode ? 'dark:bg-gray-200 dark:text-gray-800 dark:px-3 dark:py-2 rounded-md flex items-center' : ''}`}
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? (
                    <FaSun className="mr-2 dark:mr-2" />
                ) : (
                    <FaMoon className="mr-2" />
                )}
            </button>
        </div>
    );
}

export default ThemeToggle;
