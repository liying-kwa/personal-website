import Link from 'next/link';
import { useRouter } from 'next/router'
import { Mogra, Quicksand } from 'next/font/google'
import { useCollapse } from 'react-collapsed';
import ThemeButton from './ThemeButton';
import { AiOutlineMenu } from 'react-icons/ai';
// TODO: Choose 1 - Kalam, Mogra, VT323, Chewy

const mogra = Mogra({ subsets: ['latin'], weight: "400" })
const quicksand = Quicksand({ subsets: ['latin'] })
const navItems = [
    ['Home', '/'],
    ['Experience', '/experience'],
    ['Projects', '/projects'],
    ['Resources', '/resources'],
]

const Navbar = () => {
    const router = useRouter();
    const currentRoute = router.pathname;
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <nav className="bg-gray-100 dark:bg-gray-900">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 md:px-24 py-2 md:py-4">
                {/* Mobile menu button */}
                <div className="block md:hidden">
                    <button
                        type="button"
                        className={`inline-flex items-center p-3 text-sm rounded-lg ${isExpanded ? "text-white dark:text-black bg-blue-700 dark:bg-blue-300" : "text-black dark:text-white bg-gray-100 dark:bg-gray-900"}`}
                        {...getToggleProps()} >
                        <AiOutlineMenu className='h-6 w-6' />
                    </button>
                </div>
                <Link href="/" className="flex items-center">
                    <span className={`self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white ${mogra.className}`}>Li Ying KWA</span>
                </Link>
                <div className="hidden md:block w-full md:w-auto" id="navbar-default">
                    <ul className={`flex flex-row space-x-8 ${quicksand.className} font-medium font-semibold`}>
                        {navItems.map(([title, url], index) => (
                            <li key={index}>
                                <Link
                                    href={url}
                                    className={currentRoute === url ? "text-blue-700 dark:text-blue-500" : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <ThemeButton />
            </div>
            <div className={"w-full block md:hidden"} {...getCollapseProps()}>
                <ul className={`flex flex-col rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 ${quicksand.className} font-medium font-semibold`}>
                    {navItems.map(([title, url], index) => (
                        <li key={index}>
                            <Link
                                href={url}
                                className={currentRoute === url ? "block py-2 pl-3 pr-4 rounded text-white dark:text-black bg-blue-700 dark:bg-blue-300" : "block py-2 pl-3 pr-4 rounded text-gray-900 dark:text-gray-400"}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;