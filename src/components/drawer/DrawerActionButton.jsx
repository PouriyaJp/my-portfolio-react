import {useContext} from "react";
import MainContext from "../../context";
import {Box, Fab} from "@mui/material";
import {teal} from "@mui/material/colors";
import {MenuRounded} from "@mui/icons-material";

const DrawerActionButton = () => {
    const {setDrawerOpen} = useContext(MainContext);

    return(
        <Box sx={{
            position: "absolute",
            display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
            }
        }}>
            <Fab aria-label="Sidebar" size="small" sx={{m: 2, backgroundColor: teal[400]}} onClick={() => setDrawerOpen(true)}>
                <MenuRounded />
            </Fab>
        </Box>
    );
}

export default DrawerActionButton;