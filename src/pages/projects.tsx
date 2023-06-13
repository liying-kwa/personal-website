import { Quicksand } from 'next/font/google'
import ProjectCard from '@/components/ProjectCard'
import { useTheme } from 'next-themes';
import SkillsShield from '@/components/SkillsShield';
import colors from 'tailwindcss/colors';
import { TbExternalLink } from 'react-icons/tb'
import Link from 'next/link';

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
                    imgSrc={theme === "dark" ? "/website.jpg" : "website-dark.jpg"}
                    imgAlt="website"
                    date="May ~ Jun 2023"
                    status={'maintenance'}
                    flipDescriptionLinks={{ repository: 'https://github.com/liying-kwa/personal-website' }}
                    flipDescription={
                        <>
                            <p>Tech stack:</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                                <SkillsShield className="h-5" style='plastic' imgAlt='NextJS' text={'nextjs'} logo={'nextdotjs'} backgroundColor={colors.gray[200].slice(1)} logoColor='black' />
                                <SkillsShield className="h-5" style='plastic' imgAlt='TailwindCSS' text={'tailwindcss'} logo={'tailwindcss'} backgroundColor={colors.gray[400].slice(1)} logoColor={colors.sky[400].slice(1)} />
                                <SkillsShield className="h-5" style='plastic' imgAlt='React' text={'react'} logo={'react'} backgroundColor="gray" logoColor={colors.cyan[300].slice(1)} />
                                <SkillsShield className="h-5" style='plastic' imgAlt='TypeScript' text={'typescript'} logo={'typescript'} backgroundColor='blue' />
                            </div>
                        </>
                    }
                />
            </div>
            <h2 className="px-10 md:px-0 py-8 md:py-12 text-2xl md:text-3xl font-semibold text-black dark:text-white">Open Source Contributions</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-y-12 md:gap-x-24">
                <ProjectCard
                    title="Git Duet"
                    description="Implemented the 'allow multiple committers' feature"
                    imgSrc="/git-duet.png"
                    imgAlt="git-duet"
                    date="Nov 2022"
                    status={'completed'}
                    flipDescriptionLinks={{ repository: 'https://github.com/git-duet/git-duet', feature: 'https://github.com/git-duet/git-duet/pull/118' }}
                    flipDescription={
                        <>
                            <p>Tech stack:</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                                <SkillsShield className="h-5" style='plastic' imgAlt='Go' text={'go'} logo={'go'} backgroundColor={colors.cyan[400].slice(1)} />
                                <SkillsShield className="h-5" style='plastic' imgAlt='Bash' text={'bash'} logo={'gnubash'} backgroundColor='black' />
                            </div>
                        </>
                    }
                />
            </div>
            <h2 className="px-10 md:px-0 py-8 md:py-12 text-2xl md:text-3xl font-semibold text-black dark:text-white">School (Group) Projects</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-y-12 md:gap-x-24">
                <ProjectCard
                    title="This Spells Trouble!"
                    description="A 2D battle arena local multiplayer game for 2-4 players"
                    imgSrc="/this-spells-trouble.jpeg"
                    imgAlt="this-spells-trouble"
                    date="Jul ~ Aug 2021"
                    status={'completed'}
                    flipDescriptionLinks={{ repository: 'https://github.com/liying-kwa/This-Spells-Trouble', demo: 'https://drive.google.com/file/d/1bt_a55s7HWKYjCAbH8ucRwUCT4t8kJ13/view?usp=sharing' }}
                    flipDescription={
                        <>
                            <p>Tech stack:</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                                <SkillsShield className="h-5" style='plastic' imgAlt='Unity' text={'unity'} logo={'unity'} backgroundColor='black' />
                                <SkillsShield className="h-5" style='plastic' imgAlt='C#' text={'c%23'} logo={'csharp'} backgroundColor='purple' />
                            </div>
                        </>
                    }
                />
                <ProjectCard
                    title="TinyCare"
                    description="An automated food dispenser machine for tiny pets, such as hamsters and fishes"
                    imgSrc="/tinycare.jpg"
                    imgAlt="tinycare"
                    date="Nov 2019 ~ Mar 2020"
                    status={'completed'}
                    flipDescriptionLinks={{ repository: 'https://github.com/liying-kwa/TinyCare', demo: 'https://www.youtube.com/watch?v=kdCNISgoIZ4&feature=youtu.be' }}
                    flipDescription={
                        <>
                            <p>Note: HamsterCare{<Link className="text-blue-600 hover:text-blue-500 inline-block" href='https://github.com/liying-kwa/HamsterCare' target="_blank">
                                <TbExternalLink />
                            </Link>} was the prototype project of TinyCare.</p>
                            <p>Tech stack:</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                                <SkillsShield className="h-5" style='plastic' imgAlt='Android Studio' text={'android_studio'} logo={'android'} backgroundColor='green' />
                                <SkillsShield className="h-5" style='plastic' imgAlt='Java' text={'java'} logo={'intellijidea'} backgroundColor='indigo' />
                                <SkillsShield className="h-5" style='plastic' imgAlt='Python' text={'python'} logo={'python'} backgroundColor={colors.yellow[300].slice(1)} logoColor={colors.sky[800].slice(1)} />
                            </div>

                        </>
                    }
                />
            </div>
        </main>
    )
}

export default Projects;