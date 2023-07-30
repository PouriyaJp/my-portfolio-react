import {Helmet} from "react-helmet-async";
import {Card, CardContent} from "@mui/material";
import {ForumRounded} from "@mui/icons-material";
import {brown, teal} from "@mui/material/colors";
import {useTheme} from "@mui/material/styles";
import {CustomDivider} from "../components/common";
import {CommentsSlider} from "../components/pages";

const Comments = ({helmetTitle}) => {
    const theme = useTheme();

    return (
        <Card sx={{
            height: "100vh",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.palette.mode === "light" ? brown[50] : null,
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider icon={<ForumRounded/>} bColor={teal[800]} tColor={teal[600]} align="center" text="نظرات کاربران محترم"/>

                <CommentsSlider/>
            </CardContent>
        </Card>
    );
};

export default Comments;