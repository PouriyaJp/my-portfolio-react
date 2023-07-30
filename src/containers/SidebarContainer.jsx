import Grid from "@mui/material/Unstable_Grid2";
import {useTheme} from "@mui/material/styles";
import {brown} from "@mui/material/colors";

const SidebarContainer = ({children}) => {
    const theme = useTheme();

    return (
        <Grid xs={0} sm={0} md={3} lg={2} xl={2} sx={{
            backgroundColor: theme.palette.mode === "light" ? brown[100] : "rgb(7,7,7)",
            height: "100vh",
            overflowY: "auto",
            overflowX: "hidden",
            zIndex: 10000,
        }}>
            {children}
        </Grid>
    )
}

export default SidebarContainer;