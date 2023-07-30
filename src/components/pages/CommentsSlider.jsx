import Slider from "react-slick";
import {userComments} from "../../constants/details";
import {Avatar, Box, Card, CardContent, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const CommentsSlider = () => {
    const theme = useTheme();
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

    return(
        <Box component="div" sx={{mt: 10, justifyContent: "center", alignItems: "center"}}>
            <Slider {...options}>
                {
                    userComments.map((user, index) => (
                        <Box key={index} component="div" sx={{justifyContent: " center"}}>
                            <Avatar src={user.avatar} variant="rounded"
                                    sx={{height: 100, width: 100, margin: "0 auto"}}/>
                            <Typography variant="body1" textAlign="center" color={theme.palette.mode === "light" ? "black" : "whitesmoke"}>
                                {user.fullName}
                            </Typography>
                            <Typography variant="body2" textAlign="center" color={theme.palette.mode === "light" ? "black" : "whitesmoke"} sx={{mb: 2}}>
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
    );
};

export default CommentsSlider;