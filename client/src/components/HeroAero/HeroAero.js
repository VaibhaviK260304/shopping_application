import React from 'react';
import Img2 from './img1.jpg';
// import bookingData from '../../configs/Booking/Transport.json';
import { Link } from 'react-router-dom';
// import vdo1 from './vdo1.gif';
import './HeroAero.css'


export default function HeroECommerce() {
    return (
        <>
            <div className='border-top bg-white'>
                <div className="container col-xxl-8 px-4 py-5 ">
                    <div className="row flex-lg-row align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6 " style={{ position: 'relative', height:"350px"}}>
                            {/* <img src="http://html.0effortthemes.com/go/images/banner-animation/cloud.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" style={{ height: "350px", position: 'absolute', top: 0, left: 0, zIndex: 0 }} /> */}
                            <img src={Img2} className="d-block mx-lg-auto img-fluid img-float" alt="Bootstrap Themes" loading="lazy" style={{ height: "250px",position: 'absolute', top: 70, left: 80, zIndex: 2 }} />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="fs-1 fw-bold text-info-emphasis lh-1 mb-3">DISCOVER THE WORLD WITH ECOMMERCE</h1>
                            <p className="lead text-body-secondary" style={{fontSize:'20px'}}>You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <Link to="/destination/1">
                                    <button type="button" className="btn btn-outline-info btn-lg px-4 me-md-2">Shop Now</button>
                                </Link>
                                <Link to="/contact">
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
                                </Link>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
