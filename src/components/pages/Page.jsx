import {Box} from "@mui/material";

const Page = (props) => {
    const {children, value, index, ...others} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tab-panel-${index}`}
            aria-labelledby={`sidebar-tab-${index}`}
            {...others}
        >
            {value === index && (
                <Box sx={{height: "100vh", overflow: "hidden"}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default Page;