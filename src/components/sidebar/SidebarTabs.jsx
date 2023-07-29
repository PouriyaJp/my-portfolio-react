import {useContext} from "react";
import MainContext from "../../context";
import {Tab, Tabs} from "@mui/material";
import {blue} from "@mui/material/colors";
import {tabsData} from "../../constants/tabsData";

const SidebarTabs = () => {
    const {pageNumber, handlePageNumber, setDrawerOpen} = useContext(MainContext);
    const data = tabsData();

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={pageNumber}
            onChange={handlePageNumber}
        >
            {data.map((tab, index) => (
                <Tab key={index} label={tab.label} icon={tab.icon} iconPosition="start" sx={{
                        color: blue[50], "&.MuiTab-root": {
                            minHeight: 50,
                            backgroundColor: "rgb(14,14,14)",
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