import {
  Streamlit
} from "streamlit-component-lib"

import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Pagination from '@mui/material/Pagination';

const useStyles = makeStyles({
  ul: (styleProps) =>({
    '& .MuiPaginationItem-root': {
      backgroundColor: styleProps.backgroundColor,
      color: styleProps.textColor,
      '&.Mui-selected': {
        background: styleProps.backgroundSelectedColor,
        color: styleProps.textColor,
      },
      '&.Mui-selected:hover': {
        background: styleProps.backgroundHoverColor,
        color: styleProps.textHoverColor
      }
    },
    '& .MuiPaginationItem-root:hover': {
      background: styleProps.backgroundHoverColor,
      color: styleProps.textHoverColor
    }
  })
});

export default function CustomPagination(props) {
  const handlePageChange = (page) => {
    setPage(page)
    Streamlit.setComponentValue(page)
  }

  const [page, setPage] = useState(props.page);
  const styleProps = { 
    backgroundColor: props.backgroundColor,
    backgroundHoverColor: props.backgroundHoverColor,
    backgroundSelectedColor: props.backgroundSelectedColor,
    textColor: props.textColor,
    textHoverColor: props.textHoverColor
  };
  const classes = useStyles(styleProps);
  return (
    <Pagination
    page={page}
    defaultPage={props.defaultPage}
    count={props.numberOfPage}
    variant={props.variant}
    shape={props.shape}
    onChange={(e, val) => handlePageChange(val)}
    classes={{
      root: classes.ul,
    }}
  />
  )
}
