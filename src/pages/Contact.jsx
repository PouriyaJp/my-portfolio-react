import {useState, useEffect} from "react";
import {useTheme} from "@mui/material/styles";
import {Typography, Card, CardContent, Slide} from "@mui/material";
import Grid from '@mui/material/Grid';
import {AccountCircle} from "@mui/icons-material";
import {Helmet} from "react-helmet-async";
import {grey, teal} from "@mui/material/colors";
import worldMap from "../assets/map.svg";
import {CustomDivider} from "../components/common";
import {ContactForm} from "../components/pages";

const Contact = ({helmetTitle}) => {
    const [loading, setLoading] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        }
    }, []);

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
                <CustomDivider icon={<AccountCircle/>} bColor={teal[800]} tColor={teal[600]} align="center" text="ارتباط با من"/>

                <Grid container sx={{mt: 5}}>
                    <Slide direction="down" in={loading} style={{
                        transitionDelay: loading ? "200ms" : "0ms",
                    }}>
                        <Grid xs={12} sm={12} md={8}>
                            <Card sx={{justifyContent: "center", alignItems: "center"}}>
                                <ContactForm theme={theme}/>
                            </Card>
                        </Grid>
                    </Slide>
                    <Slide direction="down" in={loading} style={{
                        transitionDelay: loading ? "200ms" : "0ms",
                    }}>
                        <Grid xs={0} sm={0} md={4} sx={{
                            textAlign: "center",
                            backgroundImage: `url(${worldMap})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            height: "700px"
                        }}>
                            <Card sx={{justifyContent: "center", alignItems: "center"}}>
                                <Typography variant="h6" color={teal[600]} sx={{
                                    fontFamily: "vazir",
                                    mt: 4,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}>
                                    بیا در مورد همه چیز باهم صحبت کنیم
                                </Typography>
                                <Typography variant="body1" color={teal[600]} sx={{
                                    mt: 2,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}>
                                    👋{" "}
                                    <a href="pouriya2910@gmail.com" alt="email" style={{
                                        color: "tomato",
                                    }}>
                                        ایمیل
                                    </a>{" "}
                                    بزن به من
                                </Typography>
                            </Card>
                        </Grid>
                    </Slide>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Contact;