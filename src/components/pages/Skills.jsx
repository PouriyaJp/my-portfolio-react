import {Skill} from "./index";
import {useEffect, useState} from "react";
import {devSkills} from "../../constants/skills";

const Skills = () => {
        const [html, setHtml] = useState(0);
        const [css, setCss] = useState(0);
        const [bootstrap, setBootstrap] = useState(0);
        const [javascript, setJavascript] = useState(0);
        const [jquery, setJquery] = useState(0);
        const [react, setReact] = useState(0);
        const [php, setPhp] = useState(0);
        const [laravel, setLaravel] = useState(0);
        const [git, setGit] = useState(0);
        const [linux, setLinux] = useState(0);

        const {
                htmlSkill,
                cssSkill,
                bootstrapSkill,
                jsSkill,
                jquerySkill,
                reactSkill,
                phpSkill,
                laravelSkill,
                gitSkill,
                linuxSkill
        } = devSkills;

        useEffect(() => {
                const timer = setInterval(() => {
                        setHtml((oldProgress) => {
                                const diff = Math.random() * 10;
                                return Math.min(oldProgress + diff, 95);
                        });
                        setCss((oldProgress) => {
                                const diff = Math.random() * 10;
                                return Math.min(oldProgress + diff, 70);
                        });
                        setBootstrap((oldProgress) => {
                                const diff = Math.random() * 10;
                                return Math.min(oldProgress + diff, 77);
                        });
                        setJavascript((oldProgress) => {
                                const diff = Math.random() * 10;
                                return Math.min(oldProgress + diff, 73);
                        });
                        setJquery((oldProgress) => {
                                const diff = Math.random() * 10;
                                return Math.min(oldProgress + diff, 68);
                        });
                        setReact((oldProgress) => {
                                const diff = Math.random() * 10;
                                return Math.min(oldProgress + diff, 60);
                        });
                        setPhp((oldProgress) => {
                                const diff = Math.random() * 10;
                                return Math.min(oldProgress + diff, 62);
                        });
                        setLaravel((oldProgress) => {
                                const diff = Math.random() * 10;
                                return Math.min(oldProgress + diff, 82);
                        });
                        setGit((oldProgress) => {
                                const diff = Math.random() * 10;
                                return Math.min(oldProgress + diff, 66);
                        });
                        setLinux((oldProgress) => {
                                const diff = Math.random() * 10;
                                return Math.min(oldProgress + diff, 40);
                        });
                }, 200);

                return () => {
                        clearInterval(timer);
                }

        }, []);

    return(
        <>
            <Skill
                name={htmlSkill.name}
                icon={htmlSkill.icon}
                color={htmlSkill.color}
                value={html}
            />
            <Skill
                name={cssSkill.name}
                icon={cssSkill.icon}
                color={cssSkill.color}
                value={css}
            />
            <Skill
                name={bootstrapSkill.name}
                icon={bootstrapSkill.icon}
                color={bootstrapSkill.color}
                value={bootstrap}
            />
            <Skill
                name={jsSkill.name}
                icon={jsSkill.icon}
                color={jsSkill.color}
                value={javascript}
            />
            <Skill
                name={jquerySkill.name}
                icon={jquerySkill.icon}
                color={jquerySkill.color}
                value={jquery}
            />
            <Skill
                name={reactSkill.name}
                icon={reactSkill.icon}
                color={reactSkill.color}
                value={react}
            />
            <Skill
                name={phpSkill.name}
                icon={phpSkill.icon}
                color={phpSkill.color}
                value={php}
            />
            <Skill
                name={laravelSkill.name}
                icon={laravelSkill.icon}
                color={laravelSkill.color}
                value={laravel}
            />
            <Skill
                name={gitSkill.name}
                icon={gitSkill.icon}
                color={gitSkill.color}
                value={git}
            />
            <Skill
                name={linuxSkill.name}
                icon={linuxSkill.icon}
                color={linuxSkill.color}
                value={linux}
            /></>
    );
}

export default Skills;