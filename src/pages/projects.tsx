import { Quicksand } from 'next/font/google'
import ProjectCard from '@/components/ProjectCard'

// TODO: Choose font(s) for ProjectCard
const quicksand = Quicksand({ subsets: ['latin'] })

const Projects = () => {
    return (
        <main className="flex flex-col min-h-screen items-center justify-between p-24 bg-white dark:bg-black">
            <ProjectCard
                title="Git Duet"
                description="Implemented the 'ALLOW_MULTIPLE_COMMITTERS' Feature"
                date="Nov 2022"
                flipDescriptionLinks={{ repository: 'https://github.com/git-duet/git-duet', feature: 'https://github.com/git-duet/git-duet/pull/118' }}
                flipDescription={["Inspiration: blah blah blah", "Additional comments: blah blah blah"]}
                imgSrc="/git-duet.png"
                imgAlt="git-duet" />
        </main>
    )
}

export default Projects;