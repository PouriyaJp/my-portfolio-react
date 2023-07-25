import {Avatar, Typography} from "@mui/material";
import avatar from "../../assets/avatar.jpg";

const SidebarHeader = () => {
    return (
        <>
            <Avatar
                src={avatar}
                variant="rounded"
                sx={{
                    height: 200, width: 200, margin: "0 auto",
                    display: {
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",
                    }
                }}
            >
                PJ
            </Avatar>
            <Typography
                variant="h6"
                color="whitesmoke"
            >
                پوریا جمشیدپور
            </Typography>

            <Typography
                variant="caption"
                color="whitesmoke"
            >
                برنامه نویسی و توسعه دهنده فول استک
            </Typography>
        </>
    );
}
export default SidebarHeader;