import { Quicksand } from 'next/font/google'
import ProjectCard from '@/components/ProjectCard'
import { useTheme } from 'next-themes';

// TODO: Choose font(s)
const quicksand = Quicksand({ subsets: ['latin'] })

// TODO: Choose pics for each project
const Projects = () => {
    const { theme } = useTheme();

    return (
        <main className={`${quicksand.className} flex flex-col min-h-screen items-start md:px-36 pb-12 bg-gray-100 dark:bg-black`}>
            <h2 className="px-10 md:px-0 py-8 md:py-12 text-2xl md:text-3xl font-semibold text-black dark:text-white">Personal Projects</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-y-12 md:gap-x-24">
                <ProjectCard
                    title="This Website"
                    description="A personal website that I created because I was bored"
                    date="May to Jun 2023"
                    flipDescriptionLinks={{ repository: 'https://github.com/liying-kwa/personal-website' }}
                    flipDescription={["Language(s) & frameworks(s): NextJS, React/TypeScript, TailwindCSS"]}
                    imgSrc={theme === "dark" ? "/website.jpg" : "website-dark.jpg"}
                    imgAlt="website" />
            </div>
            <h2 className="px-10 md:px-0 py-8 md:py-12 text-2xl md:text-3xl font-semibold text-black dark:text-white">Open Source Contributions</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-y-12 md:gap-x-24">
                <ProjectCard
                    title="Git Duet"
                    description="Implemented the 'allow multiple committers' feature"
                    date="Nov 2022"
                    flipDescriptionLinks={{ repository: 'https://github.com/git-duet/git-duet', feature: 'https://github.com/git-duet/git-duet/pull/118' }}
                    flipDescription={["Language(s) & frameworks(s): Go, Bash"]}
                    imgSrc="/git-duet.png"
                    imgAlt="git-duet" />
            </div>
            <h2 className="px-10 md:px-0 py-8 md:py-12 text-2xl md:text-3xl font-semibold text-black dark:text-white">School (Group) Projects</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-y-12 md:gap-x-24">
                <ProjectCard
                    title="This Spells Trouble!"
                    description="A 2D battle arena local multiplayer game for 2-4 players"
                    date="Jul to Aug 2021"
                    flipDescriptionLinks={{ repository: 'https://github.com/liying-kwa/This-Spells-Trouble', demo: 'https://drive.google.com/file/d/1bt_a55s7HWKYjCAbH8ucRwUCT4t8kJ13/view?usp=sharing' }}
                    flipDescription={["Language(s) & framework(s): Unity, C#", "Inspiration: blah blah blah"]}
                    imgSrc="/this-spells-trouble.jpeg"
                    imgAlt="this-spells-trouble" />
                <ProjectCard
                    title="TinyCare"
                    description="An automated food dispenser machine for tiny pets, such as hamsters and fishes"
                    date="Nov 2019 to Mar 2020"
                    flipDescriptionLinks={{ repository: 'https://github.com/liying-kwa/TinyCare', demo: 'https://www.youtube.com/watch?v=kdCNISgoIZ4&feature=youtu.be' }}
                    flipDescription={["Language(s) & framework(s): Android Studio, Java, Python", "HamsterCare: https://github.com/liying-kwa/HamsterCare"]}
                    imgSrc="/tinycare.jpg"
                    imgAlt="tinycare" />
            </div>
        </main>
    )
}

export default Projects;