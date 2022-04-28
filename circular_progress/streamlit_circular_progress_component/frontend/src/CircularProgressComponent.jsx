import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"

import React from "react";
import CustomCircularProgressWithLabel from './CustomCircularProgressWithLabel';
import CustomCircularProgress from './CustomCircularProgress';
import { withStyles, createStyles } from "@mui/styles"

const styles = createStyles(() => ({
  root: {
    width: "100%",
    backgroundColor: "transparent",
  },
}))

// the `render()` function is called when component is re-rendered
class ProgressComponent extends StreamlitComponentBase {

  render = () => {
    let { classes } = this.props
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`

    // Optional Args
    const value = this.props.args["value"]
    const enableLabel = this.props.args["enable_label"]
    const variant = this.props.args["variant"]

    return (
      enableLabel ? (
        <div className={classes.root}>
          <CustomCircularProgressWithLabel
            value={value}
            variant={variant}
          >
          </CustomCircularProgressWithLabel>
        </div>) : (
        <div className={classes.root}>
          <CustomCircularProgress
            value={value}
            variant={variant}
          >
          </CustomCircularProgress>
        </div>
      )
    )
  }
}
export default withStreamlitConnection(withStyles(styles)(ProgressComponent))