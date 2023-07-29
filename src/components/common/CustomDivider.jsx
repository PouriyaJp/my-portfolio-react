import {Chip, Divider, Slide, Typography} from "@mui/material";
import {teal} from "@mui/material/colors";
import {ForumRounded} from "@mui/icons-material";
import {useEffect, useState} from "react";

const CustomDivider = ({bColor, icon, align, text}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    return (
        <Slide direction="down" in={loading} style={{
            transitionDelay: loading ? "100ms" : "0ms",
        }}>
            <Divider textAlign={align} sx={{
                "&::before, &::after": {
                    borderColor: bColor
                },
                mb: 3,
            }}>
                <Chip icon={icon} label={
                    <Typography variant="body1" color={teal[600]} sx={{textAlign: "center"}}>
                        {text}
                    </Typography>
                }
                      sx={{p: 3}}
                />
            </Divider>
        </Slide>
    );
}

export default CustomDivider;