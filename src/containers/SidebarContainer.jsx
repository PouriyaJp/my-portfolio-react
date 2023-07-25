import Grid from "@mui/material/Unstable_Grid2";

const SidebarContainer = ({children}) => {
    return (
        <Grid
            xs={0}
            sm={0}
            md={3}
            lg={2}
            xl={2}
            sx={{
                backgroundColor: "rgb(7,7,7)",
                height: "100vh",
                overflowY: "auto",
                overflowX: "hidden"
        }}
        >
            {children}
        </Grid>
    )
}

export default SidebarContainer;