import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"

import CustomPagination from "./CustomPagination"
import React from "react";

import { withStyles, createStyles } from "@mui/styles"

const styles = createStyles(() => ({
  root: {
    padding: 1,
    width: "100%",
    backgroundColor: "transparent",
  },
}))


// the `render()` function is called when component is re-rendered
class PaginationComponent extends StreamlitComponentBase {
  render = () => {
    let { classes } = this.props

    // Default Args
    const numberOfPage = this.props.args["number_of_page"];
    const defaultPage = this.props.args["default"]

    // Style Args
    const variant = this.props.args["variant"]
    const shape = this.props.args["shape"]

    // Colors Args
    const backgroundColor = this.props.args["background_color"] ? this.props.args["background_color"]: this.props.theme.primaryColor
    const backgroundHoverColor = this.props.args["background_hover_color"] ? this.props.args["background_hover_color"]: this.props.theme.base
    const backgroundSelectedColor = this.props.args["background_selected_color"] ? this.props.args["background_selected_color"]: this.props.theme.secondaryBackgroundColor
    const textColor = this.props.args["text_color"] ? this.props.args["text_color"]: this.props.theme.textColor
    const textHoverColor = this.props.args["text_hover_color"] ? this.props.args["text_hover_color"]: this.props.theme.textColor

    return (
      <div className={classes.root}>
        <CustomPagination
          page={defaultPage}
          numberOfPage={numberOfPage}
          defaultPage={defaultPage}
          variant={variant}
          shape={shape}
          backgroundColor={backgroundColor}
          backgroundHoverColor={backgroundHoverColor}
          backgroundSelectedColor={backgroundSelectedColor}
          textColor={textColor}
          textHoverColor={textHoverColor}
        >
        </CustomPagination>
      </div>
    )
  }
}

export default withStreamlitConnection(withStyles(styles)(PaginationComponent))