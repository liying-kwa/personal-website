import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'] })

const Experience = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="font-mono">Experience</div>
            <div className={`${quicksand.className}`}>Experience</div>
            <div>Experience</div>
        </main>
    )
}

export default Experience;