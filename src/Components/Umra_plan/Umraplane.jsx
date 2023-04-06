import React from 'react'
import { Link } from 'react-router-dom'
import "./Umraplane.css"

function Umraplane() {
  return (
    <div className='plan_my_umrah_main'>

        <div className='container-fluid mt-4 '>
            <div className="row">
                <div className="col-lg-12 p-0">
                    <div className='headingone border text-white'>
                        <h2 className='m-0 pt-2 pb-2'>
                        Create Your Own Package In 5 Simple Steps
                        </h2>
                    </div>
                </div>
            </div>
        </div>


                <div className="container pkge_main mt-5">

                        <div className="row frame1 d-flex justify-content-center">
                            <div className="col-lg-5 col-md-10 step1">
                               <img src="./images/Frame_1.png" alt="" className=' w-100' />
                            </div>
                        </div>

                        <div className="lineone"><img src="./images/Vector_1.png" alt="" className='line'/></div>

                        <div className=" row frame2 d-flex justify-content-center">
                          <div className="col-lg-5 col-md-10">
                         {/* <img src="./images/Vactor_car.png" alt="" className='bg-dark' />     */}
                             <img src="./images/Frame_2.png" alt="" className='step2 w-100' />
                          </div>
                        </div>

                        <div className="lineone"><img src="./images/Vector_2.png" alt="" className='line'/></div>

                        <div className="row frame3 d-flex justify-content-center">
                            <div className="col-lg-5 col-md-10 step3">
                               <img src="./images/Frame_3.png" alt="" className='w-100' />
                            </div>
                        </div>

                        <div className="lineone"><img src="./images/Vector_3.png" alt="" className='line'/></div>

                        <div className="row frame4 d-flex justify-content-center">
                           <div className="col-lg-5 col-md-10">
                              <img src="./images/Frame_4.png" alt="" className='w-100 step4' />
                          </div>
                        </div>

                        <div className="lineone"><img src="./images/Vector_4.png" alt="" className='line'/></div>

                        <div className="row frame5 d-flex justify-content-center">
                            <div className="col-lg-5 col-md-10 step5">
                              <img src="./images/Frame_5.png" alt="" className='w-100' />
                           </div>
                        </div>
                        <div className=' mt-5 mb-5 '>
                        <Link to="/Planflight"><button type="button" class="btn btn-lg text-white creat_click">Creat Package</button></Link>
                        </div>
                    </div>
    </div>
  )
}

export default Umraplane