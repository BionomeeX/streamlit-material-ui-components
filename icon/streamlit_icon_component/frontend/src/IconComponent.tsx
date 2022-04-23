import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"

import React, { ReactNode } from "react";
import * as Icons from '@material-ui/icons'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

// the `render()` function is called when component is re-rendered
import Icon from '@mui/material/Icon';

class IconComponent extends StreamlitComponentBase<any> {

  public render = (): ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`

    const icon_name = this.props.args["icon_name"]
    const icon_type = this.props.args["icon_type"]
    const disabled = this.props.args["disabled"]
    const icon_size = this.props.args["icon_size"]
    const SelectedIcon = Icons[icon_name];

    const style = { padding: 1 }

    // TODO Add Color args

    let component = null;

    if (icon_type == "button" && disabled) {
      component = (
        <IconButton disabled>
          <Icon fontSize={icon_size}>{icon_name}</Icon>
        </IconButton>
      )
    } else if (icon_type === "button") {
      component = (
        <IconButton>

          <Icon fontSize={icon_size}>{icon_name}</Icon>
        </IconButton>
      )
    } else {
      component = <Icon fontSize={icon_size}>{icon_name} </Icon>
    }

    return (
      <div style={style}>
        {component}
      </div>
    )
  }
}

export default withStreamlitConnection(IconComponent)