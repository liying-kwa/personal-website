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
        <div className="w-1/4 max-w-sm">
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
                        <p>{`Date: ${props.date}`}</p>
                        <p>Repository: <Link className="text-blue-600 hover:text-blue-500" href={props.flipDescriptionLinks.repository}>{props.flipDescriptionLinks.repository}</Link></p>
                        {props.flipDescriptionLinks.feature && <p>Feature: <Link className="text-blue-600 hover:text-blue-500" href={props.flipDescriptionLinks.feature}>{props.flipDescriptionLinks.feature}</Link></p>}
                        {props.flipDescription.map((line, index) => <p key={index}>{line}</p>)}
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