import {devEdu} from "../../constants/details";
import {Slide, Typography} from "@mui/material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {SchoolRounded} from "@mui/icons-material";
import {deepPurple} from "@mui/material/colors";
import {useTheme} from "@mui/material/styles";

const DevEduTimeline = ({loading}) => {
    const theme = useTheme();

    return (
        <Timeline position="right">
            {
                devEdu.map((item, index) => (
                    <Slide direction="up" in={loading} style={{
                        transitionDelay: loading ? `${index + 3}99ms` : "0ms",
                    }}>
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot color="info" variant="outlined">
                                    <SchoolRounded color="info"/>
                                </TimelineDot>
                                {index !== 2 ? (<TimelineConnector/>) : null}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="caption" color={theme.palette.mode === "light" ? "black" : deepPurple[100]}>
                                    {item.year}
                                </Typography>
                                <Typography variant="body1" color={theme.palette.mode === "light" ? "black" : deepPurple[200]}>
                                    {item.cert}
                                </Typography>
                                <Typography variant="body2" color={theme.palette.mode === "light" ? "black" : deepPurple["A100"]}>
                                    {item.major}
                                </Typography>
                                <Typography variant="body2" color={theme.palette.mode === "light" ? "black" : deepPurple["A200"]}>
                                    {item.place}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Slide>
                ))
            }
        </Timeline>
    );
};

export default DevEduTimeline;