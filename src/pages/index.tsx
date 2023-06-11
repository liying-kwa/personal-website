import Image from 'next/image'
import Profile from '@/public/profile.jpg'
import { Quicksand, Permanent_Marker } from 'next/font/google'
import SkillsShield from '@/components/SkillsShield'
// import VaraText from "@/components/VaraText"
import { useTheme } from "next-themes"
import colors from 'tailwindcss/colors'
import { BsArrowDownShort } from 'react-icons/bs';

const quicksand = Quicksand({ subsets: ['latin'] })
const permanentMarker = Permanent_Marker({ subsets: ['latin'], weight: "400" })

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="flex flex-col min-h-screen justify-between p-24 bg-gray-100 dark:bg-black">
      <div className="flex flex-row h-fit w-full items-center justify-evenly">
        <div className="flex flex-col w-6/12">
          <div className={`${permanentMarker.className} text-5xl py-6 text-black dark:text-white`}>
            Hi, I{"'"}m Li Ying
          </div>
          {/* <div className="w-full items-center">
            <VaraText text="Hi, I'm Li Ying" theme={theme!} />
          </div> */}
          <div className={`${quicksand.className} text-xl py-6 text-black dark:text-white w-full`}>
            A full-stack software engineer with a passion for building products. I aim to solve problems by designing simple solutions that are to-the-point. I graduated with a Computer Science degree and am currently based in Singapore.
          </div>
          <div className="flex flex-col items-center mt-12">
            <BsArrowDownShort
              className="w-12 h-12 rounded-full bg-white dark:bg-blue-600 drop-shadow-xl animate-bounce" color={theme === "dark" ? "white" : colors.blue[600]}
              onClick={() => { window.scroll({ top: 1000, behavior: "smooth" }) }}
            />
          </div>
        </div>
        {/* Fix justify-self-center? */}
        <div className="w-1/3 hover:animate-pulse">
          <Image
            style={{ borderRadius: '50%', overflow: 'hidden' }}
            src={Profile}
            width={960}
            height={960}
            alt="profile picture"
          />
        </div>
      </div>
      <div className={`${quicksand.className} p-24`}>
        <h2 className="text-3xl font-semibold text-black dark:text-white">Skills</h2>
        <p className="py-6">Left = more proficient; Right = less proficient</p>
        {/* <h3 className="py-6 text-xl font-semibold text-black dark:text-white">From left to right - most proficient to least proficient:</h3> */}
        <div className="flex flex-col gap-2 text-lg text-black dark:text-white font-semibold">
          <p>Languages</p>
          <div className="flex flex-wrap gap-2">
            <SkillsShield imgAlt='Java' text={'java'} logo={'intellijidea'} backgroundColor='indigo' />
            <SkillsShield imgAlt='TypeScript' text={'typescript'} logo={'typescript'} backgroundColor='blue' />
            <SkillsShield imgAlt='JavaScript' text={'javascript'} logo={'javascript'} backgroundColor='black' logoColor='yellow' />
            <SkillsShield imgAlt='Python' text={'python'} logo={'python'} backgroundColor={colors.yellow[300].slice(1)} logoColor={colors.sky[800].slice(1)} />
            <SkillsShield imgAlt='Go' text={'go'} logo={'go'} backgroundColor={colors.cyan[400].slice(1)} />
            <SkillsShield imgAlt='Bash' text={'bash'} logo={'gnubash'} backgroundColor='black' />
            <SkillsShield imgAlt='C#' text={'c%23'} logo={'csharp'} backgroundColor='purple' />
          </div>
          <p>Frameworks/libraries</p>
          <div className="flex flex-wrap gap-2">
            <SkillsShield imgAlt='SpringBoot' text={'springboot'} logo={'springboot'} backgroundColor='lightgray' logoColor='green' />
            <SkillsShield imgAlt='React' text={'react'} logo={'react'} backgroundColor="gray" logoColor={colors.cyan[300].slice(1)} />
            <SkillsShield imgAlt='NextJS' text={'nextjs'} logo={'nextdotjs'} backgroundColor={colors.gray[200].slice(1)} logoColor='black' />
            <SkillsShield imgAlt='TailwindCSS' text={'tailwindcss'} logo={'tailwindcss'} backgroundColor={colors.gray[400].slice(1)} logoColor={colors.sky[400].slice(1)} />
            <SkillsShield imgAlt='JUnit' text={'junit'} logo={'junit5'} backgroundColor={colors.red[500].slice(1)} logoColor='green' />
            <SkillsShield imgAlt='Mockito' text={'mockito'} logo={'intellijidea'} backgroundColor='blueviolet' />
            <SkillsShield imgAlt='Jest' text={'jest'} logo={'jest'} backgroundColor={colors.rose[900].slice(1)} />
            <SkillsShield imgAlt='React Testing Library' text={'react_testing_library'} logo={'testinglibrary'} backgroundColor={colors.gray[200].slice(1)} logoColor='red' />
            <SkillsShield imgAlt='MongoDB' text={'mongodb'} logo={'mongodb'} backgroundColor={colors.gray[800].slice(1)} logoColor='brightgreen' />
            <SkillsShield imgAlt='MySQL' text={'mysql'} logo={'mysql'} backgroundColor='orange' logoColor='blue' />
            <SkillsShield imgAlt='PostgreSQL' text={'postgresql'} logo={'postgresql'} backgroundColor={colors.sky[800].slice(1)} />
          </div>
          <p>Other tools</p>
          <div className="flex flex-wrap gap-2">
            <SkillsShield imgAlt='AWS' text={'aws'} logo={'amazon-aws'} backgroundColor={colors.amber[500].slice(1)} />
            <SkillsShield imgAlt='Linux' text={'linux'} logo={'linux'} backgroundColor='lightblue' logoColor='black' />
            <SkillsShield imgAlt='GitLab' text={'gitlab'} logo={'gitlab'} backgroundColor='gray' logoColor='amber' />
            <SkillsShield imgAlt='Unity' text={'unity'} logo={'unity'} backgroundColor='black' />
            <SkillsShield imgAlt='Android Studio' text={'android_studio'} logo={'android'} backgroundColor='green' />
          </div>
        </div>
      </div>
    </main>
  )
}
