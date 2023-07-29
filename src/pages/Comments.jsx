import {useState, useEffect} from "react";
import {Helmet} from "react-helmet-async";
import {Box, Typography, Avatar, Card, CardContent, Divider, Chip, Slide} from "@mui/material";
import Slider from "react-slick";
import {ForumRounded} from "@mui/icons-material";
import {userComments} from "../constants/details";
import {grey, teal} from "@mui/material/colors";
import {useTheme} from "@mui/material/styles";

const Comments = ({helmetTitle}) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    const options = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: "linear",
        rtl: true
    }

    return (
        <Card sx={{
            height: "100vh",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.palette.mode === "light" ? grey["A400"] : null,
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Slide direction="down" in={loading} style={{
                    transitionDelay: loading ? "100ms" : "0ms",
                }}>
                    <Divider textAlign="center" sx={{
                        "&::before, &::after": {
                            borderColor: teal[800]
                        },
                        mb: 3,
                    }}>
                        <Chip icon={<ForumRounded/>} label={
                            <Typography variant="body1" color={teal[600]} sx={{textAlign: "center"}}>
                                نظرات کاربران محترم
                            </Typography>
                        }
                              sx={{p: 3}}
                        />
                    </Divider>
                </Slide>
                <Box component="div" sx={{mt: 10, justifyContent: "center", alignItems: "center"}}>
                    <Slider {...options}>
                        {
                            userComments.map((user, index) => (
                                <Box key={index} component="div" sx={{justifyContent: " center"}}>
                                    <Avatar src={user.avatar} variant="rounded"
                                            sx={{height: 100, width: 100, margin: "0 auto"}}/>
                                    <Typography variant="body1" textAlign="center" color="whitesmoke">
                                        {user.fullName}
                                    </Typography>
                                    <Typography variant="body2" textAlign="center" color="whitesmoke" sx={{mb: 2}}>
                                        {user.jobTitle}
                                    </Typography>
                                    <Card sx={{
                                        backgroundColor: "lightsalmon",
                                        width: 1 / 2,
                                        m: "0 auto",
                                        borderRadius: 5
                                    }}>
                                        <CardContent>
                                            <Typography variant="body2" textAlign="center">
                                                {user.comment}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            ))
                        }
                    </Slider>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Comments;