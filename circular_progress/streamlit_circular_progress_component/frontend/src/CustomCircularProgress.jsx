import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
});

export default function CustomCircularProgress(props) {
    const styleProps = {
    };
    const classes = useStyles(styleProps);
    console.log(props.variant)
    return (
        <CircularProgress value={props.value} variant={props.variant}>Ok</CircularProgress>
    );
}