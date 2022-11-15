import React from 'react'
import { Timeline } from "react-twitter-widgets";

function Box24() {
    return (
        <>
            <div className="box-24">
                <div className="container-fluid">
                    <div className="container-main">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="box-24-1">
                                    <h3>Follow Us</h3>
                                    <a className="twitter-timeline" data-height="731" data-theme="light" href="https://twitter.com/DSCI_Connect?ref_src=twsrc%5Etfw">Tweets by DSCI_Connect</a> {/*<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>*/}
                                    <Timeline
                                        sourceType="profile"
                                        screenName="saurabhnemade"
                                        options={{ height: 400 }}
                                    />

                                </div>
                            </div>
                            <div className="col-md-12 d-block mt-5 d-sm-block d-md-none"><div className="br-white "></div></div>
                            <div className="col-md-6">
                                <div className="box-24-2">
                                    <h3>Media Centre</h3>
                                    <div className="nav3">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item actived" role="presentation">
                                                <button className="nav-link active" id="home-tab2" data-bs-toggle="tab" data-bs-target="#home2" type="button" role="tab" aria-controls="home2" aria-selected="true">Press Release</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="profile-tab2" data-bs-toggle="tab" data-bs-target="#profile2" type="button" role="tab" aria-controls="profile2" aria-selected="false">Media Coverage</button>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home2" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="blog mb-5 float">
                                                <h4>Jun 24, 2022</h4>
                                                <h5><a href="#">Ministry of Electronics & IT and DSCI felicitated Start-ups under the ‘Cyber Security Grand Challenge’ with a total prize money of INR 3.2 Cr</a></h5>
                                                <p>Shri Ashwini Vaishnaw, Hon. Union Minister for Electronics & IT, Communications and Railways, and Shri Rajeev Chandrasekhar, Hon. Union Minister of State for</p>
                                            </div>
                                            <div className="blog mb-5 float">
                                                <h4>Jun 24, 2022</h4>
                                                <h5><a href="#">Encryption and the Digital Economy: Balancing Security, Privacy and National Security</a></h5>
                                                <p>Data Security Council of India (DSCI), launched a whitepaper on encryption titled ‘Encryption and the Digital Economy: Balancing Security, Privacy and National</p>
                                            </div>
                                            <a href="#" className="threat skew mt-0">View All</a>

                                        </div>
                                        <div className="tab-pane fade" id="profile2" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="blog mb-5 float">
                                                <h4>Jun 24, 2022</h4>
                                                <h5><a href="#">Ministry of Electronics & IT and DSCI felicitated Start-ups under the ‘Cyber Security Grand Challenge’ with a total prize money of INR 3.2 Cr</a></h5>
                                                <p>Shri Ashwini Vaishnaw, Hon. Union Minister for Electronics & IT, Communications and Railways, and Shri Rajeev Chandrasekhar, Hon. Union Minister of State for</p>
                                            </div>
                                            <div className="blog mb-5 float">
                                                <h4>Jun 24, 2022</h4>
                                                <h5><a href="#">Encryption and the Digital Economy: Balancing Security, Privacy and National Security</a></h5>
                                                <p>Data Security Council of India (DSCI), launched a whitepaper on encryption titled ‘Encryption and the Digital Economy: Balancing Security, Privacy and National</p>
                                            </div>
                                            <a href="#" className="threat skew mt-0">View All</a>
                                        </div>
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

export default Box24
