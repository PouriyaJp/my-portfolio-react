import {Avatar, Box, Divider, Hidden, Tab, Tabs, Typography} from "@mui/material";
import {blue, grey} from "@mui/material/colors";
import {
    ConnectWithoutContactRounded, CopyrightRounded,
    FaceRounded, FavoriteRounded,
    HomeRounded,
    MessageRounded,
    TerminalRounded,
    TextSnippetRounded
} from "@mui/icons-material";


const DrawerContents = ({value, handleChange}) => {
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tab-panel-${index}`,
        };
    };

    return (
        <Box
            // display={{ sm: "none" }}
            sx={{
                justifyContent: "center",
                textAlign: "center",
                mt: 2,
            }}
        >
            <Avatar
                src={require("../../assets/avatar.jpg")}
                variant="rounded"
                sx={{height: 200, width: 200, margin: "0 auto",
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

            <Divider variant="middle" color={grey[900]} sx={{mt: 2}}/>

            <Tabs
                orientation="vertical"
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                value={value}
                onChange={handleChange}
            >
                <Tab
                    label="صفحه اصلی"
                    icon={<HomeRounded/>}
                    iconPosition="start"
                    sx={{color: blue[50]}}
                    {...tabProps(0)}
                />
                <Tab
                    label="درباره من"
                    icon={<FaceRounded/>}
                    iconPosition="start"
                    sx={{color: blue[50]}}
                    {...tabProps(1)}
                />
                <Tab
                    label="رزومه من"
                    icon={<TextSnippetRounded/>}
                    iconPosition="start"
                    sx={{color: blue[50]}}
                    {...tabProps(2)}
                />
                <Tab
                    label="نمونه کارها"
                    icon={<TerminalRounded/>}
                    iconPosition="start"
                    sx={{color: blue[50]}}
                    {...tabProps(3)}
                />
                <Tab
                    label="نظرات"
                    icon={<MessageRounded/>}
                    iconPosition="start"
                    sx={{color: blue[50]}}
                    {...tabProps(4)}
                />
                <Tab
                    label="ارتباط با من"
                    icon={<ConnectWithoutContactRounded/>}
                    iconPosition="start"
                    sx={{color: blue[50]}}
                    {...tabProps(5)}
                />
            </Tabs>
            <Divider variant="middle" color={grey[900]} sx={{mt: 2}}/>

            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    alignItems: "center",
                    height: 100
                }}
            >
                <Typography variant="subtitle2" color="whitesmoke">
                    طراحی شده با {" "}
                    <FavoriteRounded sx={{verticalAlign: "middle", color: "tomato", height: 20}}/>
                </Typography>
                <Typography variant="caption" color="whitesmoke" sx={{mt: 2}}>
                    کپی رایت ۱۴۰۱ {" "} <CopyrightRounded sx={{verticalAlign: "middle", height: 16}}/>
                </Typography>
            </Box>

        </Box>
    );
}

export default DrawerContents;