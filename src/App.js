import {useEffect, useState} from "react";
import MainLayout from "./layouts/MainLayout";
import {Sidebar} from "./components/sidebar";
import PagesContainer from "./containers/PagesContainer";
import Page from "./pages/components/Page";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import SidebarContainer from "./containers/SidebarContainer";
import MainContext from "./context";
import {DrawerActionButton} from "./components/drawer";
import {Home, About, Resume, WorkSamples, Comments, Contact} from "./pages";


function App() {
    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [mode, setMode] = useState();

    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(() => {
        setMode(prefersDarkMode ? "dark" : "light");
    }, []);

    useEffect(() => {
        if (isMdUp) {
            setDrawerOpen(false);
        }
    }, [isMdUp]);

    const handlePageNumber = (event, newValue) => {
        setPageNumber(newValue);
    };

    const handleThemeChange = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    }

    return (
        <MainContext.Provider value={{
            pageNumber,
            handlePageNumber,
            drawerOpen,
            setDrawerOpen,
            handleThemeChange
        }}>
            <MainLayout mode={mode}>
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
                        <Comments helmetTitle="نظرات کاربران"/>
                    </Page>
                    <Page value={pageNumber} index={5}>
                        <Contact helmetTitle="ارتباط با من"/>
                    </Page>
                </PagesContainer>
            </MainLayout>
        </MainContext.Provider>
    );
}

export default App;
