import {useContext} from "react";
import MainContext from "../../context";
import {Tab, Tabs} from "@mui/material";
import {
    ConnectWithoutContactRounded,
    FaceRounded,
    HomeRounded,
    MessageRounded,
    TerminalRounded,
    TextSnippetRounded
} from "@mui/icons-material";
import {blue, grey} from "@mui/material/colors";

const SidebarTabs = () => {
    const {pageNumber, handlePageNumber, setDrawerOpen} = useContext(MainContext);
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tab-panel-${index}`,
        };
    };

    return(
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={pageNumber}
            onChange={handlePageNumber}
        >
            <Tab
                label="صفحه اصلی"
                icon={<HomeRounded/>}
                iconPosition="start"
                sx={{
                    color: blue[50], "&.MuiTab-root": {
                        minHeight: 50,
                        backgroundColor: grey[800],
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1
                    }
                }}
                onClick={() => setDrawerOpen(false)}
                {...tabProps(0)}
            />
            <Tab
                label="درباره من"
                icon={<FaceRounded/>}
                iconPosition="start"
                sx={{
                    color: blue[50], "&.MuiTab-root": {
                        minHeight: 50,
                        backgroundColor: grey[800],
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1
                    }
                }}
                onClick={() => setDrawerOpen(false)}
                {...tabProps(1)}
            />
            <Tab
                label="رزومه من"
                icon={<TextSnippetRounded/>}
                iconPosition="start"
                sx={{
                    color: blue[50], "&.MuiTab-root": {
                        minHeight: 50,
                        backgroundColor: grey[800],
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1
                    }
                }}
                onClick={() => setDrawerOpen(false)}
                {...tabProps(2)}
            />
            <Tab
                label="نمونه کارها"
                icon={<TerminalRounded/>}
                iconPosition="start"
                sx={{
                    color: blue[50], "&.MuiTab-root": {
                        minHeight: 50,
                        backgroundColor: grey[800],
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1
                    }
                }}
                onClick={() => setDrawerOpen(false)}
                {...tabProps(3)}
            />
            <Tab
                label="نظرات"
                icon={<MessageRounded/>}
                iconPosition="start"
                sx={{
                    color: blue[50], "&.MuiTab-root": {
                        minHeight: 50,
                        backgroundColor: grey[800],
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1
                    }
                }}
                onClick={() => setDrawerOpen(false)}
                {...tabProps(4)}
            />
            <Tab
                label="ارتباط با من"
                icon={<ConnectWithoutContactRounded/>}
                iconPosition="start"
                sx={{
                    color: blue[50], "&.MuiTab-root": {
                        minHeight: 50,
                        backgroundColor: grey[800],
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1
                    }
                }}
                onClick={() => setDrawerOpen(false)}
                {...tabProps(5)}
            />
        </Tabs>
    );
}

export default SidebarTabs;