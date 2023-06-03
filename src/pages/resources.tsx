import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'] })

const Resources = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-black text-black dark:text-white">
            <div className="font-mono">Resources</div>
            <div className={`${quicksand.className}`}>Resources</div>
            <div>Resources</div>
        </main>
    )
}

export default Resources;