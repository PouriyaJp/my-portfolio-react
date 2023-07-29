import {devEdu} from "../../constants/details";
import {Slide, Typography} from "@mui/material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {SchoolRounded} from "@mui/icons-material";
import {deepPurple} from "@mui/material/colors";

const DevEduTimeline = ({loading}) => {
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
                                <Typography variant="caption" color={deepPurple[100]}>
                                    {item.year}
                                </Typography>
                                <Typography variant="body1" color={deepPurple[200]}>
                                    {item.cert}
                                </Typography>
                                <Typography variant="body2" color={deepPurple["A100"]}>
                                    {item.major}
                                </Typography>
                                <Typography variant="body2" color={deepPurple["A200"]}>
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