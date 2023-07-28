import {Box, Divider} from "@mui/material";
import {grey} from "@mui/material/colors";
import {SidebarHeader, SidebarTabs, SidebarFooter} from ".";

const SidebarContent = () => {

    return (
        <Box
            // display={{ sm: "none" }}
            sx={{
                justifyContent: "center",
                textAlign: "center",
                mt: 2,
            }}
        >
            {/* SidebarHeader */}
            <SidebarHeader/>

            <Divider variant="middle" color={grey[900]}/>

            {/* SidebarTabs */}
            <SidebarTabs/>

            <Divider variant="middle" color={grey[900]} sx={{mt: 2}}/>

            {/* SidebarFooter */}
            <SidebarFooter/>

        </Box>
    );
}

export default SidebarContent;