import {Helmet} from "react-helmet-async";
import {Card, CardContent,} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {SchoolRounded} from "@mui/icons-material";
import {grey, teal} from "@mui/material/colors";
import {useTheme} from "@mui/material/styles";
import {CustomDivider} from "../components/common";
import {ShowWorkSamples} from "../components/pages";

const WorkSamples = ({helmetTitle}) => {
    const theme = useTheme();

    return (
        <Card
            sx={{
                height: "100vh",
                overflowY: "scroll",
                backgroundColor: theme.palette.mode === "light" ? grey["A400"] : null,
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider icon={<SchoolRounded/>} bColor={teal[800]} tColor={teal[600]} align="center"  text="نمونه کارهای من" />

                <Grid container sx={{ms: 3}}>
                   <ShowWorkSamples/>
                </Grid>
            </CardContent>
        </Card>
    );
};
export default WorkSamples;
