import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaFlag } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi'
import { ImBriefcase } from 'react-icons/im'
import { SiIndeed } from 'react-icons/si'
import { Quicksand } from 'next/font/google'
import { useTheme } from 'next-themes';
import colors from 'tailwindcss/colors'

// TODO: Choose font
const quicksand = Quicksand({ subsets: ['latin'] })

const Experience = () => {
    const { theme } = useTheme();

    return (
        <main className={`${quicksand.className} flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 dark:bg-black text-black dark:text-white`}>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: theme === 'dark' ? colors.blue[950] : colors.blue[300], color: theme === 'dark' ? colors.white : colors.black }}
                    contentArrowStyle={{ borderRight: `7px solid  ${theme === 'dark' ? colors.blue[950] : colors.blue[300]}` }}
                    date="Sep 2021 - Mar 2023"
                    iconStyle={{ background: theme === 'dark' ? colors.blue[800] : colors.blue[300], color: colors.white }}
                    icon={<SiIndeed />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer @ Indeed.com</h3>
                    <h4 className="vertical-timeline-element-subtitle">Hybrid (SG office / Remote)</h4>
                    <p>
                        Fullstack Development
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: theme === 'dark' ? colors.gray[500] : colors.gray[300], color: theme === 'dark' ? colors.gray[200] : colors.gray[600] }}
                    contentArrowStyle={{ borderRight: theme === 'dark' ? colors.black : colors.white }}
                    date="Jun Sep 2020"
                    iconStyle={{ background: theme === 'dark' ? colors.blue[800] : colors.blue[300], color: colors.white }}
                    icon={<ImBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Information Research Intern @ DSO National Laboratories</h3>
                    <h4 className="vertical-timeline-element-subtitle">Hybrid (SG office / Remote)</h4>
                    <p>
                        Cloud Security, Kubernetes
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: theme === 'dark' ? colors.gray[500] : colors.gray[300], color: theme === 'dark' ? colors.gray[200] : colors.gray[600] }}
                    contentArrowStyle={{ borderRight: theme === 'dark' ? colors.black : colors.white }}
                    date="Jun Aug 2019"
                    iconStyle={{ background: theme === 'dark' ? colors.blue[800] : colors.blue[300], color: colors.white }}
                    icon={<GiGraduateCap />}
                >
                    <h3 className="vertical-timeline-element-title">Summer Exchange</h3>
                    <h4 className="vertical-timeline-element-subtitle">@ University of California (Berkeley)</h4>
                    <p>
                        [CS 61BL] Data Structures and Programming Methodology
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: theme === 'dark' ? colors.gray[500] : colors.gray[300], color: theme === 'dark' ? colors.gray[200] : colors.gray[600] }}
                    contentArrowStyle={{ borderRight: theme === 'dark' ? colors.black : colors.white }}
                    date="May 2018 - Sep 2021"
                    iconStyle={{ background: theme === 'dark' ? colors.green[600] : colors.green[400], color: colors.white }}
                    icon={<GiGraduateCap />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Engineering (Honours),</h3>
                    <h4 className="vertical-timeline-element-subtitle">Information Systems Technology and Design</h4>
                    <h4 className="vertical-timeline-element-subtitle">@ Singapore University of Technology and Design (SUTD)</h4>
                    <p>
                        Computer Science
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: theme === 'dark' ? colors.rose[700] : colors.rose[400], color: colors.white }}
                    icon={<FaFlag />}
                />
            </VerticalTimeline>
        </main>
    )
}

export default Experience;