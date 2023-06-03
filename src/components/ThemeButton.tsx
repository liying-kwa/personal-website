import React from 'react'
import { useTheme } from "next-themes"
import Image from 'next/image';

const ThemeButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div className='rounded-lg bg-gray-200 dark:bg-gray-900 border-gray-400 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 dark:text-gray-800 p-2'>
            <button onClick={() => currentTheme == "dark" ? setTheme('light') : setTheme("dark")}>
                {theme === 'dark' ?
                    <Image
                        src="/moon.svg"
                        alt="Moon Logo"
                        className="px-1 pt-1 dark:invert"
                        width={32}
                        height={32}
                    />
                    : <Image
                        src="/sun.svg"
                        alt="Sun Logo"
                        className="px-1 pt-1 dark:invert"
                        width={36}
                        height={36}
                    />}
            </button>
        </div>
    )
}

export default ThemeButton