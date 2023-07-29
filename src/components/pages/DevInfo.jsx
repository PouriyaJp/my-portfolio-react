import {teal} from "@mui/material/colors";
import {ArrowLeftRounded} from "@mui/icons-material";
import {Typography} from "@mui/material";

const DevInfo = ({children}) => {
    return(
        <Typography variant="body1" color="whitesmoke" textAlign="left" sx={{mt: 2}}>
            <ArrowLeftRounded fontSize="medium" sx={{verticalAlign: "bottom", color: teal[600]}}/>
            {children}
        </Typography>
    );
}

export default DevInfo;