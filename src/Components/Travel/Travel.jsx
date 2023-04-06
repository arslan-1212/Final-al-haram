import React from 'react'
import logo_h from "../Assets/logo_h.png"
import "./Travel.css"
import i from "../Assets/i.png"
import card from"../Assets/card.png"
import Qar from "../Assets/Qar.png"
import play from "../Assets/play.png"
import app from "../Assets/app.png"
import {RiPlaystationFill} from "react-icons/ri"

function Travel() {
  return (
    <div className='main_travel my-5'>
        <div className="container travel_bg_color">
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-9 text-start">
                    <div>
                    <img src={logo_h} alt="" />
                    </div>
                    <div>
                        <h4 className='travel_heading'>Your ultimate spiritual travel companion</h4>
                        <p className='travel_para'>Book in advance or last-minute with al-haram.
Receive instant confirmation. Access your booking info offline.</p>
                    </div>
                 <div className="row">
                    <div className="col-md-6">
                        <div>
                            <h5 className='travel_send_heading'>Send a link to your mobile phone</h5>
                            <div className='contact_us d-flex justify-content-between'>
                                <div>
                                +91  123 4567 8910</div>
                                <button className='send_me_btn'>Send me</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3">
                        <div className='Res_pro'>
                            <h5 className='travel_sub_heading'>scan qR code</h5>
                            <img src={Qar} alt="" />

                        </div>
                    </div>
                    <div className="col-md-12 col-lg-3 mt-3">
                        <div>
                            <h5 className='travel_sub_heading'>download the app</h5>
                            <div className='d-flex align-items-center justify-content-center travel mt-4'>
              {/* <RiPlaystationFill className='text-white fs-4'></RiPlaystationFill> */}
              <img src={play} className='play_img' alt="" />
              <p className='ms-2 text-white m-0 fs-6 buttton_heading'>google play store</p>
              {/* <p className='ms-2 text-white m-0 fs-6 '>google play store</p> */}
            </div>
                            <div className='d-flex justify-content-center align-items-center travel mt-2'>
              {/* <RiPlaystationFill className='text-white fs-4'></RiPlaystationFill> */}
                 <img src={app} alt=""  className='play_img' />
              <p className='ms-2 text-white m-0 fs-6 buttton_heading'>google play store</p>
            </div>

                        </div>
                    </div>
                 </div>

                </div>

                <div className="col-md-3 mt-3">
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={i} className='i_phone' alt="" />
                        <img src={card} className='i_phone_card' alt="" />
                    </div>
                </div>
            </div>


        </div>

    </div>
      
      

  )
}

export default Travel
