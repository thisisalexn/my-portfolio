import React from 'react';
import Marquee from './basic/Marquee';
import { FaGitAlt, FaReact, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaUnity } from "react-icons/fa6";
import IconText from './basic/IconText';

const skills = [
    <IconText text="React" icon={FaReact} hoverEffect={true} />,
    <IconText text="Java" icon={FaJava} />,
    <IconText text="HTML" icon={FaHtml5} />,
    <IconText text="CSS" icon={FaCss3Alt} />,
    <IconText text="Unity" icon={FaUnity} />,
    <div className="group flex flex-row items-center space-x-2 hover:scale-110">
        <p className='font-bold hover:text-orange-500'>C#</p>
    </div>,
    <IconText icon={FaGitAlt} text={"git"} />
]

const Skills = () => {
    return (
        <>
            <div className="content-center flex-col w-96 p-4 ">
                <h2 className='text-3xl font-extrabold text-white'>Skills</h2>
            </div>
            <Marquee items={skills} />
        </>
    );
};

export default Skills;