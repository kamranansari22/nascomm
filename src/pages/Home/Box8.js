import React from 'react'


function Box8() {
    return (
        <>
            <div className="box-8">
                <div className="container-fluid">
                    <div className="container-main">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="box-10">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 34.png"} alt="" />
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <h6>Recent Report</h6>
                                            <h4>Indian pharma takes the digital leap: What does it mean for cybersecurity?</h4>
                                            <p>To understand the pulse and priorities of the pharma sector (from a business, digital, and cybersecurity standpoint)...</p>
                                            <a href="/" className="explore-btn skew">Explore now </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="w-100 box-11">
                                    <h4>Resource Center</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit ame.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" style={{ position: "relative" }}>
                    <div className="container-main">
                        <div className="box-14-1">
                            <div className="row ps-6 justify-content-end">
                                <div className="col-md-3 col-sm-6 col-6">
                                    <div className="box-12 wobble-horizontal text-center">
                                        <img src={process.env.PUBLIC_URL + "/assests/img/case 1.png"} alt="case" />
                                        <p>Study & Reports</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-6">
                                    <div className="box-12 wobble-horizontal text-center">
                                        <img src={process.env.PUBLIC_URL + "/assests/img/case 2.png"} alt="case-2" />
                                        <p>Whitepapers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-sm-4 ps-6 justify-content-end box-14-2">
                                <div className="col-md-3 col-sm-6 col-6">
                                    <div className="box-12 wobble-horizontal text-center">
                                        <img src={process.env.PUBLIC_URL + "/assests/img/case 2(3).png"} alt="case-3" />
                                        <p>News letters</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-6">
                                    <div className="box-12 wobble-horizontal text-center">
                                        <img src={process.env.PUBLIC_URL + "/assests/img/case 2(2).png"} alt="case-4" />
                                        <p>Point of view</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-12">
                                    <div className="box-12 wobble-horizontal text-center">
                                        <img src={process.env.PUBLIC_URL + "/assests/img/case 2(1).png"} alt="case-5" />
                                        <p>Advisories</p>
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

export default Box8
