import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';

function Upage_one1() {
  return (
    <div >
      <AppBar position="static" sx={{background:"#02A3C1"}}>
            <Toolbar>
            <Typography variant="h6">
           
            </Typography>

            </Toolbar>
        </AppBar>
       <Grid container>
      <Grid item xs={12} sm={3}>
        <Typography variant="h4" mt={2} mb={2} align={"left"} ml={2}>
          <span className=" rounded-circle p-1 text-white fw-bold" style={{background:"#02A3C1" }}>AI </span>
          haram
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        < div className='text-center p-4' >
          Budget-Friendly & Luxury Package For A Convenient Hajj & Umrah
          Journeyto The Holly Makkah & Madina For Muslim Brothers & Sisters
        </div>
      </Grid>
    </Grid>

    <Typography className='text-white'  variant="h6" style={{background:"#02A3C1" }} sx={{flexGrow:1}}>
          <div className='text-center p-4'><h2> Booking Summary</h2>
</div>
</Typography> 
      

        {/* <div className="col-12 cl-md-8"> */}
        {/* <AppBar position="fixed" sx={{background:"#02A3C1"}}>
            <Toolbar>
            <Typography variant="h6">
           
            </Typography>

            </Toolbar>
        </AppBar>
<Typography mt={10}>Budget-Friendly & Luxury Package For a  Convenient Hajj & Umrah Journeyto The Holly <br />
Makkah & Madina For Muslim Brothers & Sisters</Typography>



<AppBar position="static" sx={{background:"#02A3C1"}}>
            <Toolbar>
            <Typography variant="h4" sx={{flexGrow:1}}>
            Umrah Packages
            </Typography>
           
 
            </Toolbar>
            <Typography variant="h6" sx={{flexGrow:1}}>
Budget-Friendly & Luxury Package for a  convenient hajj & umrah journeyto the holly <br/>
Makkah & Madina For Muslim Brothers & Sisters
</Typography> 
        </AppBar>
        </div> */}

    </div>
  )
}

export default Upage_one1