import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"

import React, { ReactNode } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import CircularProgressWithLabel from './CircularProgressWithLabel';

// the `render()` function is called when component is re-rendered
class ProgressComponent extends StreamlitComponentBase<any> {

  public render = (): ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`

    const value = this.props.args["value"]
    const enable_label = this.props.args["enable_label"]
    console.log(enable_label)

    let progress = null;
    if (enable_label) {
      progress = <CircularProgressWithLabel value={value} />
    } else {
      if (value === -1) {
        progress = <CircularProgress />
      } else {
        progress = <CircularProgress variant="determinate" value={value} />
      }
    }
    return (
      <div>
        {progress}
      </div>
    )
  }
}
export default withStreamlitConnection(ProgressComponent)