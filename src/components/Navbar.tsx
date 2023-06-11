import Link from 'next/link';
import { useRouter } from 'next/router'
import { Mogra, Quicksand } from 'next/font/google'
import { useCollapse } from 'react-collapsed';
import ThemeButton from './ThemeButton';
import { AiOutlineMenu } from 'react-icons/ai';
// TODO: Choose 1 - Kalam, Mogra, VT323, Chewy

const mogra = Mogra({ subsets: ['latin'], weight: "400" })
const quicksand = Quicksand({ subsets: ['latin'] })

const Navbar = () => {
    const router = useRouter();
    const currentRoute = router.pathname;
    const { getCollapseProps, getToggleProps, setExpanded } = useCollapse();

    return (
        <nav className="bg-gray-300 dark:bg-gray-900">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="block md:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 dark:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                        {...getToggleProps()} >
                        <AiOutlineMenu className='h-6 w-6' />
                    </button>

                </div>
                <Link href="/" className="flex items-center">
                    <span className={`self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white ${mogra.className}`}>Li Ying KWA</span>
                </Link>
                <div className="hidden md:block w-full md:w-auto" id="navbar-default">
                    <ul className={`flex flex-row space-x-8 ${quicksand.className} font-medium font-semibold`}>
                        {[
                            ['Home', '/'],
                            ['Experience', '/experience'],
                            ['Projects', '/projects'],
                            ['Resources', '/resources'],
                        ].map(([title, url], index) => (
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
            <div className="w-full" {...getCollapseProps()}>
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    {[
                        ['Home', '/'],
                        ['Experience', '/experience'],
                        ['Projects', '/projects'],
                        ['Resources', '/resources'],
                    ].map(([title, url], index) => (
                        <li key={index}>
                            <Link
                                href={url}
                                // onClick={() => setExpanded(false)}
                                className={currentRoute === url ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>
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