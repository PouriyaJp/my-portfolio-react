import {Divider, Chip, Box, Typography, LinearProgress} from "@mui/material";
import {teal} from "@mui/material/colors";

const Skill = ({icon, color, name, value}) => {
    return(
        <>
            <Divider textAlign="left" sx={{
                mt: 2,
            }}>
                <Chip icon={<Box component="img" src={icon} sx={{height: 30}}/>} label={name} sx={{color: color, p: 3}} />
            </Divider>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Box sx={{minWidth: 35}}>
                    <Typography variant="body1" color={color}>
                        {Math.round(value)}%
                    </Typography>
                </Box>
                <Box sx={{width: "100%", mr: 1}}>
                    <LinearProgress variant="determinate" value={value} sx={{
                        height: 5,
                        borderRadius: 2,
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: color,
                        },
                    }}></LinearProgress>
                </Box>
            </Box>
        </>
    );
}

export default Skill;