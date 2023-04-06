import React from 'react'
import "./Umrah_deals.css"
import img from "../Assets/img.png"
import {MdOutlineFlightTakeoff} from "react-icons/md"
import {BiBus} from "react-icons/bi"
import {BsBoxSeam} from "react-icons/bs"
import {AiFillFire} from "react-icons/ai"
import {RiCustomerService2Fill} from "react-icons/ri"
import {ImPriceTag} from "react-icons/im"
import {TbBrandBooking} from "react-icons/tb"
import fire from "../Assets/fire.png"
import user from "../Assets/user.png"
import b from "../Assets/b.png"
import b1 from "../Assets/b1.png"
import c from "../Assets/c.png"
import c1 from "../Assets/c1.png"
import f from "../Assets/f.png"
// import {TbBrandBooking} from "react-icons/tb"
import uc from "../Assets/uc.png"
import { Link } from 'react-router-dom';



function Umrah_deals() {
  return (
    <div className='umrah_deal_main'>
        <h1 className='umrah_deal_heading'>popular umrah deals</h1>
        <p className='uramh_deal_para'>trending umrah packages from popular destinations</p>
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-md-2 col-12">
                <Link to='/Umrah_package'><button className='umrah_deal_btn clr_umrah_btn me-2'>umrah packages</button></Link>
                </div>
                <div className="col-md-2 col-12">
                <Link to='/Land_packagess'><button className='umrah_deal_btn'>land packages </button></Link>
                </div>
                <div className="col-md-2 col-12">
                <Link to='/hajj_packages'><button className='umrah_deal_btn'>hajj packages</button></Link>
                </div>
                <div className="col-md-2 col-12">
                <Link to='/Land_packagess'><button className='umrah_deal_btn'>trending packages</button></Link>
                </div>
                <div className="col-md-2 col-12">
                <Link to='/Explore_resturant'><button className='umrah_deal_btn'>hotels</button></Link>
                </div>
            </div>
        </div>

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 mt-3">

                    <img src={img} alt="" className='w-100'/>
                    <h6 className='text-start umrah_card'>classic umrah package</h6>
                    <p className='umrah_card_para'>travel date : 20 oct 22</p>
                    <div className="d-flex">
                        <div className="icoon_card me-2">
                            <MdOutlineFlightTakeoff className='fs-3 ' ></MdOutlineFlightTakeoff>
                        </div>
                        <div className="icoon_card me-2">
                            <BiBus className='fs-3 ' ></BiBus>
                        </div>
                        <div className="icoon_card me-2">
                            <BsBoxSeam className='fs-3 ' ></BsBoxSeam>
                        </div>
                        <div className="icoon_card me-2">
                            <MdOutlineFlightTakeoff className='fs-3 ' ></MdOutlineFlightTakeoff>
                        </div>
                    </div>
                    <p className='text-start per_clr'>per person  <span className='clr'>  ₹ 120,000</span></p>
                    <div className='card_footer'>
                        <p className='m-0 card_footer_upper_para'>al bushra tours & travels</p>
                        <p className='m-0 fs-6 card_footer_sub_para'> published date 11 aug 2022</p>
                    </div>
                
                </div>
                <div className="col-md-3 mt-3">
                    <img src={img} alt="" className='w-100'/>
                    <h6 className='text-start umrah_card'>classic umrah package</h6>
                    <p className='umrah_card_para'>travel date : 20 oct 22</p>
                    <div className="d-flex">
                        <div className="icoon_card me-2">
                            <MdOutlineFlightTakeoff className='fs-3 ' ></MdOutlineFlightTakeoff>
                        </div>
                        <div className="icoon_card me-2">
                            <BiBus className='fs-3 ' ></BiBus>
                        </div>
                        <div className="icoon_card me-2">
                            <BsBoxSeam className='fs-3 ' ></BsBoxSeam>
                        </div>
                        <div className="icoon_card me-2">
                            <MdOutlineFlightTakeoff className='fs-3 ' ></MdOutlineFlightTakeoff>
                        </div>
                    </div>
                    <p className='text-start'>per person  <span className='clr'>  ₹ 120,000</span></p>
                    <div className='card_footer'>
                        <p className='m-0 card_footer_upper_para'>al bushra tours & travels</p>
                        <p className='m-0  card_footer_sub_para'> published date 11 aug 2022</p>
                    </div>
                
                </div>
                <div className="col-md-3 mt-3">
                    <img src={img} alt="" className='w-100'/>
                    <h6 className='text-start umrah_card'>classic umrah package</h6>
                    <p className='umrah_card_para'>travel date : 20 oct 22</p>
                    <div className="d-flex">
                        <div className="icoon_card me-2">
                            <MdOutlineFlightTakeoff className='fs-3 ' ></MdOutlineFlightTakeoff>
                        </div>
                        <div className="icoon_card me-2">
                            <BiBus className='fs-3 ' ></BiBus>
                        </div>
                        <div className="icoon_card me-2">
                            <BsBoxSeam className='fs-3 ' ></BsBoxSeam>
                        </div>
                        <div className="icoon_card me-2">
                            <MdOutlineFlightTakeoff className='fs-3 ' ></MdOutlineFlightTakeoff>
                        </div>
                    </div>
                    <p className='text-start'>per person  <span className='clr'>  ₹ 120,000</span></p>
                    <div className='card_footer'>
                        <p className='m-0 card_footer_upper_para'>al bushra tours & travels</p>
                        <p className='m-0 card_footer_sub_para'> published date 11 aug 2022</p>
                    </div>
                
                </div>
                <div className="col-md-3 mt-3">
                    <img src={img} alt="" className='w-100'/>
                    <h6 className='text-start umrah_card'>classic umrah package</h6>
                    <p className='umrah_card_para'>travel date : 20 oct 22</p>
                    <div className="d-flex">
                        <div className="icoon_card me-2">
                            <MdOutlineFlightTakeoff className='fs-3 ' ></MdOutlineFlightTakeoff>
                        </div>
                        <div className="icoon_card me-2">
                            <BiBus className='fs-3 ' ></BiBus>
                        </div>
                        <div className="icoon_card me-2">
                            <BsBoxSeam className='fs-3 ' ></BsBoxSeam>
                        </div>
                        <div className="icoon_card me-2">
                            <MdOutlineFlightTakeoff className='fs-3 ' ></MdOutlineFlightTakeoff>
                        </div>
                    </div>
                    <p className='text-start'>per person  <span className='clr'>  ₹ 120,000</span></p>
                    <div className='card_footer'>
                        <p className='m-0 card_footer_upper_para'>al bushra tours & travels</p>
                        <p className='m-0 card_footer_sub_para'> published date 11 aug 2022</p>
                    </div>
                
                </div>
            </div>
        </div>

        <div className="container mt-5 py-5">
            <h1 className='Umrah_card_main_heading_heare'>Deals & Discounts</h1>
            <p className='umrah_card_main_para'>trending umrah packages from popular destinations</p>
            <div className="row  mt-5">
                <div className="col-md-5 text-start">
                    <div className="back_imgss">
                        <h4 className='back_para_img'>enjoy umrah deals</h4>
                        <h2 className="back_para_img">book now to enjoy</h2>
                        <button className='back_img_button'>BOOK NOW</button>
                    </div>
                    {/* <img src={uc} className='w-100' alt="" /> */}

                </div>
                <div className="col-md-2 mt-3">
                    <img src={img} alt="" className='w-100'/>
                    <h6 className='text-start umrah_card1 '>classic umrah package</h6>
                    <p className='umrah_card_para'>flat 25% discount</p>
               
                    <p className='text-start person_w'>per person  <span className='clr'>  ₹ 120,000</span></p>
                    <div className='card_footer'>
                        <p className='m-0 small_font'>al bushra tours & travels</p>
                        {/* <p className='m-0 fs-6'> published date 11 aug 2022</p> */}
                    </div>
                
                </div>
                <div className="col-md-2 mt-3">
                    <img src={img} alt="" className='w-100'/>
                    <h6 className='text-start umrah_card1'>classic umrah package</h6>
                    <p className='umrah_card_para'>flat 25% discount</p>
               
                    <p className='text-start person_w'>per person  <span className='clr'>  ₹ 120,000</span></p>
                    <div className='card_footer'>
                        <p className='m-0 small_font'>al bushra tours & travels</p>
                        {/* <p className='m-0 fs-6'> published date 11 aug 2022</p> */}
                    </div>
                
                </div>
                <div className="col-md-2 mt-3">
                    <img src={img} alt="" className='w-100'/>
                    <h6 className='text-start umrah_card1'>classic umrah package</h6>
                    <p className='umrah_card_para'>flat 25% discount</p>
               
                    <p className='text-start person_w'>per person  <span className='clr'>  ₹ 120,000</span></p>
                    <div className='card_footer'>
                        <p className='m-0 small_font'>al bushra tours & travels</p>
                        {/* <p className='m-0 fs-6'> published date 11 aug 2022</p> */}
                    </div>
                
                </div>
            </div>
        </div>
<div className='main_chance_bg'>
        <div className="container  mt-5">
            <div className="row">
                <div className="col-md-6 text-start">
                    <h1 className='choose_us_heading text-start'>why choose us</h1>
                    <h4 className='choose_sub_heading'>Al-Haram Trip is a Worlds Leading
Religious Travel Booking Platform</h4>
<p className='text-start text-white'>


Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
<button className='choose_btn mt-5'>Veiw More</button>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className='choose_box mt-3'>
                                {/* <AiFillFire className='fs-1'></AiFillFire> */}
                                <div className='d-flex justify-content-center align-items-center'>
                                <img src={fire} alt="" className='abs' />
                                <img src={f} alt="" className='rel' /></div>
                                <p className='Choose_box_para mt-3'>exciting deals</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='choose_box mt-3'>
                                {/* <RiCustomerService2Fill className='fs-1'></RiCustomerService2Fill> */}
                                <img src={user} alt="" />
                                <p className='Choose_box_para mt-3'>24/7 support</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className='choose_box mt-3 '>
                                {/* <ImPriceTag className='fs-1'></ImPriceTag> */}
                                <div className='d-flex justify-content-center'>
                                <img src={b} alt="" className='abs' />
                                <img src={b1} alt="" className='rel margggg' /></div>
                                <p className='Choose_box_para mt-3'>easy booking</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='choose_box mt-3 '>
                                {/* <TbBrandBooking className='fs-1'></TbBrandBooking> */}
                                <div className='d-flex justify-content-center'> 
                                                                   <img src={c} alt="" className='abs'  />
                                                                   <img src={c1} alt="" className='rel c_marr' />
                                                                   </div>

                                <p className='Choose_box_para mt-3'> lowest price</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Umrah_deals
