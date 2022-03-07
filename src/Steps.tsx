import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Steps = () =>
(
    <Timeline position="left">
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>1. Door type</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>2. Size</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>3. Color</TimelineContent>
        </TimelineItem>
    </Timeline>
);

export default Steps;
