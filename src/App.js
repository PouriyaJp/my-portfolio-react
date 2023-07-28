import {useEffect, useState} from "react";
import MainLayout from "./layouts/MainLayout";
import {Sidebar} from "./components/sidebar";
import PagesContainer from "./containers/PagesContainer";
import Page from "./pages/components/Page";
import {Typography, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import SidebarContainer from "./containers/SidebarContainer";
import MainContext from "./context";
import {DrawerActionButton} from "./components/drawer";
import {Home, About, Resume, WorkSamples} from "./pages";


function App() {
    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    useEffect(() => {
        if (isMdUp) {
            setDrawerOpen(false);
        }
    }, [isMdUp]);

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
                <DrawerActionButton/>
                <PagesContainer>
                    <Page value={pageNumber} index={0}>
                        <Home helmetTitle="صفحه اصلی"/>
                    </Page>
                    <Page value={pageNumber} index={1}>
                        <About helmetTitle="درباره من"/>
                    </Page>
                    <Page value={pageNumber} index={2}>
                        <Resume helmetTitle="رزومه من"/>
                    </Page>
                    <Page value={pageNumber} index={3}>
                        <WorkSamples helmetTitle="نمونه کارها"/>
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
