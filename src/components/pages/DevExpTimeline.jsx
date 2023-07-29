import {devExp} from "../../constants/details";
import {Slide, Typography} from "@mui/material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {HomeRepairServiceRounded} from "@mui/icons-material";
import {yellow} from "@mui/material/colors";

const DevExpTimeline= ({loading}) => {
    return(
        <Timeline position="right" sx={{direction: "ltr"}}>
            {devExp.map((item, index) => (
                <Slide direction="up" in={loading} style={{
                    transitionDelay: loading ? `${index + 3}99ms` : "0ms",
                }}>
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot
                                color="warning"
                                variant="outlined"
                            >
                                <HomeRepairServiceRounded color="warning"/>
                            </TimelineDot>
                            {index !== 2 ? (<TimelineConnector/>) : null}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="caption" color={yellow["A100"]}>
                                {item.year}
                            </Typography>
                            <Typography variant="body1" color={yellow["A200"]}>
                                {item.date}
                            </Typography>
                            <Typography variant="body2" color={yellow["A700"]}>
                                {item.work}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Slide>
            ))}
        </Timeline>
    );
};

export default DevExpTimeline;