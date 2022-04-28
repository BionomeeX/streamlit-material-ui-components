import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"

import React from "react";
import { withStyles, createStyles } from "@mui/styles"
import CustomAlert from './CustomAlert';


const styles = createStyles(() => ({
  root: {
    paddingTop: 1,
    width: "100%",
    backgroundColor: "transparent",
  },
}))

class AlertComponent extends StreamlitComponentBase {
  render = () => {
    let { classes } = this.props


    // Default Args
    const message = this.props.args["message"]

    // Optional Args
    const title = this.props.args["title"]
    const severity = this.props.args["severity"]
    const variant = this.props.args["variant"]
    const snackbar = this.props.args["snackbar"]

    return (
      <div className={classes.root} >
        <CustomAlert
          title={title}
          message={message}
          severity={severity}
          variant={variant}
          snackbar={snackbar}
        >
        </CustomAlert>
      </div>
    )
  }
}
export default withStreamlitConnection(withStyles(styles)(AlertComponent))