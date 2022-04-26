import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"

import React, { ReactNode } from "react";
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
// the `render()` function is called when component is re-rendered
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class AlertComponent extends StreamlitComponentBase<any> {
  constructor(props: any) {
    super(props)
    this.state = { open: true };
  }
  public render = (): ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      this.setState({ open: false })
    };


    const title = this.props.args["title"]
    const message = this.props.args["message"]
    const severity = this.props.args["severity"]
    const variant = this.props.args["variant"]
    const snackbar = this.props.args["snackbar"]

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
      style = {
        height: 100,
      }
      console.log("snackbar")
      console.log(this.state.open)

      component = (
        <Snackbar open={this.state.open} autoHideDuration={6000} onClose={handleClose}  >
          <Alert onClose={handleClose} variant={variant} severity={severity} sx={{ width: '100%' }}>
            {title_part}
            {message}
          </Alert>
        </Snackbar>
      )
    }
    return (
      <div style={style}>
        {component}
      </div>
    )
  }
}

export default withStreamlitConnection(AlertComponent)