import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
            {/* Desktop Footer*/}

            <div className="footer">
                <div className="container-fluid">
                    <div className="container-main">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="footer-1">
                                    <img src="assests/img/DSCI-logo-color.png" alt="logo" />
                                    <p><span>Operational Office</span> – 4th Floor, NASSCOM Campus, Plot No. 7-10, Sector 126, Noida, UP -201303</p>
                                    <div className="social-icon">
                                        <ul>
                                            <li><a href="#" className="float"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#" className="float"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#" className="float"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#" className="float"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#" className="float"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    <p><span>Affiliated Organizations</span></p>
                                    <img className="af-logo" src="https://www.dsci.in/sites/all/themes/dsci/images/associateImg1.png" alt="UB Pravin Rao" title="UB Pravin Rao" />

                                    <img className="af-logo" src="https://www.dsci.in/sites/all/themes/dsci/images/associateImg2.png" alt="UB Pravin Rao" title="UB Pravin Rao" />

                                    <img className="af-logo" src="https://www.dsci.in/sites/all/themes/dsci/images/associateImg3.png" alt="UB Pravin Rao" title="UB Pravin Rao" />


                                </div>

                            </div>
                            <div className="col-md-2">
                                <div className="footer-2">
                                    <h3>About us</h3>
                                    <ul>
                                        <li><a href="#">Overview</a></li>
                                        <li><Link to="/career">Careers</Link></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="footer-2">
                                    <h3>Media Centre</h3>
                                    <ul>
                                        <li><a href="#">Kit</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Gallery</a></li>
                                        <li><a href="#">Press release</a></li>
                                        <li><a href="#">Newsletter</a></li>
                                        <li><a href="#">Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="footer-2">
                                    <h3>Resource Centre</h3>
                                    <ul>
                                        <li><a href="#">Studies & Reports</a></li>
                                        <li><a href="#">White Papers</a></li>
                                        <li><a href="#">Newsletter</a></li>
                                        <li><a href="#">Point of View</a></li>
                                        <li><a href="#">Event Reports</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="footer-2">
                                    <h3>Community</h3>
                                    <ul>
                                        <li><a href="#">Membership<br />
                                            - Become a Member
                                        </a></li>
                                        <li><a href="#">-Membership Directory
                                            <br />
                                            DSCI Chapters</a></li>
                                        <li><a href="#">Chapters</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row footer-3">
                            <div className="col-md-6">
                                <a href="#">Terms of Service</a> <span>|</span> <a href="">Privacy Policy</a> <span>|</span> <a href="">Disclaimer </a>
                            </div>
                            <div className="col-md-6">
                                <p className="float-end">© 2022 DSCI. All Rights Reserved </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/*Mobile Footer*/}

            <div className="footer mobile-footer">
                <div className="container-fluid">
                    <div className="container-main">
                        <div className="row">

                            <div className="col-6">
                                <div className="footer-2">
                                    <h3>About us</h3>
                                    <ul>
                                        <li><a href="#">Overview</a></li>
                                        <li><Link to="/career">Careers</Link></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                    </ul>
                                </div>
                                <div className="footer-2">
                                    <h3>Resource Centre</h3>
                                    <ul>
                                        <li><a href="#">Studies & Reports</a></li>
                                        <li><a href="#">White Papers</a></li>
                                        <li><a href="#">Newsletter</a></li>
                                        <li><a href="#">Point of View</a></li>
                                        <li><a href="#">Event Reports</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="footer-2">
                                    <h3>Media Centre</h3>
                                    <ul>
                                        <li><a href="#">Kit</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Gallery</a></li>
                                        <li><a href="#">Press release</a></li>
                                        <li><a href="#">Newsletter</a></li>
                                        <li><a href="#">Blog</a></li>
                                    </ul>
                                </div>
                                <div className="footer-2">
                                    <h3>Community</h3>
                                    <ul>
                                        <li><a href="#">Membership<br />
                                            - Become a Member
                                        </a></li>
                                        <li><a href="#">-Membership Directory
                                            <br />
                                            DSCI Chapters</a></li>
                                        <li><a href="#">Chapters</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-1">
                                <img src="assests/img/DSCI-logo-color.png" alt="logo" />
                                <p><span>Operational Office</span> – 4th Floor, NASSCOM Campus, Plot No. 7-10, Sector 126, Noida, UP -201303</p>
                                <div className="social-icon">
                                    <ul>
                                        <li><a href="#" className="float"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" className="float"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#" className="float"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#" className="float"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#" className="float"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                    <p><span>Affiliated Organizations</span></p>
                                    <img className="af-logo" src="https://www.dsci.in/sites/all/themes/dsci/images/associateImg1.png" alt="UB Pravin Rao" title="UB Pravin Rao" />

                                    <img className="af-logo" src="https://www.dsci.in/sites/all/themes/dsci/images/associateImg2.png" alt="UB Pravin Rao" title="UB Pravin Rao" />

                                    <img className="af-logo" src="https://www.dsci.in/sites/all/themes/dsci/images/associateImg3.png" alt="UB Pravin Rao" title="UB Pravin Rao" />

                                </div>
                            </div>

                        </div>
                        <div className="row footer-3">
                            <div className="col-12">
                                <a href="#">Terms of Service</a> <span>|</span> <a href="">Privacy Policy</a> <span>|</span> <a href="">Disclaimer </a>
                            </div>
                            <div className="col-12">
                                <p className="float-end">© 2022 DSCI. All Rights Reserved </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
