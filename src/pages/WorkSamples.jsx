import {useState, useEffect} from "react";
import {Helmet} from "react-helmet-async";
import EllipsisText from "react-ellipsis-text";
import {
    Typography,
    Card,
    CardContent,
    CardActionArea,
    CardActions,
    Button,
    CardMedia,
    Divider,
    Chip,
    Slide,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {SchoolRounded} from "@mui/icons-material";
import {workSamples} from "../constants/workSamples";
import {lime, teal} from "@mui/material/colors";

const WorkSamples = ({helmetTitle}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    return (
        <Card
            sx={{
                height: "100vh",
                overflowY: "scroll",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Slide direction="down" in={loading} style={{
                    transitionDelay: loading ? "100ms" : "0ms",
                }}>
                    <Divider textAlign="center" sx={{
                        "&::before, &::after": {
                            borderColor: teal[800],
                        },
                        mb: 3,
                    }}>
                        <Chip icon={<SchoolRounded/>} label={
                            <Typography variant="body1" color={teal[600]} sx={{textAlign: "center"}}>
                                نمونه کارهای من
                            </Typography>
                        }
                              sx={{p: 3}}
                        />
                    </Divider>
                </Slide>
                <Grid container sx={{ms: 3}}>
                    {
                        workSamples.map((item, index) => (
                            <Grid key={index} xs={12} sm={6} md={6} lg={4} sx={{px: 2, mb: 2}}>
                                <Slide direction="up" in={loading} style={{
                                    transitionDelay: loading ? `${index + 3}99ms` : "0ms"
                                }}>
                                    <Card sx={{maxWidth: 345, backgroundColor: lime[900]}}>
                                        <CardActionArea>
                                            <CardMedia component="img" height="250" width="220" image={item.image}
                                                       alt={item.title}/>
                                            <CardContent>
                                                <Typography variant="body1" textAlign="right" gutterBottom>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" textAlign="right" gutterBottom>
                                                    <EllipsisText text={item.info} length={"40"}/>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button variant="outlined" href={item.link} size="small" sx={{
                                                color: lime["A200"],
                                                borderColor: lime["A200"],
                                                "&:hover": {borderColor: lime[900]}
                                            }} target="_blank">
                                                اطلاعات بیشتر
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Slide>
                            </Grid>
                        ))
                    }
                </Grid>
            </CardContent>
        </Card>
    );
};
export default WorkSamples;
