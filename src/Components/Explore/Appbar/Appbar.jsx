import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography'
import { Box } from "@mui/system";
import Grid from '@mui/material/Grid'

// import Typography from "@mui/material/Typography";

function Appbar() {
  return (
    
   
    <AppBar position="static"  sx={{background:"#02A3C1" }}>
        <Toolbar>
          {/* <Typography variant="h6"></Typography> */}
        </Toolbar>
      </AppBar>
 
      
  
  );
}

export default Appbar;
