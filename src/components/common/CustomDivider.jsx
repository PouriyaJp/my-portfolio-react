import {Chip, Divider, Slide, Typography} from "@mui/material";
import {useEffect, useState} from "react";

const CustomDivider = ({bColor, cColor, tColor, icon, align, text}) => {
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
                <Chip icon={icon} color={cColor} label={
                    <Typography variant="body1" color={tColor} sx={{textAlign: "center"}}>
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