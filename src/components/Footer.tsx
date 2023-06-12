import Link from 'next/link';
import { GrMail } from 'react-icons/gr';
import { SiGithub, SiLinkedin } from 'react-icons/si';


const Footer = () => {
    return (
        <footer className="bg-gray-200 dark:bg-gray-700">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="px-4 py-6 flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 Li Ying
                    </span>
                    <div className="flex space-x-6">
                        <Link href="https://www.linkedin.com/in/liying-kwa/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <SiLinkedin />
                        </Link>
                        <Link href="https://github.com/liying-kwa" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <SiGithub />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;