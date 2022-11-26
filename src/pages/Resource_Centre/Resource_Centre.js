import React from 'react'

function Resource_Centre() {
    return (
        <>
            <div className="banner-inner-pagess">
                <img src="https://www.dsci.in/sites/default/files/resource-center2.jpg" />
            </div>


            <div className="what-new what-new-2">
                <div className="container-fluid">
                    <div className="container-main">
                        <div className="nav2">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active float" id="home-tab2" data-bs-toggle="tab" data-bs-target="#home2" type="button" role="tab" aria-controls="home2" aria-selected="true">Studies & Reports</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link float" id="profile-tab2" data-bs-toggle="tab" data-bs-target="#profile2" type="button" role="tab" aria-controls="profile2" aria-selected="false">White Paper</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link float" id="profile-tab3" data-bs-toggle="tab" data-bs-target="#profile3" type="button" role="tab" aria-controls="profile3" aria-selected="false">Newsletters</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link float" id="profile-tab4" data-bs-toggle="tab" data-bs-target="#profile4" type="button" role="tab" aria-controls="profile4" aria-selected="false">Point of View</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link float" id="profile-tab5" data-bs-toggle="tab" data-bs-target="#profile5" type="button" role="tab" aria-controls="profile5" aria-selected="false">Advisories</button>
                                </li>
                            </ul>
                        </div>
                        <div className="row pt-5">
                            <div className="col-md-4 what-new-search">
                                <input type="search" className="form-search" placeholder="Search by keywords" />
                            </div>
                            <div className="col-md-2">

                            </div>
                            <div className="col-md-3">
                                <select className="form-selects">
                                    <option>Select Month:  All</option>
                                    <option>Select Month:  All</option>
                                    <option>Select Month:  All</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-selects">
                                    <option>Select Year:  All</option>
                                    <option>Select Year:  All</option>
                                    <option>Select Year:  All</option>
                                </select>
                            </div>
                        </div>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home2" role="tabpanel" aria-labelledby="home-tab">

                                <div className="row row-eq-heigh mt-5">

                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/1.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Oct 20, 2022</span> </h3>
                                                        <h4>AISS21 Event Report</h4>
                                                        <p>This report presents a bird’s-eye view of the proceedings of the 16th edition of the DSCI’s flagship Summit. Via this report, we present to you some of the key takeaways from.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/2.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Sep 19, 2022</span> </h3>
                                                        <h4>Cybersecurity Consolidation: Enabling a competitive edge and offering opportunities (DSCI-Qualys POV)</h4>
                                                        <p>Over the last decade, the technology sector has grown significantly, with the advent of the</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/3.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Aug 24, 2022</span> </h3>
                                                        <h4>IoT Security Guidebook</h4>
                                                        <p>This guidebook aims to present a wide spectrum of technological perspectives on IoT Security. It is a comprehensive document that covers IoT communication protocols as well as</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/4.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 14, 2022</span> </h3>
                                                        <h4>DSCI eNewsletter- June</h4>
                                                        <p>Read the latest edition of the DSCI community newsletter featuring the recent engagements and sequence of activities initiated by DSCI</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/5.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 06, 2022</span> </h3>
                                                        <h4>Web 3.0 - The Internet of the New Era</h4>
                                                        <p>The internet has been growing exponentially over decades. Initially, in its earliest forms, no one could comprehend its full potential of it and its impact on</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/6.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jun 24, 2022</span> </h3>
                                                        <h4>Indian pharma takes the digital leap: What does it mean for cybersecurity?</h4>
                                                        <p>To understand the pulse and priorities of the pharma sector (from a business, digital, and cybersecurity standpoint), Data</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/7.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jun 10, 2022</span> </h3>
                                                        <h4>DSCI eNewsletter – April-May 2022</h4>
                                                        <p>Read the latest edition of the DSCI community newsletter and stay up to date with all the recent initiatives taken place across divisions and activities across</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/8.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Mar 23, 2022</span> </h3>
                                                        <h4>Cloud Security Governance & Assurance (A DSCI-Infosys POV)</h4>
                                                        <p>In the current context of rapid digitization, cloud has emerged as a key enabler for organizations looking to adopt technology at a faster</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/9.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Mar 09, 2022</span> </h3>
                                                        <h4>Cyber Resilient Business Environment</h4>
                                                        <p>The growing sophistication, frequency, and severity of cyber-attacks targeting organizations highlights the inevitability and impossibility of completely.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/10.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Mar 03, 2022</span> </h3>
                                                        <h4>Metaverse Symposium 2022 Event Report</h4>
                                                        <p>The Data Security Council of India organized a symposium on the Metaverse, deliberating on the technology stack, the ideas and projects associated with crypto.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/11.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Feb 07, 2022</span> </h3>
                                                        <h4>Dark & Deep Web: Advanced Forensic Analysis of Tor Browser and Implications for Law Enforcement Agencies</h4>
                                                        <p>Centre for Cybercrime Investigation Training & Research (CCITR) has published Technical</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/12.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Dec 16, 2021</span> </h3>
                                                        <h4>India Cybersecurity Industry- Services and Product Growth Story</h4>
                                                        <p>As we advance on our industry development agenda to make India a global hub for cybersecurity, DSCI has launched a new study focusing</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/13.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Oct 20, 2021</span> </h3>
                                                        <h4>DSCI Whitepaper on Encryption | Executive Summary</h4>
                                                        <p>Encryption ensures protection of information and communications in different spheres – personal, commercial, and in the public sector. It secures</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/14.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Sep 17, 2021</span> </h3>
                                                        <h4>Contactless Payments - Making it Safe, Secure and Easy for a Billion Indians</h4>
                                                        <p>DSCI, in partnership with Mastercard, has endeavored to capture the essence of the Indian contactless payment ecosystem</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/15.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Sep 10, 2021</span> </h3>
                                                        <h4>Moving to Cloud-Based Solutions</h4>
                                                        <p>The rate of adoption of cloud services in the public sector has been on the rise. NASSCOM predicts that cloud spending in India is estimated to grow at 30% p.a. to</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/16.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Aug 20, 2021</span> </h3>
                                                        <h4>Indian pharma takes the digital leap: What does it mean for cybersecurity?</h4>
                                                        <p>This guidebook aims to present a wide spectrum of technological perspectives on IoT Security.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/17.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 22, 2021</span> </h3>
                                                        <h4>Evolving Cybersecurity Priorities in India</h4>
                                                        <p>DSCI, in partnership with PWC has developed its latest report on ‘Evolving Cybersecurity Priorities’ to showcase the changing needs and demands of</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/18.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 15, 2021</span> </h3>
                                                        <h4>Handbook on Data Protection and Privacy for Developers of Artificial Intelligence (AI) in India: Practical Guidelines for Responsible Development of AI</h4>
                                                        <p>Artificial Intelligence (AI) has emerged as a</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-3">
                                        <div className="w-100 text-center">
                                            <a href="#" className="team-view-all float mrd-whats-new">Load more <i className="fas md-90 fa-angle-down"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="profile2" role="tabpanel" aria-labelledby="profile-tab">

                                <div className="row row-eq-heigh mt-5">

                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/1.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Oct 20, 2022</span> </h3>
                                                        <h4>AISS21 Event Report</h4>
                                                        <p>This report presents a bird’s-eye view of the proceedings of the 16th edition of the DSCI’s flagship Summit. Via this report, we present to you some of the key takeaways from.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/2.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Sep 19, 2022</span> </h3>
                                                        <h4>Cybersecurity Consolidation: Enabling a competitive edge and offering opportunities (DSCI-Qualys POV)</h4>
                                                        <p>Over the last decade, the technology sector has grown significantly, with the advent of the</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/3.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Aug 24, 2022</span> </h3>
                                                        <h4>IoT Security Guidebook</h4>
                                                        <p>This guidebook aims to present a wide spectrum of technological perspectives on IoT Security. It is a comprehensive document that covers IoT communication protocols as well as</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/4.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 14, 2022</span> </h3>
                                                        <h4>DSCI eNewsletter- June</h4>
                                                        <p>Read the latest edition of the DSCI community newsletter featuring the recent engagements and sequence of activities initiated by DSCI</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/5.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 06, 2022</span> </h3>
                                                        <h4>Web 3.0 - The Internet of the New Era</h4>
                                                        <p>The internet has been growing exponentially over decades. Initially, in its earliest forms, no one could comprehend its full potential of it and its impact on</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/6.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jun 24, 2022</span> </h3>
                                                        <h4>Indian pharma takes the digital leap: What does it mean for cybersecurity?</h4>
                                                        <p>To understand the pulse and priorities of the pharma sector (from a business, digital, and cybersecurity standpoint), Data</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/7.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jun 10, 2022</span> </h3>
                                                        <h4>DSCI eNewsletter – April-May 2022</h4>
                                                        <p>Read the latest edition of the DSCI community newsletter and stay up to date with all the recent initiatives taken place across divisions and activities across</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/8.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Mar 23, 2022</span> </h3>
                                                        <h4>Cloud Security Governance & Assurance (A DSCI-Infosys POV)</h4>
                                                        <p>In the current context of rapid digitization, cloud has emerged as a key enabler for organizations looking to adopt technology at a faster</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/9.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Mar 09, 2022</span> </h3>
                                                        <h4>Cyber Resilient Business Environment</h4>
                                                        <p>The growing sophistication, frequency, and severity of cyber-attacks targeting organizations highlights the inevitability and impossibility of completely.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/10.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Mar 03, 2022</span> </h3>
                                                        <h4>Metaverse Symposium 2022 Event Report</h4>
                                                        <p>The Data Security Council of India organized a symposium on the Metaverse, deliberating on the technology stack, the ideas and projects associated with crypto.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/11.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Feb 07, 2022</span> </h3>
                                                        <h4>Dark & Deep Web: Advanced Forensic Analysis of Tor Browser and Implications for Law Enforcement Agencies</h4>
                                                        <p>Centre for Cybercrime Investigation Training & Research (CCITR) has published Technical</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/12.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Dec 16, 2021</span> </h3>
                                                        <h4>India Cybersecurity Industry- Services and Product Growth Story</h4>
                                                        <p>As we advance on our industry development agenda to make India a global hub for cybersecurity, DSCI has launched a new study focusing</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/13.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Oct 20, 2021</span> </h3>
                                                        <h4>DSCI Whitepaper on Encryption | Executive Summary</h4>
                                                        <p>Encryption ensures protection of information and communications in different spheres – personal, commercial, and in the public sector. It secures</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/14.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Sep 17, 2021</span> </h3>
                                                        <h4>Contactless Payments - Making it Safe, Secure and Easy for a Billion Indians</h4>
                                                        <p>DSCI, in partnership with Mastercard, has endeavored to capture the essence of the Indian contactless payment ecosystem</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/15.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Sep 10, 2021</span> </h3>
                                                        <h4>Moving to Cloud-Based Solutions</h4>
                                                        <p>The rate of adoption of cloud services in the public sector has been on the rise. NASSCOM predicts that cloud spending in India is estimated to grow at 30% p.a. to</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/16.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Aug 20, 2021</span> </h3>
                                                        <h4>Indian pharma takes the digital leap: What does it mean for cybersecurity?</h4>
                                                        <p>This guidebook aims to present a wide spectrum of technological perspectives on IoT Security.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/17.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 22, 2021</span> </h3>
                                                        <h4>Evolving Cybersecurity Priorities in India</h4>
                                                        <p>DSCI, in partnership with PWC has developed its latest report on ‘Evolving Cybersecurity Priorities’ to showcase the changing needs and demands of</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/18.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 15, 2021</span> </h3>
                                                        <h4>Handbook on Data Protection and Privacy for Developers of Artificial Intelligence (AI) in India: Practical Guidelines for Responsible Development of AI</h4>
                                                        <p>Artificial Intelligence (AI) has emerged as a</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-3">
                                        <div className="w-100 text-center">
                                            <a href="#" className="team-view-all float mrd-whats-new">Load more <i className="fas md-90 fa-angle-down"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile3" role="tabpanel" aria-labelledby="profile-tab">

                                <div className="row row-eq-heigh mt-5">

                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/1.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Oct 20, 2022</span> </h3>
                                                        <h4>AISS21 Event Report</h4>
                                                        <p>This report presents a bird’s-eye view of the proceedings of the 16th edition of the DSCI’s flagship Summit. Via this report, we present to you some of the key takeaways from.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/2.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Sep 19, 2022</span> </h3>
                                                        <h4>Cybersecurity Consolidation: Enabling a competitive edge and offering opportunities (DSCI-Qualys POV)</h4>
                                                        <p>Over the last decade, the technology sector has grown significantly, with the advent of the</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/3.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Aug 24, 2022</span> </h3>
                                                        <h4>IoT Security Guidebook</h4>
                                                        <p>This guidebook aims to present a wide spectrum of technological perspectives on IoT Security. It is a comprehensive document that covers IoT communication protocols as well as</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/4.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 14, 2022</span> </h3>
                                                        <h4>DSCI eNewsletter- June</h4>
                                                        <p>Read the latest edition of the DSCI community newsletter featuring the recent engagements and sequence of activities initiated by DSCI</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/5.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 06, 2022</span> </h3>
                                                        <h4>Web 3.0 - The Internet of the New Era</h4>
                                                        <p>The internet has been growing exponentially over decades. Initially, in its earliest forms, no one could comprehend its full potential of it and its impact on</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/6.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jun 24, 2022</span> </h3>
                                                        <h4>Indian pharma takes the digital leap: What does it mean for cybersecurity?</h4>
                                                        <p>To understand the pulse and priorities of the pharma sector (from a business, digital, and cybersecurity standpoint), Data</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/7.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jun 10, 2022</span> </h3>
                                                        <h4>DSCI eNewsletter – April-May 2022</h4>
                                                        <p>Read the latest edition of the DSCI community newsletter and stay up to date with all the recent initiatives taken place across divisions and activities across</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/8.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Mar 23, 2022</span> </h3>
                                                        <h4>Cloud Security Governance & Assurance (A DSCI-Infosys POV)</h4>
                                                        <p>In the current context of rapid digitization, cloud has emerged as a key enabler for organizations looking to adopt technology at a faster</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/9.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Mar 09, 2022</span> </h3>
                                                        <h4>Cyber Resilient Business Environment</h4>
                                                        <p>The growing sophistication, frequency, and severity of cyber-attacks targeting organizations highlights the inevitability and impossibility of completely.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/10.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Mar 03, 2022</span> </h3>
                                                        <h4>Metaverse Symposium 2022 Event Report</h4>
                                                        <p>The Data Security Council of India organized a symposium on the Metaverse, deliberating on the technology stack, the ideas and projects associated with crypto.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/11.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Feb 07, 2022</span> </h3>
                                                        <h4>Dark & Deep Web: Advanced Forensic Analysis of Tor Browser and Implications for Law Enforcement Agencies</h4>
                                                        <p>Centre for Cybercrime Investigation Training & Research (CCITR) has published Technical</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/12.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Dec 16, 2021</span> </h3>
                                                        <h4>India Cybersecurity Industry- Services and Product Growth Story</h4>
                                                        <p>As we advance on our industry development agenda to make India a global hub for cybersecurity, DSCI has launched a new study focusing</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/13.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Oct 20, 2021</span> </h3>
                                                        <h4>DSCI Whitepaper on Encryption | Executive Summary</h4>
                                                        <p>Encryption ensures protection of information and communications in different spheres – personal, commercial, and in the public sector. It secures</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/14.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Sep 17, 2021</span> </h3>
                                                        <h4>Contactless Payments - Making it Safe, Secure and Easy for a Billion Indians</h4>
                                                        <p>DSCI, in partnership with Mastercard, has endeavored to capture the essence of the Indian contactless payment ecosystem</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/15.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Sep 10, 2021</span> </h3>
                                                        <h4>Moving to Cloud-Based Solutions</h4>
                                                        <p>The rate of adoption of cloud services in the public sector has been on the rise. NASSCOM predicts that cloud spending in India is estimated to grow at 30% p.a. to</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/16.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Aug 20, 2021</span> </h3>
                                                        <h4>Indian pharma takes the digital leap: What does it mean for cybersecurity?</h4>
                                                        <p>This guidebook aims to present a wide spectrum of technological perspectives on IoT Security.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/17.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 22, 2021</span> </h3>
                                                        <h4>Evolving Cybersecurity Priorities in India</h4>
                                                        <p>DSCI, in partnership with PWC has developed its latest report on ‘Evolving Cybersecurity Priorities’ to showcase the changing needs and demands of</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/18.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 15, 2021</span> </h3>
                                                        <h4>Handbook on Data Protection and Privacy for Developers of Artificial Intelligence (AI) in India: Practical Guidelines for Responsible Development of AI</h4>
                                                        <p>Artificial Intelligence (AI) has emerged as a</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-3">
                                        <div className="w-100 text-center">
                                            <a href="#" className="team-view-all float mrd-whats-new">Load more <i className="fas md-90 fa-angle-down"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile4" role="tabpanel" aria-labelledby="profile-tab">

                                <div className="row row-eq-heigh mt-5">

                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/1.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Oct 20, 2022</span> </h3>
                                                        <h4>AISS21 Event Report</h4>
                                                        <p>This report presents a bird’s-eye view of the proceedings of the 16th edition of the DSCI’s flagship Summit. Via this report, we present to you some of the key takeaways from.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/2.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Sep 19, 2022</span> </h3>
                                                        <h4>Cybersecurity Consolidation: Enabling a competitive edge and offering opportunities (DSCI-Qualys POV)</h4>
                                                        <p>Over the last decade, the technology sector has grown significantly, with the advent of the</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/3.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Aug 24, 2022</span> </h3>
                                                        <h4>IoT Security Guidebook</h4>
                                                        <p>This guidebook aims to present a wide spectrum of technological perspectives on IoT Security. It is a comprehensive document that covers IoT communication protocols as well as</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/4.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 14, 2022</span> </h3>
                                                        <h4>DSCI eNewsletter- June</h4>
                                                        <p>Read the latest edition of the DSCI community newsletter featuring the recent engagements and sequence of activities initiated by DSCI</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/5.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 06, 2022</span> </h3>
                                                        <h4>Web 3.0 - The Internet of the New Era</h4>
                                                        <p>The internet has been growing exponentially over decades. Initially, in its earliest forms, no one could comprehend its full potential of it and its impact on</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/6.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jun 24, 2022</span> </h3>
                                                        <h4>Indian pharma takes the digital leap: What does it mean for cybersecurity?</h4>
                                                        <p>To understand the pulse and priorities of the pharma sector (from a business, digital, and cybersecurity standpoint), Data</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/7.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jun 10, 2022</span> </h3>
                                                        <h4>DSCI eNewsletter – April-May 2022</h4>
                                                        <p>Read the latest edition of the DSCI community newsletter and stay up to date with all the recent initiatives taken place across divisions and activities across</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/8.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Mar 23, 2022</span> </h3>
                                                        <h4>Cloud Security Governance & Assurance (A DSCI-Infosys POV)</h4>
                                                        <p>In the current context of rapid digitization, cloud has emerged as a key enabler for organizations looking to adopt technology at a faster</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/9.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Mar 09, 2022</span> </h3>
                                                        <h4>Cyber Resilient Business Environment</h4>
                                                        <p>The growing sophistication, frequency, and severity of cyber-attacks targeting organizations highlights the inevitability and impossibility of completely.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/10.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Mar 03, 2022</span> </h3>
                                                        <h4>Metaverse Symposium 2022 Event Report</h4>
                                                        <p>The Data Security Council of India organized a symposium on the Metaverse, deliberating on the technology stack, the ideas and projects associated with crypto.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/11.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Feb 07, 2022</span> </h3>
                                                        <h4>Dark & Deep Web: Advanced Forensic Analysis of Tor Browser and Implications for Law Enforcement Agencies</h4>
                                                        <p>Centre for Cybercrime Investigation Training & Research (CCITR) has published Technical</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/12.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Dec 16, 2021</span> </h3>
                                                        <h4>India Cybersecurity Industry- Services and Product Growth Story</h4>
                                                        <p>As we advance on our industry development agenda to make India a global hub for cybersecurity, DSCI has launched a new study focusing</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/13.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Oct 20, 2021</span> </h3>
                                                        <h4>DSCI Whitepaper on Encryption | Executive Summary</h4>
                                                        <p>Encryption ensures protection of information and communications in different spheres – personal, commercial, and in the public sector. It secures</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/14.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Sep 17, 2021</span> </h3>
                                                        <h4>Contactless Payments - Making it Safe, Secure and Easy for a Billion Indians</h4>
                                                        <p>DSCI, in partnership with Mastercard, has endeavored to capture the essence of the Indian contactless payment ecosystem</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/15.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Sep 10, 2021</span> </h3>
                                                        <h4>Moving to Cloud-Based Solutions</h4>
                                                        <p>The rate of adoption of cloud services in the public sector has been on the rise. NASSCOM predicts that cloud spending in India is estimated to grow at 30% p.a. to</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/16.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Aug 20, 2021</span> </h3>
                                                        <h4>Indian pharma takes the digital leap: What does it mean for cybersecurity?</h4>
                                                        <p>This guidebook aims to present a wide spectrum of technological perspectives on IoT Security.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/17.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 22, 2021</span> </h3>
                                                        <h4>Evolving Cybersecurity Priorities in India</h4>
                                                        <p>DSCI, in partnership with PWC has developed its latest report on ‘Evolving Cybersecurity Priorities’ to showcase the changing needs and demands of</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/18.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 15, 2021</span> </h3>
                                                        <h4>Handbook on Data Protection and Privacy for Developers of Artificial Intelligence (AI) in India: Practical Guidelines for Responsible Development of AI</h4>
                                                        <p>Artificial Intelligence (AI) has emerged as a</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-3">
                                        <div className="w-100 text-center">
                                            <a href="#" className="team-view-all float mrd-whats-new">Load more <i className="fas md-90 fa-angle-down"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile5" role="tabpanel" aria-labelledby="profile-tab">

                                <div className="row row-eq-heigh mt-5">

                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/1.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Oct 20, 2022</span> </h3>
                                                        <h4>AISS21 Event Report</h4>
                                                        <p>This report presents a bird’s-eye view of the proceedings of the 16th edition of the DSCI’s flagship Summit. Via this report, we present to you some of the key takeaways from.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/2.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Sep 19, 2022</span> </h3>
                                                        <h4>Cybersecurity Consolidation: Enabling a competitive edge and offering opportunities (DSCI-Qualys POV)</h4>
                                                        <p>Over the last decade, the technology sector has grown significantly, with the advent of the</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/3.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Aug 24, 2022</span> </h3>
                                                        <h4>IoT Security Guidebook</h4>
                                                        <p>This guidebook aims to present a wide spectrum of technological perspectives on IoT Security. It is a comprehensive document that covers IoT communication protocols as well as</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/4.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 14, 2022</span> </h3>
                                                        <h4>DSCI eNewsletter- June</h4>
                                                        <p>Read the latest edition of the DSCI community newsletter featuring the recent engagements and sequence of activities initiated by DSCI</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/5.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 06, 2022</span> </h3>
                                                        <h4>Web 3.0 - The Internet of the New Era</h4>
                                                        <p>The internet has been growing exponentially over decades. Initially, in its earliest forms, no one could comprehend its full potential of it and its impact on</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/6.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jun 24, 2022</span> </h3>
                                                        <h4>Indian pharma takes the digital leap: What does it mean for cybersecurity?</h4>
                                                        <p>To understand the pulse and priorities of the pharma sector (from a business, digital, and cybersecurity standpoint), Data</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/7.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jun 10, 2022</span> </h3>
                                                        <h4>DSCI eNewsletter – April-May 2022</h4>
                                                        <p>Read the latest edition of the DSCI community newsletter and stay up to date with all the recent initiatives taken place across divisions and activities across</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/8.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Mar 23, 2022</span> </h3>
                                                        <h4>Cloud Security Governance & Assurance (A DSCI-Infosys POV)</h4>
                                                        <p>In the current context of rapid digitization, cloud has emerged as a key enabler for organizations looking to adopt technology at a faster</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/9.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Mar 09, 2022</span> </h3>
                                                        <h4>Cyber Resilient Business Environment</h4>
                                                        <p>The growing sophistication, frequency, and severity of cyber-attacks targeting organizations highlights the inevitability and impossibility of completely.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/10.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Mar 03, 2022</span> </h3>
                                                        <h4>Metaverse Symposium 2022 Event Report</h4>
                                                        <p>The Data Security Council of India organized a symposium on the Metaverse, deliberating on the technology stack, the ideas and projects associated with crypto.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/11.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Feb 07, 2022</span> </h3>
                                                        <h4>Dark & Deep Web: Advanced Forensic Analysis of Tor Browser and Implications for Law Enforcement Agencies</h4>
                                                        <p>Centre for Cybercrime Investigation Training & Research (CCITR) has published Technical</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/12.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Dec 16, 2021</span> </h3>
                                                        <h4>India Cybersecurity Industry- Services and Product Growth Story</h4>
                                                        <p>As we advance on our industry development agenda to make India a global hub for cybersecurity, DSCI has launched a new study focusing</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/13.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Oct 20, 2021</span> </h3>
                                                        <h4>DSCI Whitepaper on Encryption | Executive Summary</h4>
                                                        <p>Encryption ensures protection of information and communications in different spheres – personal, commercial, and in the public sector. It secures</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/14.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Sep 17, 2021</span> </h3>
                                                        <h4>Contactless Payments - Making it Safe, Secure and Easy for a Billion Indians</h4>
                                                        <p>DSCI, in partnership with Mastercard, has endeavored to capture the essence of the Indian contactless payment ecosystem</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/15.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Sep 10, 2021</span> </h3>
                                                        <h4>Moving to Cloud-Based Solutions</h4>
                                                        <p>The rate of adoption of cloud services in the public sector has been on the rise. NASSCOM predicts that cloud spending in India is estimated to grow at 30% p.a. to</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-eq-heigh">
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/16.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Aug 20, 2021</span> </h3>
                                                        <h4>Indian pharma takes the digital leap: What does it mean for cybersecurity?</h4>
                                                        <p>This guidebook aims to present a wide spectrum of technological perspectives on IoT Security.</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/17.png"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 22, 2021</span> </h3>
                                                        <h4>Evolving Cybersecurity Priorities in India</h4>
                                                        <p>DSCI, in partnership with PWC has developed its latest report on ‘Evolving Cybersecurity Priorities’ to showcase the changing needs and demands of</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-stretch">
                                        <div className="box-3 float">
                                            <div className="row h-100">
                                                <div className="col-md-5 col-sm-5"><img src={process.env.PUBLIC_URL + "/assests/img/ResourceCentre-Content/18.jpg"} /></div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="w-100 box-3-box">
                                                        <h3><i className="fas fa-calendar me-2"></i><span> Jul 15, 2021</span> </h3>
                                                        <h4>Handbook on Data Protection and Privacy for Developers of Artificial Intelligence (AI) in India: Practical Guidelines for Responsible Development of AI</h4>
                                                        <p>Artificial Intelligence (AI) has emerged as a</p>
                                                        <div className="s-arrow float-end mb-2"><img src={process.env.PUBLIC_URL + "/assests/img/Vector8.png"} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-3">
                                        <div className="w-100 text-center">
                                            <a href="#" className="team-view-all float mrd-whats-new">Load more <i className="fas md-90 fa-angle-down"></i></a>
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

export default Resource_Centre
