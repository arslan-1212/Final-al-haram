import React from 'react'

import "./Al_haram_footer.css"
import she from "../Assets/she.png"
import smi from "../Assets/smi.png"

import box from "../Assets/box.png"
import boxx from "../Assets/boxx.png"

function Al_haram_footer() {
  return (
    <div className='al_haam_footer'>
          <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-3 mt-3">
                       <div className='d-flex align-items-center'>
                        <div>
                 
                    <img src={she} className='w-40' alt="" />
                    </div>
                    <div>
                      <span className='footer_icons_para mt-3 ms-3 '>1500+ verified agents</span>
                      </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                       <div className='d-flex align-items-center'>
                        <div> <img src={smi} className='w-40' alt="" /></div>
                   <div>
                   
                      <span className='footer_icons_para mt-3 ms-3 '>1 Lakh+ verified guests</span></div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                       <div className='d-flex align-items-center'>
                        <div>
               
                    <img src={box} className='w-40 rsponSIVE_mr' alt=""  /></div>
                    <div>
                      <span className='footer_icons_para mt-3 ms-3 '> 1k + Packages</span>
                      </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                       <div className='d-flex align-items-center'>
                        <div>
            
                    <img src={boxx} alt="" className='w-40 rsponSIVE_mr'  />
                    </div>
                    <div>
                      <span className='footer_icons_para mt-3 resssssspon '>2 Lakh+ Booking</span>
                      </div>
                    </div>
                </div>
            </div>
          </div>
      
    </div>
  )
}

export default Al_haram_footer
