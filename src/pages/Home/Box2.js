import React from 'react'
import { Link } from 'react-router-dom'

function Box2() {
    return (
        <>
            <div className="box-2">
                <div className="container-fluid">
                    <div className="container-main">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Upcoming</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">What’s New</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row row-eq-heigh">
                                    <div className="col-md-12 for-mobile-box2">
                                        <div className="float-end"><a href="#" className="view-all skew">View all <i className="fas fa-angle-right ms-2"></i></a></div>
                                    </div>
                                    <div className="col-md-6  d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src="assests/img/event1.png" alt="Event1" /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <div className="award">Awards</div>
                                                        <h3>Announcement:<span> June 24, 2022</span> </h3>
                                                        <h4>Indian pharma takes the digital leap - What does it mean for cybersecurity?</h4>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                                                        <div className="s-arrow float-end mb-4"><Link to='excellence-award'><img src="assests/img/Vector8.png" alt="image" /></Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6  d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src="assests/img/event1.png" alt="event1" /></div>
                                                <div className="col-md-7 col-sm-7 pr-3">
                                                    <div className="w-100 box-3-box">
                                                        <div className="awards-grn">Hackathon</div>
                                                        <h3>Announcement:<span> Mar 09, 2022</span> </h3>
                                                        <h4>Cyber Resilient Business Environment – A DSCI-Dell Point of View Paper</h4>
                                                        <p>The shrinking sophistication, frequency, and severity of cyber-attacks targeting organizations highlights...</p>
                                                        <div className="s-arrow float-end mb-4"><Link to='/hackathon'><img src="assests/img/Vector8.png" alt="image" /></Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-6  d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row">
                                                <div className="col-md-5 col-sm-5 "><img src="assests/img/event3.png" alt="event3" /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <div className="award">Awards</div>
                                                        <h3>Announcement:<span> July 22, 2021</span> </h3>
                                                        <h4>Getting your cloud Strategy Right | DSCI-Tata Communications PoV</h4>
                                                        <p>With cloud gaining prominence across the sectors on the back of its numerous benefits, DSCI and Tata Communications...</p>
                                                        <div className="s-arrow float-end mb-4"><Link to='/excellence-award'><img src="assests/img/Vector8.png" alt="image" /></Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6  d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row">
                                                <div className="col-md-5 col-sm-5"><img src="assests/img/event4.png" alt="event4" /></div>
                                                <div className="col-md-7 col-sm-7 pr-3">
                                                    <div className="w-100 box-3-box">
                                                        <div className="awards-grn">Hackathon</div>
                                                        <h3>Announcement:<span> May 18, 2021</span> </h3>
                                                        <h4>DarkSide Ransomware Attack on Colonial Pipeline</h4>
                                                        <p>Colonial pipeline company faced ransomware attack by DarkSide group. The DarkSide ransomware attack is a part...</p>
                                                        <div className="s-arrow float-end mb-4"><Link to='/hackathon'><img src="assests/img/Vector8.png" alt="image" /></Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 for-mobile-box3">
                                        <div className="float-end"><a href="#" className="view-all skew">View all <i className="fas fa-angle-right ms-2"></i></a></div>
                                    </div>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row row-eq-heigh">
                                    <div className="col-md-12 for-mobile-box2">
                                        <div className="float-end"><a href="#" className="view-all skew">View all <i className="fas fa-angle-right ms-2"></i></a></div>
                                    </div>
                                    <div className="col-md-6  d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row ">
                                                <div className="col-md-5 col-sm-5"><img src="assests/img/event1.png" alt="event1" /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <div className="award">Awards</div>
                                                        <h3>Announcement:<i className="fas fa-calendar ms-2"></i><span> June 24, 2022</span> </h3>
                                                        <h4>Indian pharma takes the digital leap - What does it mean for cybersecurity?</h4>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                                                        <div className="s-arrow float-end mb-3"><img src="assests/img/Vector8.png" alt="image" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6  d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row">
                                                <div className="col-md-5 col-sm-5"><img src="assests/img/event2.png" alt="event2" /></div>
                                                <div className="col-md-7 col-sm-7 pr-3">
                                                    <div className="w-100 box-3-box">
                                                        <div className="awards-grn">Hackathon</div>
                                                        <h3>Announcement:<i className="fas fa-calendar ms-2 "></i><span> Mar 09, 2022</span> </h3>
                                                        <h4>Cyber Resilient Business Environment – A DSCI-Dell Point of View Paper</h4>
                                                        <p>The shrinking sophistication, frequency, and severity of cyber-attacks targeting organizations highlights...</p>
                                                        <div className="s-arrow float-end mb-3"><img src="assests/img/Vector8.png" alt="image" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-6 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row">
                                                <div className="col-md-5 col-sm-5 "><img src="assests/img/event3.png" alt="event3" /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <div className="award">Awards</div>
                                                        <h3>Announcement:<i className="fas fa-calendar ms-2"></i> <span> July 22, 2021</span> </h3>
                                                        <h4>Getting your cloud Strategy Right | DSCI-Tata Communications PoV</h4>
                                                        <p>With cloud gaining prominence across the sectors on the back of its numerous benefits, DSCI and Tata Communications...</p>
                                                        <div className="s-arrow float-end mb-4"><img src="assests/img/Vector8.png" alt="image" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row">
                                                <div className="col-md-5 col-sm-5"><img src="assests/img/event4.png" alt="event4" /></div>
                                                <div className="col-md-7 col-sm-7 pr-3">
                                                    <div className="w-100 box-3-box">
                                                        <div className="awards-grn">Hackathon</div>
                                                        <h3>Announcement: <i className="fas fa-calendar ms-2"></i><span> May 18, 2021</span> </h3>
                                                        <h4>DarkSide Ransomware Attack on Colonial Pipeline</h4>
                                                        <p>Colonial pipeline company faced ransomware attack by DarkSide group. The DarkSide ransomware attack is a part...</p>
                                                        <div className="s-arrow float-end mb-4"><img src="assests/img/Vector8.png" alt="image" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 for-mobile-box3">
                                        <div className="float-end"><a href="#" className="view-all skew">View all <i className="fas fa-angle-right ms-2"></i></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}

export default Box2
