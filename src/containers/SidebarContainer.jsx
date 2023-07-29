import Grid from "@mui/material/Unstable_Grid2";
import {grey} from "@mui/material/colors";

const SidebarContainer = ({children}) => {
    return (
        <Grid xs={0} sm={0} md={3} lg={2} xl={2} sx={{
            backgroundColor: "rgb(7,7,7)",
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