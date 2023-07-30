import {teal} from "@mui/material/colors";
import {ArrowLeftRounded} from "@mui/icons-material";
import {Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const Info = ({children}) => {
    const theme = useTheme();

    return(
        <Typography variant="body1" color={theme.palette.mode === "light" ? "black" : "whitesmoke"} textAlign="left" sx={{mt: 2}}>
            <ArrowLeftRounded fontSize="medium" sx={{verticalAlign: "bottom", color: teal[600]}}/>
            {children}
        </Typography>
    );
};

const DevInfo = () => {
    return(
        <>
            <Info>نام و نام خانوادگی : پوریا جمشیدپور</Info>
            <Info>سن : ۲۹</Info>
            <Info>شهر : تهران</Info>
            <Info>آدرس ایمیل : pouriya2910@gmail.com</Info>
        </>
    );
};

export default DevInfo;