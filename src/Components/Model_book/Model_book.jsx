// import React from 'react'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Model_book.css"
function Model_book() {
    
    const [lgShow, setLgShow] = useState(false);
  return (
    <div>
     
      <Button onClick={() => setLgShow(true)} className="colorofmodels fw-bold ">Book Now</Button>
    
      <Modal
     
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton
         className='colorofmodel text-white'>
          <Modal.Title id="example-modal-sizes-title-lg">
          
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
         className='colorofmodel p-0'>
        <div className="container  ">
      
      <div className="row pt-2 mt-3 ">
      
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Name</h6>
              <input type="text" className='w-100 p-2 ' placeholder='Enter Name' />
          </div>
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Phone Number</h6>
              <input type="number" className='w-100 p-2'  placeholder='Enter Number'/>
          </div>
      </div>
      <div className="row  mt-3">
      
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Email</h6>
              <input type="email" className='w-100 p-2' placeholder='Enter Email'/>
          </div>
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Package Name</h6>
              <input type="text" className='w-100 p-2' placeholder='Enter package'/>
          </div>
      </div>
      <div className="row  mt-3">
      
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Departure City</h6>
              <input type="text" className='w-100 p-2' placeholder='Enter City' />
          </div>
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Travel Date</h6>
              <input type="text" className='w-100 p-2' placeholder='Enter Data' />
          </div>
      </div>
      <div className="row  mt-3">
      
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>No of person</h6>
              <input type="password" className='w-100 p-2' placeholder='Enter Password'/>
          </div>
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white' >Confirm password</h6>
              <input type="password" className='w-100 p-2'placeholder='Enter Confirm Password' />
          </div>
      </div>
      <div className="send mt-5 text-center ">
      <button className='btn btn-outline-light  btn-lg mb-5 '><b>Submit</b></button>
      </div>
            </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Model_book
