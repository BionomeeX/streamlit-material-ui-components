
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

const useStyles = makeStyles({
    snackbar: () => ({
        width: "100%",
        paddingRight: 8
    })
});

function sendMessageToStreamlitClient(type, data) {
    var outData = Object.assign({
        isStreamlitMessage: true,
        type: type,
    }, data);
    window.parent.postMessage(outData, "*");
}

export default function CustomAlert(props) {
    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
        sendMessageToStreamlitClient("streamlit:setFrameHeight", { height: 0 });
    };

    const [open, setOpen] = useState(true);
    let alert = null;
    let snackbar = null;
    let component = null;
    let title = null;

    const styleProps = {
    };
    const classes = useStyles(styleProps);
    const close = props.snackbar ? handleClose : null
    let style = {}

    title = <AlertTitle>{props.title}</AlertTitle>
    alert = (
        <Alert onClose={close} variant={props.variant} severity={props.severity}>
            {title}
            {props.message}
        </Alert>
    )

    if (props.snackbar) {
        style = { height: 80 }
        snackbar = (
            <Snackbar open={open} onClose={handleClose} classes={{ root: classes.snackbar }} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={close} variant={props.variant} severity={props.severity} sx={{ width: '100%' }}>
                    {title}
                    {props.message}
                </Alert>
            </Snackbar>
        )
    }
    component = props.snackbar ? snackbar : alert

    return (
        <div style={style}>
            {component}
        </div >
    )
}