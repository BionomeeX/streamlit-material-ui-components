import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"

import React, { ReactNode } from "react";
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert'

function sendMessageToStreamlitClient(type: any, data: any) {
  var outData = Object.assign({
    isStreamlitMessage: true,
    type: type,
  }, data);
  window.parent.postMessage(outData, "*");
}

class AlertComponent extends StreamlitComponentBase<any> {
  constructor(props: any) {
    super(props)
    this.state = { open: true };
  }

  public render = (): ReactNode => {
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      this.setState({ open: false })
      style = {
        height: 0,
      }
      sendMessageToStreamlitClient("streamlit:setFrameHeight", { height: 0 });
    };


    const title = this.props.args["title"]
    const message = this.props.args["message"]
    const severity = this.props.args["severity"]
    const variant = this.props.args["variant"]
    const snackbar = this.props.args["snackbar"]
    const isFirstSnackbar = this.props.args["is_first_snackbar"]
    const paddingFromTop = this.props.args["padding_from_top"]

    let title_part = null;
    if (title != null) {
      title_part = <AlertTitle>{title}</AlertTitle>
    }
    let component = null;
    let style = {};


    if (snackbar === false) {
      component = (
        <Alert variant={variant} severity={severity}>
          {title_part}
          {message}
        </Alert>
      )
    }
    else {
      if (isFirstSnackbar) {
        style = {
          height: paddingFromTop,
        }

        component = (
          <Snackbar open={this.state.open} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <Alert onClose={handleClose} variant={variant} severity={severity} sx={{ width: '100%' }} >
              {title_part}
              {message}
            </Alert>
          </Snackbar >
        )
      } else {
        style = {
          height: 100
        }
        component = (
          <Snackbar open={this.state.open} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert onClose={handleClose} variant={variant} severity={severity} sx={{ width: '100%' }} >
              {title_part}
              {message}
            </Alert>
          </Snackbar >
        )
      }
    }
    return (
      <div style={style} >
        {component}
      </div>
    )
  }
}
export default withStreamlitConnection((AlertComponent))