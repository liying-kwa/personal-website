import Link from 'next/link';
import { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import { TbExternalLink } from 'react-icons/tb'
import SkillsShield from './SkillsShield';
import colors from 'tailwindcss/colors';

interface ProjectCardProps {
    title: string;
    description: string;
    imgSrc?: string;
    imgAlt?: string;
    date: string;
    status: string;
    flipDescriptionLinks: { repository?: string, feature?: string, demo?: string };
    flipDescription?: JSX.Element;
}

const statusColor: { [key: string]: string } = {
    'completed': colors.gray[500].slice(1),
    'maintenance': colors.rose[500].slice(1),
    'in_progress': colors.lime[500].slice(1)
}

const ProjectCard = (props: ProjectCardProps) => {
    const [flip, setFlip] = useState(false);

    return (
        <div className="w-80">
            <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img
                        className="rounded-t-lg object-cover h-48 bg-gray-800 dark:bg-gray-200"
                        src={props.imgSrc ?? "/vercel.svg"}
                        alt={props.imgAlt ?? ""}
                    />
                    <div className="flex flex-col justify-between py-6 px-8 leading-normal h-48">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                            <p className="mb-2 text-md text-gray-700 dark:text-gray-400">{props.description}</p>
                        </div>
                        <button
                            className="rounded bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300 text-white dark:text-black w-24 text-sm py-1"
                            onClick={() => setFlip(!flip)}
                        >Read More</button>
                    </div>

                </div>
                <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-7 justify-between leading-normal h-96">
                    <div className="mb-3 text-md text-gray-700 dark:text-gray-400">
                        <div className="flex justify-between">
                            <h5 className="text-lg font-bold pb-2">{props.date}</h5>
                            <SkillsShield imgAlt={props.status} style='plastic' text={props.status} backgroundColor={statusColor[props.status]} className='h-5 mt-0.5' />
                        </div>
                        {props.flipDescriptionLinks.demo &&
                            <p>Demo:{' '}
                                <Link className="text-blue-600 hover:text-blue-500 inline-block" href={props.flipDescriptionLinks.demo} target="_blank">
                                    <TbExternalLink />
                                </Link>
                            </p>}
                        {props.flipDescriptionLinks.repository &&
                            <p>Repository:{' '}
                                <Link className="text-blue-600 hover:text-blue-500 inline-block" href={props.flipDescriptionLinks.repository} target="_blank">
                                    <TbExternalLink />
                                </Link>
                            </p>}
                        {props.flipDescriptionLinks.feature &&
                            <p>Feature:{' '}
                                <Link className="text-blue-600 hover:text-blue-500 inline-block" href={props.flipDescriptionLinks.feature} target="_blank">
                                    <TbExternalLink />
                                </Link>
                            </p>}
                        {props.flipDescription}
                    </div>
                    <button
                        className="rounded bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300 text-white dark:text-black w-24 text-sm py-1"
                        onClick={() => setFlip(!flip)}
                    >Back</button>
                </div>
            </ReactCardFlip>
        </div>
    );
}

export default ProjectCard;