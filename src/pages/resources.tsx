import { Permanent_Marker, Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'] })
const permanentMarker = Permanent_Marker({ subsets: ['latin'], weight: "400" })

const Resources = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-black text-black dark:text-white">
            <h2 className={`${permanentMarker.className} text-2xl`}>This feature is not ready yet. Stay tuned~</h2>
        </main>
    )
}

export default Resources;