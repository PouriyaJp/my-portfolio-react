import {useState} from "react";
import {Typography} from "@mui/material";
import avatar from "../../assets/avatar.jpg";
import {RandomReveal} from "react-random-reveal";
import {alphabetPersian} from "../../constants/alphabetPersian";
import ThemeActionButton from "../ThemeActionButton";
import {CustomAvatar} from "../common";
import SocialMediaIcons from "../SocialMediaIcons";

const SidebarHeader = () => {
    const [start, setStart] = useState(false);

    return (
        <>
            <ThemeActionButton/>

            <CustomAvatar avatar={avatar} size={200} fallback="PJ"/>

            <Typography variant="h6" color="whitesmoke">
                <RandomReveal isPlaying duration={4} characterSet={alphabetPersian} characters="پوریا جمشیدپور" onComplete={() => setStart(true)}/>
            </Typography>
            {start && (
                <Typography variant="caption" color="whitesmoke">
                    <RandomReveal isPlaying duration={4} characterSet={alphabetPersian} characters=" برنامه نویسی و توسعه دهنده فول استک"/>
                </Typography>
            )}
            <SocialMediaIcons/>
        </>
    )
        ;
}
export default SidebarHeader;