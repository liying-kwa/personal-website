import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import ReactCardFlip from "react-card-flip";

interface ProjectCardProps {
    title: string;
    description: string;
    date: string;
    flipDescriptionLinks: { repository: string, feature?: string };
    flipDescription: string[];
    imgSrc?: string;
    imgAlt?: string;
}

const ProjectCard = (props: ProjectCardProps) => {
    const [flip, setFlip] = useState(false);

    return (
        <div className="w-1/4 h-1/5">
            <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800">
                    <Image className=""
                        src={props.imgSrc ?? "/vercel.svg"}
                        alt={props.imgAlt ?? ""}
                        width={128}
                        height={128}
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">{props.description}</p>
                        <button
                            className="rounded bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:hover:bg-gray-100 text-white dark:text-black w-24 text-sm py-1"
                            onClick={() => setFlip(!flip)}
                        >Read More</button>
                    </div>

                </div>
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <div className="mb-3 text-sm text-gray-700 dark:text-gray-400">
                            <p>{`Date: ${props.date}`}</p>
                            <p>Repository: <Link className="text-blue-600 hover:text-blue-500" href={props.flipDescriptionLinks.repository}>{props.flipDescriptionLinks.repository}</Link></p>
                            {props.flipDescriptionLinks.feature && <p>Feature: <Link className="text-blue-600 hover:text-blue-500" href={props.flipDescriptionLinks.feature}>{props.flipDescriptionLinks.feature}</Link></p>}
                            {props.flipDescription.map((line, index) => <p key={index}>{line}</p>)}
                        </div>
                        <button
                            className="rounded bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:hover:bg-gray-100 text-white dark:text-black w-24 text-sm py-1"
                            onClick={() => setFlip(!flip)}
                        >Back</button>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    );
}

export default ProjectCard;