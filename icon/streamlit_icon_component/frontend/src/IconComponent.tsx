import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"

import React, { ReactNode } from "react";
// import * as Icons from '@material-ui/icons'
import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';

// the `render()` function is called when component is re-rendered
import Icon from '@mui/material/Icon';

class IconComponent extends StreamlitComponentBase<any> {

  buttonClicked = () => {
    Streamlit.setComponentValue(true)
  }
  public render = (): ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`

    const icon_name = this.props.args["icon_name"]
    const icon_button = this.props.args["icon_button"]
    const disabled = this.props.args["disabled"]
    const icon_size = this.props.args["icon_size"]

    const style = { padding: 1 }

    let component = null;
    let icon = <Icon fontSize={icon_size}>{icon_name}</Icon>
    
    if (icon_button) {
      component = (
        <IconButton disabled={disabled} onClick={() => this.buttonClicked()}>
          {icon}
        </IconButton>
      )
    } else {
      component = icon
    }

    return (
      <div style={style}>
        {component}
      </div>
    )
  }
}

export default withStreamlitConnection(IconComponent)