import {ThemeProvider, createTheme} from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import {HelmetProvider, Helmet} from "react-helmet-async";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import {} from "@mui/material";
import "./App.css";

// Create Theme
const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "vazir, roboto"
    }
});
// Create Rtl Cache
const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
})

function App() {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>وب سایت شخصی پوریا جمشیدپور</title>
                    </Helmet>
                    <div className="App">

                    </div>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;
