import {createTheme} from "@mui/material/styles";

export const darkTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "dark",
        primary: {
            main: "#8be9fd",
        },
        secondary: {
            main: "#311b92",
        },
    },
    typography: {
        fontFamily: "tanha, vazir, roboto",
    },
});

export const lightTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "light",
        primary: {
            main: "#8be9fd",
        },
        secondary: {
            main: "#311b92",
        },
    },
    typography: {
        fontFamily: "tanha, vazir, roboto",
    },
});