import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./bus.css";

import "swiper/css/pagination";
import { Pagination } from "swiper";
import orangeTravels from "./Assets/orange_travels.png";
// import RangeSlider from 'react-bootstrap-range-slider';
import RangeSlider from 'react-bootstrap-range-slider';
import sunset from './Assets/Sunset.png'
import sun from './Assets/Sun.png'
import evening from './Assets/Moon and Stars.png'
import afternoon from './Assets/afternoon.png'
import elipse from './Assets/Ellipse 81.png'
import bus from './Assets/Vector.png'
import wifi from './Assets/wifi.png'
import camera from './Assets/camera.png'
import group from './Assets/Group.png'
import Tracking_delivery from './Assets/Tracking delivery.png'
import unplug from './Assets/unplug.png'
import seat from './Assets/seat.png'
import less from './Assets/less.png'
import greater from './Assets/greater.png'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';


import { Link } from "react-router-dom";












const FlightsScd = () => {
    const [value, setValue] = useState(0);
    const [shows, setShows] = useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const show = () => {
        
        //  setShows(!shows)
        // const [value, setValue] = React.useState(30);

        // const handleChange = (event, newValue) => {
        //   setValue(newValue);
    }
    return <div className="px-3 py-5">
        {/* browse by operator */}
        <section className="py-5" style={{ backfgroundColor: "#F5F5F5" }}>
            <div className="row pb-3">
                <div className="col-lg-8">
                    <h6 className="fw-lg-bold fs-2"> Bangalore - Ahmedabad | Thursday, 01 September 2022</h6>
                </div>

                <div className="col-lg-4  text-center text-lg-end">
                    <div className="" style={{ fontSize: "20px" }}>  <img src={less} alt='' className="me-2" />pervious day | next day  <img src={greater} alt='' className="ms-2" /></div>

                </div>
            </div>
            <div className="row g-0 text-uppercase mt-2 mt-lg-0">
                <div className="col-lg-3 py-5" style={{ backgroundColor: '#E9E9E9' }}>
                    <div className="px-3">
                        <h3 className="text-center text-uppercase">filter by</h3>
                        <form action="" className="mt-3 text-start  ">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="ontimeguarantee" />
                                <label className="form-check-label" for="ontimeguarantee">
                                    on time guarantee
                                </label>
                            </div>
                            <div class="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="gpsenabledbuses" />
                                <label className="form-check-label" for="gpsenabledbuses">
                                    gps enabled buses
                                </label>
                            </div>
                            <h6 className="mt-3 text-start">PRICE</h6>
                            <div className="d-flex justify-content-between">
                                <p className="mb-0"> RS 1200</p>
                                <p className="mb-0"> RS 2500</p>

                            </div>
                            {/* <RangeSlider
                            className="RangeSlider"
                                value={value}

                                onChange={changeEvent => setValue(changeEvent.target.value)}
                                color='black'
                            /> */}
                             <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
      
        <Slider aria-label="Volume" value={value}  className="colooouyy" onChange={handleChange}  />
      
      </Stack>
   
    </Box>
                            {/* <input className="w-100" type="range" id="vol" name="vol" min="0" max="50"></input> */}

                        </form>
                    </div>
                    <hr />
                    <div className="px-3 py-3   ">
                        <h6 className="text-uppercase text-start">BUS TYPE</h6>
                        <form action="" className="mt-3 text-start">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="AC" />
                                <label className="form-check-label" for="AC">
                                    AC
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="NOnAC" />
                                <label className="form-check-label" for="NOnAC">
                                    NOn AC
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="SLEEPER" />
                                <label className="form-check-label" for="SLEEPER">
                                    SLEEPER
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="SEATER" />
                                <label className="form-check-label" for="SEATER">
                                    SEATER
                                </label>
                            </div>
                        </form>

                    </div>
                    <hr />

                    <div className="px-3 py-3">
                        <h6 className="text-uppercase text-start">fee cancellation</h6>
                        <form action="" className="mt-3 text-start">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="12HOURS" />
                                <label className="form-check-label" for="12HOURS">
                                    12 HOURS
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="24HOURS" />
                                <label className="form-check-label" for="24HOURS">
                                    24 HOURS

                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="48HOURS" />
                                <label className="form-check-label" for="48HOURS">
                                    48 HOURS
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="72HOURS" />
                                <label className="form-check-label" for="72HOURS">
                                    72 HOURS

                                </label>
                            </div>
                        </form>

                    </div>
                    <hr />
                    <div className="row p-2">
                        <div className="col-6">
                            <div class="card py-1">
                                <img className='mx-auto' style={{ width: "70px", height: "70px" }} src={sunset}></img>


                                <div class="card-body pt-2">

                                    <p class="card-text text-center mb-0  text-capitalize " style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}>early morning..</strong></p>
                                    <p class="card-text text-center  text-capitalize " style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}>00:00 - 04:59</strong></p>


                                </div>
                            </div>

                        </div>
                        <div className="col-6">
                            <div class="card py-1">
                                <img className='mx-auto' style={{ width: "70px", height: "70px" }} src={sun}></img>

                                <div class="card-body pt-2">

                                    <p class="card-text text-center mb-0  text-capitalize " style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}> morning</strong></p>
                                    <p class="card-text text-center  text-capitalize" style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}>00:00 - 04:59</strong></p>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-6">
                            <div class="card py-1">
                                <img className='mx-auto' style={{ width: "70px", height: "70px" }} src={afternoon}></img>


                                <div class="card-body pt-2 text">

                                    <p class="card-text text-center mb-0  text-capitalize " style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}>afternoon</strong></p>
                                    <p class="card-text text-center  text-capitalize " style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}>00:00 - 04:59</strong></p>


                                </div>
                            </div>

                        </div>
                        <div className="col-6">
                            <div class="card py-1">
                                <img className='mx-auto' style={{ width: "70px", height: "70px" }} src={evening}></img>

                                <div class="card-body pt-2">

                                    <p class="card-text text-center mb-0  text-capitalize " style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}>evening</strong></p>
                                    <p class="card-text text-center  text-capitalize " style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}>00:00 - 04:59</strong></p>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion" id="accordionFlushExample" >
                        <div class="accordion-item border-0" >
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    BORDING POINTS
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse text-start" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <form action="" className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="anand rao circle" />
                                            <label className="form-check-label text-capitalize" for="anand rao circle">
                                                anand rao circle
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="8th mile bus stop" />
                                            <label className="form-check-label text-capitalize" for="8th mile bus stop">
                                                8th mile bus stop
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="anand rao circle" />
                                            <label className="form-check-label text-capitalize" for="anand rao circle">
                                                anand rao circle
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="new delhi gate no 5" />
                                            <label className="form-check-label text-capitalize" for="new delhi gate no 5">
                                                new delhi gate no 5
                                            </label>
                                        </div>
                                    </form></div>
                            </div>
                        </div>
                        <div class="accordion-item border-0">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    dropping points
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse text-start collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body"><form action="" className="mt-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="anand rao circle" />
                                        <label className="form-check-label text-capitalize" for="anand rao circle">
                                            anand rao circle
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="8th mile bus stop" />
                                        <label className="form-check-label text-capitalize" for="8th mile bus stop">
                                            8th mile bus stop
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="anand rao circle" />
                                        <label className="form-check-label text-capitalize" for="anand rao circle">
                                            anand rao circle
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="new delhi gate no 5" />
                                        <label className="form-check-label text-capitalize" for="new delhi gate no 5">
                                            new delhi gate no 5
                                        </label>
                                    </div>
                                </form></div>
                            </div>
                        </div>
                        <div class="accordion-item border-0">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    amenities
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse text-start collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body"><form action="" className="mt-3">
                                    <div className="d-flex justify-content-between">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="cctv" />
                                            <label className="form-check-label text-capitalize" for="cctv">
                                                cctv
                                            </label>
                                        </div>
                                        <p className="mb-0">(4)</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="gps" />
                                            <label className="form-check-label text-capitalize" for="gps">
                                                gps
                                            </label>
                                        </div>
                                        <p className="mb-0">(4)</p>

                                    </div>
                                    <div className="d-flex justify-content-between">

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="snacks" />
                                            <label className="form-check-label text-capitalize" for="snacks">
                                                snacks
                                            </label>
                                        </div>
                                        <p className="mb-0">(4)</p>
                                    </div>
                                    <div className="d-flex justify-content-between">

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="SEATER" />
                                            <label className="form-check-label text-capitalize" for="SEATER">
                                                wifi
                                            </label>
                                        </div>
                                        <p className="mb-0">(4)</p>
                                    </div>
                                    <div className="d-flex justify-content-between">

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="fan" />
                                            <label className="form-check-label text-capitalize" for="fan">
                                                fan
                                            </label>
                                        </div>
                                        <p className="mb-0">(4)</p>
                                    </div>
                                    <div className="d-flex justify-content-between">

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="blanketss" />
                                            <label className="form-check-label text-capitalize" for="blankets">
                                                blankets
                                            </label>
                                        </div>
                                        <p className="mb-0">(4)</p>

                                    </div>
                                </form></div>
                            </div>
                        </div>
                        <div class="accordion-item border-0">
                            <h2 class="accordion-header" id="busoperator">
                                <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#bus" aria-expanded="false" aria-controls="bus">
                                    Bus Operator
                                </button>
                            </h2>
                            <div id="bus" className="accordion-collapse text-start collapse" aria-labelledby="busoperator" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body"><form action="" className="mt-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="m r travels" />
                                        <label className="form-check-label text-capitalize" for="m r travels">
                                            m r travels
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="NOnAC" />
                                        <label className="form-check-label" for="NOnAC">
                                            NOn AC
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="baalaji travels" />
                                        <label className="form-check-label text-capitalize" for="baalaji travels">
                                            baalaji travels
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="john travels" />
                                        <label className="form-check-label text-capitalize" for="john travels">
                                            john travels
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="8th mile bus stop" />
                                        <label className="form-check-label text-capitalize" for="8th mile bus stop">
                                            8th mile bus stop
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="smith travles" />
                                        <label className="form-check-label text-capitalize" for="smith travles">
                                            smith travles
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="new delhi travels" />
                                        <label className="form-check-label text-capitalize" for="new delhi travels">
                                            new delhi travels
                                        </label>
                                    </div>

                                </form></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 ps-lg-3">

                    <div className="table-responsive">
                        <table class="table mt-3 mt-lg-0">
                            <thead style={{ backgroundColor: '#02A3C1' }}>
                                <tr className="text-white text-uppercase ">
                                    <th scope="col" className="text-white">Bus Operator</th>
                                    <th scope="col" className="text-white">Departure</th>
                                    <th scope="col" className="text-white">Duration</th>
                                    <th scope="col" className="text-white">Arrival</th>
                                    <th scope="col" className="text-white">Price</th>

                                </tr>

                            </thead>
                            <div className="mt-3"></div>

                            <tbody >
                                {[0, 0, 0, 0, 0, 0].map(() => {
                                    return (<>
                                        <tr className="border">

                                            <td scope="row">
                                                <td className="border-none"><div><h6 className="text-uppercase flights_scd_heading_card">
                                                    m r travels

                                                </h6>
                                                    <p className="fstable" style={{ color: "#2D2D2D" }}>VOLVO AC Multi Axle Seater/Sleeper (2 + 1) </p>
                                                </div></td>
                                            </td>
                                            <td><div><h5 className="fw-bold" >
                                                21:40

                                            </h5>
                                                <p className="text-uppercase" style={{ fontSize: "15px", fontWeight: "700" }}>delhi</p>
                                            </div></td>
                                            <td className=""><div><p className="mb-0" style={{ fontSize: '10px', fontWeight: '400' }}>
                                                21H:40M

                                            </p>
                                                <img className="" src={elipse}></img>
                                                <img className="" src={elipse}></img>
                                                <img className="" src={elipse}></img>
                                                <img className="" src={bus}></img>
                                                <img className="" src={elipse}></img>
                                                <img className="" src={elipse}></img>
                                                <img className="" src={elipse}></img>
                                                <p style={{ fontSize: '10px', fontWeight: '400' }}>NON STOP</p>
                                            </div></td>
                                            <td><div>
                                                <h5 className="fw-bold">
                                                    23:55</h5>
                                                <h6 className="text-uppercase" style={{ fontSize: "15px", fontWeight: "700" }}>
                                                    mecca
                                                </h6>
                                            </div></td>
                                            <td><div>
                                                <p className="" style={{ fontSize: '13px', fontWeight: '300' }}>
                                                    Starting From</p>
                                                <h5 className="fw-bold">
                                                    Rs 1,995/-
                                                </h5>
                                            </div></td>


                                        </tr>
                                        <tr className="border"><td colSpan={3}>
                                            <img className="px-2" src={group}></img>
                                            <img className="px-2" src={wifi}></img>
                                            <img className="px-2" src={camera}></img>
                                            <img className="px-2" src={Tracking_delivery}></img>

                                            <img className="px-2" src={unplug}></img>

                                        </td>
                                            <td>
                                                <img className="px-2" src={seat}></img>
                                                <span className="" style={{ fontWeight: "400", fontSize: "16px" }}>21 seats left</span>

                                            </td>
                                            <td><div class="dropdown">
                                                <button class="btn rounded-0 px-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "#02A3C1", color: "white" }}>
                                                    Select seat
                                                </button>
                                                <ul class="dropdown-menu rounded-0" aria-labelledby="dropdownMenuButton1">
                                                    <li><Link to="/SelectSeatSleeper" class="dropdown-item" >SelectSeatSleeper</Link></li>
                                                    <li><Link to="/SelectSeatSeaterAndBerth" class="dropdown-item">SelectSeatSeaterAndBerth</Link></li>
                                                    <li><Link to="/SelectSeatSeaterOnly" class="dropdown-item">SelectSeatSeaterOnly</Link></li>

                                                </ul>
                                            </div></td>
                                        </tr>
                                        <div className="mb-3">

                                        </div>
                                    </>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                    <div className="text-center">
                        <button className="px-5 py-2 border-0 fw-bold fs-4 text-white" style={{ backgroundColor: '#02A3C1' }}>Show More</button>

                    </div>

                </div>

            </div>

        </section>

    </div>;
};

export default FlightsScd;
