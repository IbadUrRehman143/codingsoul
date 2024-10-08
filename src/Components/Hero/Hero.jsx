import React from 'react'
import frontimage from "../../assets/op-1299-x-1280-px-4-1024x1009.png"
import { Link } from 'react-router-dom'
import opImage from '../../assets/op.png';
import { FaCheck } from 'react-icons/fa'
const Hero = () => {
  return (
    <>
   <div className="tw-relative tw-bg-cover" style={{ backgroundImage: `url(${opImage})` }}>
       <div className="container">
        <div className="row tw-items-center tw-gap-y-8 tw-pt-8">
            <div className="col-12 col-md-6">
                <h1 className='tw-font-extrabold tw-text-5xl md:tw-text-7xl tw-text-white animate__animated animate__backInLeft'>Coding the Future Today</h1>
                <p className='tw-text-white tw-text-xl tw-py-3 md:tw-text-2xl animate__animated animate__backInLeft'>Coding the Future Today
                Coding Souls is your trusted coding partner, empowering businesses and individuals to reach new
                 heights since 2020. With cutting-edge solutions and expertise, we bring innovative ideas to life through code.</p>
                 <div className='tw-flex md:tw-gap-4 md:tw-flex-row tw-flex-col animate__animated animate__backInLeft'>
                   <div className="tw-flex tw-gap-4 tw-items-start">
                    <span className='tw-text-GlobalColorc85df0c  tw-bg-white tw-border tw-rounded-full tw-p-1 '><FaCheck /></span>
                    <p className='tw-text-GlobalColorc85df0c md:tw-text-2xl tw-text-lg'>Free 6 Months Support</p>
                   </div>
                   <div className="tw-flex tw-gap-4 tw-items-start">
                    <span className='tw-text-GlobalColorc85df0c  tw-bg-white tw-border tw-rounded-full tw-p-1 '><FaCheck /></span>
                    <p className='tw-text-GlobalColorc85df0c md:tw-text-2xl tw-text-lg'>Any Coding & CMS Solution</p>
                   </div>
                 </div>
                 <div className='tw-flex md:tw-gap-4 md:tw-flex-row tw-flex-col animate__animated animate__backInLeft '>
                   <div className="tw-flex tw-gap-4 tw-items-start">
                    <span className='tw-text-GlobalColorc85df0c  tw-bg-white tw-border tw-rounded-full tw-p-1 '><FaCheck /></span>
                    <p className='tw-text-GlobalColorc85df0c md:tw-text-2xl tw-text-lg'>101% Client Satisfaction</p>
                   </div>
                   <div className="tw-flex tw-gap-4 tw-items-start">
                    <span className='tw-text-GlobalColorc85df0c  tw-bg-white tw-border tw-rounded-full tw-p-1 '><FaCheck /></span>
                    <p className='tw-text-GlobalColorc85df0c md:tw-text-2xl tw-text-lg'>Custom Web/APP Development</p>
                   </div>
                 </div>
                 <Link to="#" className='btn tw-bg-GlobalColord4b0483 md:tw-ml-0 animate__animated animate__backInLeft tw-ml-5 tw-mt-9 tw-px-10 tw-text-white tw-text-2xl tw-py-4 tw-font-extrabold hover:tw-bg-GlobalColorc85df0c'>CONTACT</Link>
            </div>
            <div className="col-12 col-md-6">
                <img src={frontimage} className='animate__animated animate__fadeInUpBig' alt="" />
            </div>

        </div>
       </div>
    </div>
    
    </>
  )
}

export default Hero