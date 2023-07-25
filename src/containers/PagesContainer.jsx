import Grid from "@mui/material/Unstable_Grid2";
import bg05 from "../assets/bg5.jpg";

const PagesContainer = ({children}) => {
    return (
        <Grid xs={12} sm={12} md={9} lg={10} xl={10} sx={{
            backgroundColor: "secondary.main",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg05})`,
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            {children}
        </Grid>
    )
}

export default PagesContainer;