import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"

import React, { ReactNode } from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

// the `render()` function is called when component is re-rendered

class AlertComponent extends StreamlitComponentBase<any> {

  public render = (): ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`

    const title = this.props.args["title"]
    const message = this.props.args["message"]
    const severity = this.props.args["severity"]
    const variant = this.props.args["variant"]
    // const disabled = this.props.args["disabled"]
    // const icon_size = this.props.args["icon_size"]
    // const SelectedIcon = Icons[icon_name];

    const style = {  }

    // TODO Add Color args
    let title_part = null;
    if (title != null) {
      title_part = <AlertTitle>{title}</AlertTitle>
    }
    let component = null;


    component = (
      <Alert variant={variant} severity={severity}>
        {title_part}
        {message}
      </Alert>
    )
    // if (icon_type == "button" && disabled) {
    //   component = (
    //     <IconButton disabled>
    //       <Icon fontSize={icon_size}>{icon_name}</Icon>
    //     </IconButton>
    //   )
    // } else if (icon_type === "button") {
    //   component = (
    //     <IconButton>

    //       <Icon fontSize={icon_size}>{icon_name}</Icon>
    //     </IconButton>
    //   )
    // } else {
    //   component = <Icon fontSize={icon_size}>{icon_name} </Icon>
    // }

    return (
      <div style={style}>
        {component}
      </div>
    )
  }
}

export default withStreamlitConnection(AlertComponent)