import Image from 'next/image'
import Profile from '@/public/profile.jpg'
import { Quicksand, Permanent_Marker } from 'next/font/google'
// import VaraText from "@/components/VaraText"
// import { useTheme } from "next-themes"

const quicksand = Quicksand({ subsets: ['latin'] })
const permanentMarker = Permanent_Marker({ subsets: ['latin'], weight: "400" })

export default function Home() {
  // const { theme, setTheme } = useTheme();

  return (
    <main className="flex flex-col min-h-screen justify-between p-24 bg-gray-100 dark:bg-black">
      <div className="flex flex-row h-fit w-full items-center justify-evenly">
        <div className="flex flex-col w-6/12">
          <div className={`${permanentMarker.className} text-5xl py-6 text-black dark:text-white`}>
            Hi, I'm Li Ying
          </div>
          {/* <div className="w-full items-center">
            <VaraText text="Hi, I'm Li Ying" theme={theme!} />
          </div> */}
          <div className={`${quicksand.className} text-xl py-6 text-black dark:text-white w-full`}>
            A Software Engineer that loves to solve problems and design simple solutions that are delightful to use. I graduated with a Computer Science degree and am currently based in Singapore.
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
      <div className={`${quicksand.className}`}>
        <h2 className="pt-24 text-3xl font-semibold text-black dark:text-white">Skills</h2>
        <h3 className="py-6 text-xl font-semibold text-black dark:text-white">From left to right - most proficient to least proficient:</h3>
        <div className="flex flex-col gap-2 text-md text-black dark:text-white">
          <p>Languages</p>
          <div className="flex flex-wrap gap-1">
            <img alt="Java" className="h-6" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=flat&logo=intellijidea&logoColor=white" />
            <img alt="TypeScript" className="h-6" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white" />
            <img alt="JavaScript" className="h-6" src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=typescript&logoColor=white" />
            <img alt="Python" className="h-6" src="https://img.shields.io/badge/python-%2314354C.svg?style=flat&logo=python&logoColor=white" />
            <img alt="Go" className="h-6" src="https://img.shields.io/badge/go%20-%23121011.svg?style=flat&logo=go&logoColor=white" />
            <img alt="Bash" className="h-6" src="https://img.shields.io/badge/bash%20-%23121011.svg?style=flat&logo=gnubash&logoColor=white" />
            <img alt="C#" className="h-6" src="https://img.shields.io/badge/c%23-%23239120.svg?style=flat&logo=csharp&logoColor=white" />
          </div>
          <p>Frameworks/libraries</p>
          <div className="flex flex-wrap gap-1">
            <img alt="SpringBoot" className="h-6" src="https://img.shields.io/badge/springboot-%2320232a.svg?style=flat&logo=springboot&logoColor=%2361DAFB" />
            <img alt="React" className="h-6" src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB" />
            <img alt="NextJS" className="h-6" src="https://img.shields.io/badge/nextjs-%2320232a.svg?style=flat&logo=nextdotjs&logoColor=%2361DAFB" />
            <img alt="TailwindCSS" className="h-6" src="https://img.shields.io/badge/tailwindcss-%2320232a.svg?style=flat&logo=tailwindcss&logoColor=%2361DAFB" />
            <img alt="MongoDB" className="h-6" src="https://img.shields.io/badge/mongodb-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white" />
            <img alt="MYSQL" className="h-6" src="https://img.shields.io/badge/mysql-%2300f.svg?style=flat&logo=mysql&logoColor=white" />
            <img alt="Postgres" className="h-6" src="https://img.shields.io/badge/postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white" />
            <img alt="AndroidStudio" className="h-6" src="https://img.shields.io/badge/android_studio-%23316192.svg?style=flat&logo=androidstudio&logoColor=white" />
            <img alt="Docker" className="h-6" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=flat&logo=docker&logoColor=white" />
            <img alt="Many More" className="h-6" src="https://img.shields.io/badge/...-and%20more-yellowgreen?style=flat&logo=GitHub-Sponsors" />
          </div>
          <p>Other tools</p>
          <div className="flex flex-wrap gap-1">
            <img alt="aws" className="h-6" src="https://img.shields.io/badge/aws-%23FF9900.svg?style=flat&logo=amazon-aws&logoColor=white" />
            <img alt="linux" className="h-6" src="https://img.shields.io/badge/linux-%23FF9900.svg?style=flat&logo=linux&logoColor=white" />
            <img alt="unity" className="h-6" src="https://img.shields.io/badge/unity-%23FF9900.svg?style=flat&logo=unity&logoColor=white" />
          </div>
        </div>
      </div>
    </main>
  )
}
