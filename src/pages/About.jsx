import {Card, CardContent} from "@mui/material";
import Grid from '@mui/material/Grid';
import {brown, teal} from "@mui/material/colors";
import avatar from "../assets/avatar.jpg";
import {CodeRounded, SelfImprovementRounded} from "@mui/icons-material";
import {DevInfo, DevWorkCount, Skills} from "../components/pages";

import {Helmet} from "react-helmet-async";
import {useTheme} from "@mui/material/styles";
import {CustomAvatar, CustomDivider} from "../components/common";

const About = ({helmetTitle}) => {
    const theme = useTheme();

    return (
        <Card sx={{
            height: "100vh",
            overflowY: "auto",
            backgroundColor: theme.palette.mode === "light" ? brown[50] : null,
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Grid container sx={{mx: 3}}>
                    <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                        <CustomDivider icon={<CodeRounded/>} align="right" bColor={teal[800]} tColor={teal[600]} text="برنامه نویس و توسعه دهنده فول استک"/>

                        <Grid container>
                            <Grid item xs={12} sm={8} md={9} lg={9} xl={9}>
                                <DevInfo/>
                            </Grid>
                            <Grid item xs={0} sm={4} md={3} lg={3} xl={3} sx={{
                                display: {
                                    "xs": "none",
                                    "sm": "block",
                                    "md": "block",
                                },
                                mt: 3
                            }}>
                                <DevWorkCount/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                        <CustomAvatar avatar={avatar} size={250} fallback="PJ"/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{width: 1, mt: 1}}>
                        <CustomDivider icon={<SelfImprovementRounded/>} align="center" bColor={teal[800]} tColor={teal[600]} text="مهارت های من"/>
                        <Skills/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default About;