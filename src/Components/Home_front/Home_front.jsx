import React from 'react'
import "./Home_front.css"
import {FaMosque} from "react-icons/fa"
import {MdOutlineFlightTakeoff} from "react-icons/md"
import {FaHotel} from "react-icons/fa"
import {BiBus} from "react-icons/bi"
import {MdLocationOn} from "react-icons/md"
import {BsCalendar3EventFill} from "react-icons/bs"
import Buses_link from '../Buses_link/Buses_link'
import Umrah_link from '../Umrah_link/Umrah_link'
import Hotels_link from '../Hotels_link/Hotels_link'
import Flight_link from '../Flight_link/Flight_link'
import {useNavigate } from "react-router-dom"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function Home_front() {


  let navigate = useNavigate()
  return (
    <div className='home_front_main'>
      <div className="container">
      <h1 className='home_front_heading'>budget-friendly & luxury package for a  convenient hajj & umrah  journey to the holly
makkah & madina for muslim brothers & sisters</h1>
      </div>

<div className="container  ">
    <div className="row marrrrrrsss">
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-0 sasds"
    >
      <Tab  eventKey="profile" className='tabbb bhggggs  bttm' title={ <span className='Urmah_tab_button '><FaMosque className='buttton_icons'></FaMosque>  Umrah</span> }>
        {/* <Buses_link /> */}
        <Umrah_link />
      </Tab>
      <Tab eventKey="home" className='bttm' title={ <span className='Urmah_tab_button'><MdOutlineFlightTakeoff className='buttton_icons '></MdOutlineFlightTakeoff>  Flights</span> }>
        {/* <Umrah_link /> */}
        <Flight_link/>
      </Tab>
      <Tab eventKey="contact" className='bttm' title={ <span className='Urmah_tab_button'><FaHotel className='buttton_icons '></FaHotel>  Hotels</span> } >
        {/* <Buses_link /> */}
        <Hotels_link />
      </Tab>
      <Tab eventKey="buses" className='bttm mmw' title={ <span className='Urmah_tab_button'><BiBus className='buttton_icons '></BiBus> Buses</span> } >
        {/* <Hotels_link /> */}
         <Buses_link />
      </Tab>
    </Tabs>
        {/* <div className="d-flex responsive_beh">
            <button className='home_navigation sm_size'><FaMosque className='buttton_icons m-0'></FaMosque>  UMRAH</button>
            <button className='home_navigation sm_size'><MdOutlineFlightTakeoff className='buttton_icons mx-2'></MdOutlineFlightTakeoff>  FLIGHTS</button>
            <button className='home_navigation sm_size'><FaHotel className='buttton_icons mx-2'></FaHotel>  HOTELS</button>
            <button className='home_navigation sm_size'><BiBus className='buttton_icons mx-2'></BiBus>  BUS</button>

        </div> */}
    </div>
</div>
    {/* <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card navigation_card">
                
                        <div className="row justify-content-center">
                       <div className="col-md-4 col-lg-3 ">
                       <div className='text-start'>
                        <h5 className='Navigation_card_heading'><MdLocationOn className='card_icons me-2'></MdLocationOn>Country </h5>
                        <input type="text" placeholder='Eg:India'  className='sm_size'/>
                        </div>
                       </div>
                       <div className="col-md-4 col-lg-3 ">
                       <div className='text-start'>
                        <h5 className='Navigation_card_heading'><BsCalendar3EventFill className='card_icons me-2'></BsCalendar3EventFill>City </h5>
                        <input type="text" placeholder='Eg:Dehli' className='sm_size' />
                        </div>
                       </div>
                       <div className="col-md-4 col-lg-3 ">
                       <div className='text-start'>
                        <h5 className='Navigation_card_heading'><BsCalendar3EventFill className='card_icons me-2'></BsCalendar3EventFill>duration </h5>
                        <input type="text" placeholder='Eg:2 Oct 2002'  className='sm_size'/>
                        </div>
                       </div>
                       <div className="col-md-4 col-lg-3 ">
                       <div className='text-start'>
                        <h5 className='Navigation_card_heading'><BsCalendar3EventFill className='card_icons me-2'></BsCalendar3EventFill>traval date </h5>
                        <input type="date" placeholder='Eg:india' className='sm_size' />
                        </div>
                       </div>

                        </div>
                        <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-6">
                                  <div className="row justify-content-between align-items-center">
                                    <div className="col-md-4">
                                          <div className='text-start'>
                                            <h6 className='lower_card_heading'>adult(s)</h6>
                                            <div className="d-flex">
                                                <button className='small_btn_home sm_size'>-</button>
                                                <button className='large_btn_home sm_size'>1</button>
                                                <button className='small_btn_home sm_size'>+</button>
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-md-4">
                                          <div className='text-start'>
                                            <h6 className='lower_card_heading'>Child(ren)</h6>
                                            <div className="d-flex">
                                                <button className='small_btn_home sm_size'>-</button>
                                                <button className='large_btn_home sm_size'>1</button>
                                                <button className='small_btn_home sm_size'>+</button>
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-md-4">
                                          <div className='text-start'>
                                            <h6 className='lower_card_heading'>infant(s)</h6>
                                            <div className="d-flex">
                                                <button className='small_btn_home sm_size'>-</button>
                                                <button className='large_btn_home sm_size'>1</button>
                                                <button className='small_btn_home sm_size'>+</button>
                                            </div>
                                          </div>
                                    </div>
                                  </div>
                            </div>
                            <div className="col-md-6">
                                <button className='search_button'>Search</button>
                            </div>
                        </div>
                        </div>

                </div>
            </div>
        </div>

    </div> */}



    </div>
  )
}

export default Home_front
