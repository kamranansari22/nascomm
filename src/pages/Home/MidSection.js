import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { Link } from 'react-router-dom'



import React from 'react'

function MidSection() {

    const sliderSettings = {
        dots: false,
        appendDots: '.slider-dots',
        arrows: false,
        infinite: true,
        slidesToScroll: 3,
        slidesToShow: 3,
        autoplay: true,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    centerMode: true
                }
            }
        ]
    }
    return (
        <>
            <div className="middle-section ">
                <div className="container-fluid">
                    <div className="container-main">
                        <div className="row">
                            <div className="slider-services">
                                <Slider {...sliderSettings}>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="box-1">
                                            <div className="box-1-logo">
                                                <div className="box-img"> <img src="assests/img/DCPP-logo1.png" alt="company-logo" /></div>
                                            </div>
                                            <h3><span>Get Flat</span> 20%<span> Off on</span> </h3>
                                            <h4>DCPP <span>Certification</span></h4>
                                            <p>As skilled privacy professionals are in high demand, DCPP© certification is what employers are looking for.</p>
                                            <div className="s-arrow float-end"><Link to="/dcpp"><img src="assests/img/Vector8.png" /></Link></div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="box-1">
                                            <div className="box-1-logo">
                                                <div className="box-img"><img src="assests/img/member.png" alt="company-logo" /></div>
                                            </div>
                                            <h3><span>Become a</span> </h3>
                                            <h4>DSCI Member</h4>
                                            <p>Receive updates on policies, practices and the latest in Data Protection and Security</p>
                                            <div className="s-arrow float-end"><img src="assests/img/Vector8.png" alt="img" /></div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="box-1">
                                            <div className="box-1-logo">
                                                <div className="box-img"><img src="assests/img/dcpl.png" alt="company-logo" /></div>
                                            </div>
                                            <h3><span>New batch</span> Announced</h3>
                                            <h4>Register Now</h4>
                                            <p>Access to necessary knowledge and tools for conducting privacy assessments and / or implementing Privacy.</p>
                                            <div className="s-arrow float-end"><Link to='/dcpla'><img src="assests/img/Vector8.png" alt="img" /></Link></div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MidSection
