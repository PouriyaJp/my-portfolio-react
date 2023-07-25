import {useContext} from "react";
import MainContext from "../../context";
import {SidebarContent} from "../sidebar";
import {Drawer} from "@mui/material";

const SidebarDrawer = () => {
    const {drawerOpen, setDrawerOpen} = useContext(MainContext);

    return(
        <Drawer
            open={drawerOpen}
            variant="temporary"
            onClose={() => setDrawerOpen(false)}
            sx={{
                "& .MuiDrawer-paper": {
                    width: 300,
                },
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                },
            }}
        >
            <SidebarContent/>
        </Drawer>
    );
}

export default SidebarDrawer;