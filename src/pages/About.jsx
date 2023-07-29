import {useState, useEffect} from "react";
import {Typography, Card, CardContent, Divider, Avatar, Chip, Box, Tooltip} from "@mui/material";
import Grid from '@mui/material/Grid';
import {grey, teal} from "@mui/material/colors";
import avatar from "../assets/avatar.jpg";
import {CodeRounded, SelfImprovementRounded} from "@mui/icons-material";
import DevInfo from "./components/DevInfo";
import Skill from "./components/Skill";
import {devSkills} from "../constants/skills";
import {devWorkInfo} from "../constants/details";
import CountUp from "react-countup";
import {Helmet} from "react-helmet-async";
import {useTheme} from "@mui/material/styles";

const About = ({helmetTitle}) => {
    const theme = useTheme();
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

    return (
        <Card sx={{
            height: "100vh",
            overflowY: "auto",
            backgroundColor: theme.palette.mode === "light" ? grey["A400"] : null,
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Grid container sx={{mx: 3}}>
                    <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Divider textAlign="right" sx={{
                            "&::before, &::after": {
                                borderColor: teal[800]
                            }
                        }}>
                            <Chip icon={<CodeRounded/>} label={
                                <Typography variant="body1" color={teal[600]} sx={{textAlign: "center"}}>
                                    برنامه نویس و توسعه دهنده فول استک
                                </Typography>
                            } sx={{p: 3}}/>
                        </Divider>

                        <Grid container>
                            <Grid item xs={12} sm={8} md={9} lg={9} xl={9}>
                                <DevInfo>نام و نام خانوادگی : پوریا جمشیدپور</DevInfo>
                                <DevInfo>سن : ۲۹</DevInfo>
                                <DevInfo>شهر : تهران</DevInfo>
                                <DevInfo>آدرس ایمیل : pouriya2910@gmail.com</DevInfo>
                            </Grid>
                            <Grid item xs={0} sm={4} md={3} lg={3} xl={3} sx={{
                                display: {
                                    "xs": "none",
                                    "sm": "block",
                                    "md": "block",
                                },
                                mt: 3
                            }}>
                                {
                                    devWorkInfo.map((item, index) => (
                                        <Box key={index} component="div" sx={{width: 1, mb: 1}}>
                                            <Tooltip title={item.tooltipTitle} placement="right" arrow>
                                                <Chip icon={item.icon} label={
                                                    <Typography variant="body1" color="whitesmoke">
                                                        <CountUp start={0} end={item.total} duration={2}/>
                                                    </Typography>
                                                } sx={{p: 2, backgroundColor: item.color, width: 1}}/>
                                            </Tooltip>
                                        </Box>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                        <Avatar src={avatar} variant="rounded" sx={{
                            height: 250,
                            width: 250,
                            margin: "0 auto",
                            display: {
                                xl: "block",
                                lg: "block",
                                md: "block",
                                sm: "none",
                                xs: "none",
                            }
                        }}>
                            PJ
                        </Avatar>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{width: 1, mt: 1}}>
                        <Divider textAlign="center" sx={{
                            "&::before, &::after": {
                                borderColor: teal[800]
                            }
                        }}>
                            <Chip icon={<SelfImprovementRounded/>} label={
                                <Typography variant="body1" color={teal[600]} sx={{textAlign: "center"}}>
                                    مهارت های من
                                </Typography>
                            } sx={{p: 3}}/>
                        </Divider>
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
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default About;