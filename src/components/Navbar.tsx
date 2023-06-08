import Link from 'next/link';
import { useRouter } from 'next/router'
import { Mogra } from 'next/font/google'
import ThemeButton from './ThemeButton';
// TODO: Choose 1 - Kalam, Mogra, VT323, Chewy

const mogra = Mogra({ subsets: ['latin'], weight: "400" })

const Navbar = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <nav className="bg-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <span className={`self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white ${mogra.className}`}>Li Ying KWA</span>
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-row space-x-8">
                        {[
                            ['Home', '/'],
                            ['Experience', '/experience'],
                            ['Projects', '/projects'],
                            ['Resources', '/resources'],
                        ].map(([title, url], index) => (
                            <li key={index}>
                                <Link
                                    href={url}
                                    className={currentRoute === url ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <ThemeButton />
            </div>
        </nav>
    );
}

export default Navbar;