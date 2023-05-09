import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'] })

const Projects = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="font-mono">Projects</div>
            <div className={`${quicksand.className}`}>Projects</div>
            <div>Projects</div>
        </main>
    )
}

export default Projects;