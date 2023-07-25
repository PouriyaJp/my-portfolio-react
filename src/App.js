import {useState} from "react";
import MainLayout from "./layouts/MainLayout";
import {Sidebar} from "./components/sidebar";
import PagesContainer from "./containers/PagesContainer";
import Page from "./pages/components/Page";
import {Box, Typography} from "@mui/material";
import SidebarContainer from "./containers/SidebarContainer";
import MainContext from "./context";
import {DrawerActionButton} from "./components/drawer";
import Home from "./pages/Home";


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
                {/* DrawerActionButton */}
                <DrawerActionButton/>
                <PagesContainer>
                    <Page value={pageNumber} index={0}>
                        {/* Home */}
                        <Home></Home>
                    </Page>
                    <Page value={pageNumber} index={1}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>
                            درباره من
                        </Typography>
                    </Page>
                    <Page value={pageNumber} index={2}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>
                            رزومه من
                        </Typography>
                    </Page>
                    <Page value={pageNumber} index={3}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>
                            نمونه کار
                        </Typography>
                    </Page>
                    <Page value={pageNumber} index={4}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>
                            نظرات
                        </Typography>
                    </Page>
                    <Page value={pageNumber} index={5}>
                        <Typography variant="h5" sx={{textAlign: "center"}}>
                            ارتباط با من
                        </Typography>
                    </Page>
                </PagesContainer>
            </MainLayout>
        </MainContext.Provider>
    );
}

export default App;
