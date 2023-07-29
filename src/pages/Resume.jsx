import {useState, useEffect} from "react";
import {Helmet} from "react-helmet-async";
import {Card, CardContent} from "@mui/material";
import {SettingsEthernetRounded, HomeRepairServiceRounded, SchoolRounded} from "@mui/icons-material";
import {grey, teal} from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import {useTheme} from "@mui/material/styles";
import {CustomDivider} from "../components/common";
import {DevEduTimeline, DevExpTimeline} from "../components/pages";

const Resume = ({helmetTitle}) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        }
    }, []);

    return (
        <Card sx={{
            height: "100vh",
            overflowY: "auto",
            backgroundColor: theme.palette.mode === "light" ? grey["A400"] : null,
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>

                <CustomDivider icon={<SettingsEthernetRounded/>} bColor={teal[800]} tColor={teal[600]} align="center" text="رزومه من"/>

                <Grid container sx={{mt: 4}}>
                    <Grid xs={6}>
                        <CustomDivider icon={<HomeRepairServiceRounded/>} cColor="warning"  bColor="warning.main" align="center" text="تجربیات"/>

                        <DevExpTimeline loading={loading}/>
                    </Grid>
                    <Grid xs={6}>
                        <CustomDivider icon={<SchoolRounded/>} cColor="info" tColor="black" bColor={"info.main"} align="center" text="تحصیلات"/>

                        <DevEduTimeline loading={loading}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Resume;