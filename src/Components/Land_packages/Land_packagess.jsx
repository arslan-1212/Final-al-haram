import React from 'react'
import Land_card from '../Land_card/Land_card'
import Land_head from '../Land_head/Land_head'
import Seleter from '../Seleter/Selecter'
function Land_packagess() {
  return (
    <div className='container-fluid py-5'>
        <div><Land_head/></div>
        <div className="row mt-5">
            <div className="col-12 col-lg-3 ">
<Seleter/>
            </div>
            <div className="col-12 col-lg-9 ">
                <Land_card/>
                <Land_card/>
                <Land_card/>
                <Land_card/>
                <Land_card/>
                <Land_card/>
                <Land_card/>
            </div>
        </div>
        
    </div>
  )
}

export default Land_packagess