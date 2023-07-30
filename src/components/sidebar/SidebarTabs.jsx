import {useContext} from "react";
import MainContext from "../../context";
import {Tab, Tabs} from "@mui/material";
import {blue, brown} from "@mui/material/colors";
import {tabsData} from "../../constants/tabsData";
import {useTheme} from "@mui/material/styles";

const SidebarTabs = () => {
    const theme = useTheme();
    const {pageNumber, handlePageNumber, setDrawerOpen} = useContext(MainContext);
    const data = tabsData();

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            textColor={theme.palette.mode === "light" ? "secondary" : "primary"}
            indicatorColor={theme.palette.mode === "light" ? "secondary" : "primary"}
            value={pageNumber}
            onChange={handlePageNumber}
        >
            {data.map((tab, index) => (
                <Tab key={index} label={tab.label} icon={tab.icon} iconPosition="start" sx={{
                        color: blue[50], "&.MuiTab-root": {
                            minHeight: 50,
                            backgroundColor: theme.palette.mode === "light" ? brown["A200"] : "rgb(14,14,14)",
                            borderRadius: 2,
                            my: 0.5,
                            mx: 1
                        }
                    }}
                    onClick={() => setDrawerOpen(false)}
                    {...tab}
                />
            ))}
        </Tabs>
    );
}

export default SidebarTabs;