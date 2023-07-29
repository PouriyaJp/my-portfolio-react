import {workSamples} from "../../constants/workSamples";
import Grid from "@mui/material/Unstable_Grid2";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Slide, Typography} from "@mui/material";
import {lime} from "@mui/material/colors";
import EllipsisText from "react-ellipsis-text";
import {useEffect, useState} from "react";

const ShowWorkSamples = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    return(
        <>
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
        </>
    );
};

export default ShowWorkSamples;