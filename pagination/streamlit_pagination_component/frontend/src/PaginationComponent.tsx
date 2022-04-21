import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"

import React, { useEffect, useState, ReactNode } from "react";
import Pagination from '@mui/material/Pagination';

// the `render()` function is called when component is re-rendered
class PaginationComponent extends StreamlitComponentBase<any> {
  state = {
    page: 1,
  }

  handlePageChange = (page: any) => {
    this.setState({ page })
    Streamlit.setComponentValue(page)
  }

  public render = (): ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`
    const number_of_page = this.props.args["number_of_page"];
    const default_page = this.props.args["default"]
    const { page } = this.state
    return (

      <div>
        <Pagination
          page={page}
          defaultPage={default_page}
          count={number_of_page} variant="outlined"
          onChange={(e, val) => this.handlePageChange(val)}
        />
      </div>
    )
  }
}

// connection between component and Streamlit
export default withStreamlitConnection(PaginationComponent)