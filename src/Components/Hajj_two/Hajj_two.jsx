import React from 'react'
import Checkbox from '@mui/material/Checkbox';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
    import { Link } from 'react-router-dom';
import Hajj_Card2 from './Hajj_Card2/Hajj_Card2';
import Selecter from '../Seleter/Selecter';
// import Umrah_card from './Umrah_card/Umrah_card';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function valuetext(value) {
  return `${value}°C`;
}
function Hajj_two() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div class="container-fluid mt-4">
   
    <div class="row">
      <div class="col-12 col-lg-3   ">
        <div className='card mb-2'>
      <Link to="/">  <button className='btn btn-info w-100 text-white budget_button'> <h5 > Budget Range </h5></button></Link> 
      <label for="customRange1" class="form-label text-center pt-3">Rs 10,000 To 100,000</label>
      <div className="container">
      <Box sx={{textAlign:'center' }}>
      <Slider
      className='slider_range'
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        
      />
    </Box>
     </div></div>
    
            {/* <div class="list-group card mb-3">
            <Link to="/Umra2_main"> <button type="button" class=" btn ucard w-100" >
      Departure Country
    </button></Link>
  
  
    <div className='d-flex '><Checkbox {...label} /><p className='pt-3'>Egypt   </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>India   </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>Pakistan </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>Bangladesh    </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>Malayshia    </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>Turkey   </p></div>
    
  
    </div>
   
    <div class="list-group card mb-3">
            <Link to="/Umra_main"> <button type="button" class=" btn  w-100" >
      Departure City
    </button></Link>
  
    
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>Lahore   </p> </div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>Karachi   </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>Islamabad  </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>Delhi    </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>Bombay    </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>Baku   </p></div>
    
  
    </div>
    <div class="list-group card mb-3">
            <Link to="/Umra_main"> <button type="button" class=" btn btn-info w-100" >
    Month of Travel
    </button></Link>
  
    
    <span className='d-flex'><Checkbox {...label} /><p className='pt-3'>Oct 2022   </p></span>
    <span className='d-flex'><Checkbox {...label} /><p className='pt-3'>Nov 2022   </p></span>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>Dec 2022  </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>Jan 2023  </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>Feb 2023   </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>March 2023  </p></div>
    
  
    
    </div>
    <div class="list-group card mb-3">
            <Link to="/Umra_main"> <button type="button" class=" btn btn-info w-100" >
   No of Day
    </button></Link>
  
    
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>7 To 10 Days   </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>10 To 15 Days   </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>15 To 18 Days  </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>12 To 23 Days    </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>12 To 56 Days    </p></div>
    <div className='d-flex'><Checkbox {...label} /><p className='pt-3'>1 To 10 Days   </p></div>
    
  
    </div> */}
    <Selecter/>
      </div>

      
      

      <div class="col-12 col-md-9 ">
<Hajj_Card2/>
<Hajj_Card2/>
<Hajj_Card2/>
<Hajj_Card2/>
<Hajj_Card2/>
<Hajj_Card2/>
<Hajj_Card2/>
<Hajj_Card2/>                     
     
      </div>
        {/* ///////////////// */}
      
    </div>
   </div>
  )
}

export default Hajj_two