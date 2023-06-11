import React, { useState } from 'react'
import { useTheme } from "next-themes"
import Image from 'next/image';

const ThemeButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(true);
    };
    const onLeave = () => {
        setHover(false);
    };

    return (
        <div className="relative">
            <button
                className="rounded-lg bg-gray-300 dark:bg-gray-900 border-gray-400 md:hover:bg-gray-600 md:dark:hover:bg-gray-300 transition-all duration-200 px-2 pb-3 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                onClick={() => currentTheme === "light" ? setTheme("dark") : setTheme("light")}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}>
                <Image
                    src="/moon.svg"
                    alt="Moon Logo"
                    className="mx-2 mt-4 mb-1 dark:invert block dark:hidden"
                    width={22}
                    height={22}
                />
                <Image
                    src="/sun.svg"
                    alt="Sun Logo"
                    className="mx-1 mt-3 dark:invert hidden dark:block"
                    width={28}
                    height={28}
                />
            </button>
            {hover && currentTheme === "light" && <div className="absolute my-4 -left-3 px-2 rounded bg-gray-200 whitespace-nowrap text-black text-xs">Dark Mode</div>}
            {hover && currentTheme === "dark" && <div className="absolute my-4 -left-4 px-2 rounded bg-gray-700 whitespace-nowrap text-white text-xs">Light Mode</div>}
        </div>
    )
}

export default ThemeButton