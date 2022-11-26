import React from 'react'

function Box23() {
    return (
        <>
            <div className="box-23">
                <div className="container-fluid">
                    <div className="container-main">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="box-23-1 d-none d-md-block d-lg-block">
                                    <h3>Podcast</h3>
                                    <div className="row  mb-4 float">
                                        <div className="col-md-4 col-sm-4">
                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 23.png"} alt=" " />
                                        </div>
                                        <div className="col-md-8 col-sm-8 yyddd">
                                            <div className="date">Jun 24, 2022</div>
                                            <div className="post-title">Ministry of Electronics & IT and DSCI felicitated Start-ups under...</div>
                                        </div>
                                    </div>
                                    <div className="row  float">
                                        <div className="col-md-4 col-sm-4">
                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 24.png"} alt=" " />
                                        </div>
                                        <div className="col-md-8 col-sm-8 yyddd">
                                            <div className="date">Jun 24, 2022</div>
                                            <div className="post-title">Ministry of Electronics & IT and DSCI felicitated Start-ups under...</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <a href="/# " className="threat skew">Listen all Podcast</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="box-23-2">
                                    <h3>From the blog</h3>
                                    <div className="blog float">
                                        <h4>Jun 24, 2022</h4>
                                        <h5><a href="/# ">Indian pharma takes the digital leap - What does it mean for cybersecurity?</a></h5>
                                        <p>The joint report by DSCI and Deloitte India, brings out the rapid changes that the pharma sector is witnessing, supported...</p>
                                    </div>
                                    <div className="blog float">
                                        <h4>Jun 24, 2022</h4>
                                        <h5><a href="/# ">Indian pharma takes the digital leap - What does it mean for cybersecurity?</a></h5>
                                        <p>The joint report by DSCI and Deloitte India, brings out the rapid changes that the pharma sector is witnessing, supported...</p>
                                    </div>
                                    <a href="/# " className="threat skew mt-0">View All Blog</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box23
