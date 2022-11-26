import React from 'react'

function Contact() {
    return (
        <>
            <div className="stakeholders-box-20-1">
                <div className="container-fluid">
                    <div className="container-main">
                        <div className="row">
                            <div className="col-md-12">
                                <h3><a href="">Home</a> / <span>Contact Us</span></h3>
                                <h4>Contact Us</h4>
                                <p>There is always a lot going at DSCI. We are passionate about our work and willing to assist you for any related queries. We are just a call or mail away.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div className="contact-page">
                <div className="container-fluid">
                    <div className="container-main">
                        <div className="row ggdd">
                            <div className="col-md-6">
                                <img className="map-contact" src={process.env.PUBLIC_URL + "/assests/img/FDD928BB-3290-42A1-891C-47322EC675EA.DSCI_Office.jpg"} />
                            </div>
                            <div className="col-md-6 pds-6 justify-content-center">
                                <h2>Get In Touch</h2>
                                <p>let’s work together towards a Cyber Safe and Data Secure world.</p>
                                <h6>Registered Office</h6>
                                <p>Plot No 62, Basement, Pocket-2, Jasola,<br /> New Delhi-110025</p>
                                <h6>Operational Office</h6>
                                <p>
                                    <span className="w-60 d-inline-block">4th Floor, NASSCOM Campus, Plot No. 7-10, Sector 126, Noida, UP -201303</span>
                                    <span className="w-40 float-end d-inline-block"><a target="_blank" href="https://goo.gl/maps/FmgbtC6779jLgzbb9"><img src={process.env.PUBLIC_URL + "/assests/img/gmap-qr.png"} className="qr-code" /></a></span>
                                </p>
                                <h6>Follow us on</h6>
                                <div className="social-btns">
                                    <a className="btns facebook" href="#"><i className="fab fa-facebook-f sidf"></i></a>
                                    <a className="btns twitter" href="#"><i className="fab fa-twitter sidf"></i></a>
                                    <a className="btns google" href="#"><i className="fab fa-instagram sidf"></i></a>
                                    <a className="btns dribbble" href="#"><i className="fab fa-linkedin-in sidf"></i></a>
                                    <a className="btns skype" href="#"><i className="fab fa-youtube sidf"></i></a>
                                </div>
                                {/* <ul>
                                    <li><a href="#"><svg className="svg-inline--fa fa-facebook-f fa-w-10" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg> <i className="fab fa-facebook-f"></i> </a></li>
                                    <li><a href="#"><svg className="svg-inline--fa fa-twitter fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg> <i className="fab fa-twitter"></i> </a></li>
                                    <li><a href="#"><svg className="svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg> <i className="fab fa-instagram"></i> </a></li>
                                    <li><a href="#"><svg className="svg-inline--fa fa-linkedin-in fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg><i className="fab fa-linkedin-in"></i> </a></li>
                                    <li><a href="#"><svg className="svg-inline--fa fa-youtube fa-w-18" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg><i className="fab fa-youtube"></i> </a></li>
    </ul>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stakeholders-box-21-3-3">
                    <div className="container-fluid">
                        <div className="container-main">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <h4>Write To Us </h4>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="name" className="form-controls" placeholder="Your Name" />
                                                <input type="email" className="form-controls" placeholder="Email address" />
                                                <input type="number" className="form-controls" placeholder="Contact Number" />
                                                <select className="form-controls" placeholder="Mobile">
                                                    <option>Area</option>
                                                    <option>Select Area</option>
                                                    <option>Select Area</option>
                                                    <option>Select Area</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <textarea type="text" className="form-controls textareas" placeholder="Enter your query"></textarea>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="w-100">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" for="flexCheckDefault">
                                                            I accept the Terms & Conditions and Privacy Policy
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <img src={process.env.PUBLIC_URL + "/assests/img/Rectangle109.png"} />
                                                <button type="submit" className="btn-submits skew">Submit</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
