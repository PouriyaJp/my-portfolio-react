import {Box, IconButton} from "@mui/material";
import {GitHub, Instagram, LinkedIn, Telegram} from "@mui/icons-material";
import {blue, pink} from "@mui/material/colors";

const SocialMediaIcons = () => {
    return(
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
    );
}

export default SocialMediaIcons;