import Grid from "@mui/material/Unstable_Grid2";
import bg05 from "../assets/bg5.jpg";

const PagesContainer = ({children}) => {
    return (
        <Grid xs={12} sm={12} md={9} lg={10} xl={10} >
            {children}
        </Grid>
    )
}

export default PagesContainer;