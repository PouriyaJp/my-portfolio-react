import {useState} from "react";
import {Avatar, Box, Typography, IconButton} from "@mui/material";
import avatar from "../../assets/avatar.jpg";
import {RandomReveal} from "react-random-reveal";
import {alphabetPersian} from "../../constants/alphabetPersian";
import {GitHub, Telegram, Instagram, LinkedIn} from "@mui/icons-material";
import {blue, pink} from "@mui/material/colors";
import ThemeActionButton from "../ThemeActionButton";

const SidebarHeader = () => {
    const [start, setStart] = useState(false);

    return (
        <>
            <ThemeActionButton/>
            <Avatar
                src={avatar}
                variant="rounded"
                sx={{
                    height: 200, width: 200, margin: "0 auto",
                    display: {
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",
                    }
                }}
            >
                PJ
            </Avatar>
            <Typography variant="h6" color="whitesmoke">
                <RandomReveal isPlaying duration={4} characterSet={alphabetPersian} characters="پوریا جمشیدپور" onComplete={() => setStart(true)}/>
            </Typography>
            {start && (
                <Typography variant="caption" color="whitesmoke">
                    <RandomReveal isPlaying duration={4} characterSet={alphabetPersian} characters=" برنامه نویسی و توسعه دهنده فول استک"/>
                </Typography>
            )}
            <Box component="div" sx={{m: "0 auto", textAlign: "center"}}>
                <IconButton aria-label="GitHub">
                    <a href="https://github.com/PouriyaJp" target="_blank" rel="noopener noreferrer">
                        <GitHub sx={{color: "gray", '&:hover': {
                                color: "whitesmoke",
                            }}}/>
                    </a>
                </IconButton>
                <IconButton aria-label="Telegram">
                    <a href="https://t.me/pouriya2910" target="_blank" rel="noopener noreferrer">
                        <Telegram sx={{color: "gray", '&:hover': {
                            color: blue[300],
                        }}}/>
                    </a>
                </IconButton>
                <IconButton aria-label="Instagram">
                    <a href="https://www.instagram.com/__pouriya2910__/" target="_blank" rel="noopener noreferrer">
                        <Instagram sx={{color: "gray", '&:hover': {
                                color: pink["A200"],
                            }}}/>
                    </a>
                </IconButton>
                <IconButton aria-label="LinkedIn">
                    <a href="https://www.linkedin.com/in/pouriya-jamshidpoor-1661b0237" target="_blank" rel="noopener noreferrer">
                        <LinkedIn sx={{color: "gray", '&:hover': {
                                color: blue[800],
                            }}}/>
                    </a>
                </IconButton>
            </Box>
        </>
    )
        ;
}
export default SidebarHeader;