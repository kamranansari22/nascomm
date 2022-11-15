import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

function Box6() {
    const sliderSettings = {
        slidesToShow: 8,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3,
                    centerMode: true
                }
            }
        ]
    }
    const sliderSettings1 = {
        dots: false,
        appendDots: '.slider-dots',
        arrows: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                    centerMode: false
                }
            }
        ]


    }
    return (
        <>
            <div className="box-6">
                <div className="box-6-6">

                    <h2>Our Initiatives</h2>
                    <p>As an industry body, we engage with diverse stakeholders, for activities that spin off from our core strategic objectives.</p>
                    <div className="container-fluid">
                        <div className="slider-services-2">
                            <Slider {...sliderSettings1}>
                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    <div className="box-7 hang">
                                        <img src="assests/img/Picture5.png" alt="" />
                                        <h6>Cyber Security Grand Challenge</h6>
                                        <div className="box-7-content">
                                            <p>MeitY, in partnership with DSCI, has launched the Cyber Security Grand Challenge to provide impetus towards product innovation in the Cyber Security start-up ecosystem. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    <div className="box-7 hang">
                                        <img src="assests/img/Picture6.png" alt="" />
                                        <h6>Use Case Clearing House UCCH</h6>
                                        <div className="box-7-content">
                                            <p>Use cases are unmet requirements or problems, which could be resolved by developing technologies. These use cases can be shaped under various security domains.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    <div className="box-7 hang">
                                        <img src="assests/img/Picture7.png" alt="" />
                                        <h6>CIPHER</h6>
                                        <div className="box-7-content">
                                            <p>COALITION OF INDIA FOR A PROGRESSIVE AND HOLISTIC ENCRYPTION REGIME</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    <div className="box-7 hang">
                                        <img src="assests/img/Picture8.png" alt="" />
                                        <h6>Digital Payment Abhiyan</h6>
                                        <div className="box-7-content">
                                            <p>Digital Payments are shaping the contours of new India, by providing citizens with new mediums to make payments electronically and be less dependent on cash.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    <div className="box-7 hang">
                                        <img src="assests/img/Picture9.png" alt="" />
                                        <h6>Cyber Shikshaa</h6>
                                        <div className="box-7-content">
                                            <p>Microsoft & DSCI with support from ISEA an initiative of Ministry of Electronics & IT (MeitY) have launched Project Cyber Shikshaa for skilling women engineering graduates in the niche field of Cyber Security</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    <div className="box-7 hang">
                                        <img src="assests/img/Picture10.png" alt="" />
                                        <h6>Stay Safe Cyberspace</h6>
                                        <div className="box-7-content">
                                            <p>Stay Cyber Safe is an awareness campaign crafted around Online Safety, Social Media Hygiene, Safer Internet Practices and more, for a holistic Digital Well-being.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">
                                    <div className="box-7 hang">
                                        <img src="assests/img/Picture11.png" alt="" />
                                        <h6>Techsagar</h6>
                                        <div className="box-7-content">
                                            <p>There is a need for a concerted effort in developing critical technology capabilities in the country for India’s geopolitical advantage. Start-ups, enterprises, academia, researchers, and R&D institutes in the country need to synergize their efforts and work in tandem to achieve this national goal.</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="container-main">
                        <div className="box-new">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>DSCI Membership</h3>
                                    <p>DSCI through its Corporate Membership program provides topical, globally acknowledged and action-oriented services to its member companies to
                                        promote data protection in the various industry verticals and build trustworthiness of Indian companies at the global arena. This includes sending information on various issues to its members on a regular basis in form of
                                        survey.</p>
                                    <Link to="/login" className="view-alls skew">Become a Member Now</Link>
                                </div>
                                <div className="col-md-6 position-relative">
                                    <img src="assests/img/oi_right.png" alt="" className="box-new-img" />
                                    <div className="circle-box"><span className="counts" data-number="500">500</span>+</div>
                                    <div className="circle-box-1 circle-box-3 float"><div className="circle-box-1-1"><img src="assests/img/secure-shield.png" alt="" className="d-img-none" /><img src="assests/img/tower2-hover (5).png" alt="" className="d-img-none-hover" />SECURITY</div></div>
                                    <div className="circle-box-1 float"><div className="circle-box-1-1"><img src="assests/img/bank (1).png" alt="" className="d-img-none" /><img src="assests/img/bank-hover.png" alt="" className="d-img-none-hover" />BFSI</div></div>
                                    <div className="circle-box-1 circle-box-2 float"><div className="circle-box-1-1"><img src="assests/img/thunderbolt.png" alt="" className="d-img-none" /><img src="assests/img/tower2-hover (3).png" alt="" className="d-img-none-hover" />Power</div></div>
                                    <div className="circle-box-1 circle-box-4 float"><div className="circle-box-1-1"><img src="assests/img/tower.png" alt="" className="d-img-none" /><img src="assests/img/tower2-hover (2).png" alt="" className="d-img-none-hover" />Aviation</div></div>
                                    <div className="circle-box-1 circle-box-5 float"><div className="circle-box-1-1"><img src="assests/img/tower2.png" alt="" className="d-img-none" /><img src="assests/img/tower2-hover (1).png" alt=" " className="d-img-none-hover" />TELECOM</div></div>
                                    <div className="circle-box-1 circle-box-6 float"><div className="circle-box-1-1"><img src="assests/img/technical-support (1).png" alt=" " className="d-img-none" /><img src="assests/img/tower2-hover (4).png" alt="" className="d-img-none-hover" />IT SERVICES</div></div>
                                    <div className="circle-box-1 circle-box-7 float"><div className="circle-box-1-1"><img src="assests/img/it-department.png" alt=" " className="d-img-none" /><img src="assests/img/tower2-hover (7).png" alt=" " className="d-img-none-hover" />IT BPM</div></div>
                                    <div className="circle-box-1 circle-box-8 float"><div className="circle-box-1-1"><img src="assests/img/heart-beat.png" alt="" className="d-img-none" /><img src="assests/img/tower2-hover (8).png" alt=" " className="d-img-none-hover" />HEALTHCARE</div></div>
                                    <div className="circle-box-1 circle-box-9 float"><div className="circle-box-1-1"><img src="assests/img/more-information.png" alt="" className="d-img-none" /><img src="assests/img/tower2-hover (6).png" alt=" " className="d-img-none-hover" />OTHERS</div></div>
                                </div>
                                <div className="box-9-9">
                                    <div className="slider-services-3">
                                        <Slider {...sliderSettings} >
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 47.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 48.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 49.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 50.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 51.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 52.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 55.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 54.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 47.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 48.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 49.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 50.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 51.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 52.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 55.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3">
                                                <div className="box-9">
                                                    <img src="assests/img/image 54.png" alt="" />
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box6
