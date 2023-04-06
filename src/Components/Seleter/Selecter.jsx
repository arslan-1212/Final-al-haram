import React from 'react'
import Checkbox from '@mui/material/Checkbox';
function Selecter() {
  return (
    <div>
<div class="dropdown mb-4">
  <a class="btn ucard w-100 mt-3 text-start text-white dropdown-toggle pe-5" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
  Departure Country
  </a>


  <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>Egypt   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>India   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>Pakistan   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>Bangladesh   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>Malayshia   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '> Turkey  </p> </div><p className='mt-3 fff ' >   </p></li>
  </ul>
</div>
<div class="dropdown mb-4">
  <a class="btn ucard w-100 text-start text-white dropdown-toggle pe-5" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
  Departure City
  </a>

  <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>Karachi      </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>Islamabad    </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>Delhi   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>Bombay   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>Baku   </p> </div><p className='mt-3 fff ' >   </p></li>
  {/* <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>   </p> </div><p className='mt-3 fff ' >   </p></li> */}
  </ul>
</div>
<div class="dropdown mb-4">
  <a class="btn ucard w-100 text-start text-white dropdown-toggle pe-5" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
 Month Of Travel
  </a>

  <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">     
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>Oct 2022   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>Nov 2022   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>Dec 2022   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>Jan 2023   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '> Feb 2023   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>March 2023   </p> </div><p className='mt-3 fff ' >   </p></li>
  </ul>
</div>
<div class="dropdown mb-4">
  <a class="btn ucard w-100 text-start text-white dropdown-toggle pe-5" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
 No of Days
  </a>

  <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">      
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>7 To 10 Days   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>10 To 15 Days   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>15 To 18 Days   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>12 To 23 Days   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>12 To 56 Days   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex '><Checkbox className=''/><p className='mt-3 pt-0  '>1 To 10 Days   </p> </div><p className='mt-3 fff ' >   </p></li>
  </ul>
</div>
</div>
  )
}

export default Selecter
