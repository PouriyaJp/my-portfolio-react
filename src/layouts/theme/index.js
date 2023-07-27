import {createTheme} from "@mui/material/styles";
import {blue, red} from "@mui/material/colors";

//NOTE Create Custom Theme
export const index = createTheme({
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
        fontFamily: "vazir, roboto",
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: {variant: "dashed"},
                    style: {
                        textTransform: "none",
                        border: `2px dashed ${blue[500]}`,
                    },
                },
                {
                    props: {variant: "dashed", color: "secondary"},
                    style: {
                        border: `4px dashed ${red[500]}`,
                    },
                },
            ],
        },
        MuiPaper: {
            styleOverrides: {
                root: {backgroundImage: 'unset'}
            },
        },
    },
});
