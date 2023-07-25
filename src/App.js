import {useState} from "react";
import MainLayout from "./layouts/MainLayout";
import {Sidebar} from "./components/sidebar";
import ContentContainer from "./containers/ContentContainer";
import TabPanel from "./components/TabPanel";
import {Typography} from "@mui/material";
import SidebarContainer from "./containers/SidebarContainer";
import MainContext from "./context";


function App() {
    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handlePageNumber = (event, newValue) => {
        setPageNumber(newValue);
    };

    return (
        <MainContext.Provider value={{
            pageNumber,
            handlePageNumber,
            drawerOpen,
            setDrawerOpen
        }}>
            <MainLayout>
                <SidebarContainer>
                    <Sidebar/>
                </SidebarContainer>
                <ContentContainer>
                    <TabPanel value={pageNumber} index={0}>
                        <Typography component="h5" sx={{textAlign: "center"}}>
                            صفحه اصلی
                        </Typography>
                    </TabPanel>
                    <TabPanel value={pageNumber} index={1}>
                        <Typography  component="h5" sx={{textAlign: "center"}}>
                            درباره من
                        </Typography>
                    </TabPanel>
                    <TabPanel value={pageNumber} index={2}>
                        <Typography component="h5" sx={{textAlign: "center"}}>
                            رزومه من
                        </Typography>
                    </TabPanel>
                    <TabPanel value={pageNumber} index={3}>
                        <Typography component="h5" sx={{textAlign: "center"}}>
                            نمونه کار
                        </Typography>
                    </TabPanel>
                    <TabPanel value={pageNumber} index={4}>
                        <Typography component="h5" sx={{textAlign: "center"}}>
                            نظرات
                        </Typography>
                    </TabPanel>
                    <TabPanel value={pageNumber} index={5}>
                        <Typography component="h5" sx={{textAlign: "center"}}>
                            ارتباط با من
                        </Typography>
                    </TabPanel>
                </ContentContainer>
            </MainLayout>
        </MainContext.Provider>
    );
}

export default App;
