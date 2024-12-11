import React from 'react';
import Marquee from './basic/Marquee';
import { FaGitAlt, FaReact, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaGitlab, FaConfluence } from "react-icons/fa";
import { SiIntellijidea, SiJira, SiXcode } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";
import IconText from './basic/IconText';
import { VscVscode, VscVscodeInsiders } from "react-icons/vsc";

const software = [
    <IconText text="IntelliJ IDEA" icon={SiIntellijidea} />,
    <IconText text="GitHub" icon={FaGithub} />,
    <IconText text="Jira" icon={SiJira} />,
    <IconText text="Unity" icon={FaUnity} />,
    <IconText text="GitLab" icon={FaGitlab} />,
    <IconText text="Confluence" icon={FaConfluence} />,
    <IconText text="Xcode" icon={SiXcode} />,
    <IconText text="VS Code" icon={VscVscodeInsiders} />,
]

const Skills = () => {
    return (
        <>
            <div className="content-center flex-col w-96 p-4 ">
                <h2 className='text-3xl font-extrabold text-white'>Software Experience</h2>
            </div>
            <Marquee items={software} />
        </>
    );
};

export default Skills;