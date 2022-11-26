import React from 'react'
//import $ from 'jquery'
import Slider from 'react-slick'

function CyberSecurityAwarenessMonth() {

    const swipeTabs = {
        height: '100px',
        color: '#525252',
        fontSize: '12px',
        background: '#fff',
        marginRight: '20px',
        padding: '20px',
        justifyContent: 'center'
    }



    return (

        <>
            <div className="banner-inner-pagess">
                <img src={process.env.PUBLIC_URL + "/assests/img/Rectangle 116.png"} />
            </div>


            <div className="cyber-sec cyber-sec-month">
                <div className="container-fluid">
                    <div className="container-main">
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Cyber Security Awareness Month 2021</h4>
                                <p className="w-100">October is celebrated as Cyber Security Awareness Month (CSAM) globally.</p>
                                <p>The theme for this year is ‘Do Your Part’ #BeCyberSmart.</p>
                                <p>As digital services are on the rise, so are cyberattacks. Cyber Security has become more important than ever in today’s digital life. It is no more a matter for security experts and web admins to take care of. Cyber attackers and malicious actors no more target only companies and corporations but individuals too. Cyber Security is now a part of every individual’s life.</p>
                                <p>Therefore, it is a collective responsibility of all of us to do our part to uphold cyber security in our personal as well as professional fronts. The more connected with get, safeguarding our digital identities becomes a shared responsibility.</p>
                                <p>In order to bring attention to Cyber Security and as a concentrated effort to stay safe and secure online, CSAM is celebrated all over the world. It is an initiative to put conscious efforts towards ensuring better cyber security hygiene and incorporate stronger security measures. It is a collective responsibility of the Govt., organisations, employees, consumers, and citizens alike to Do Your Part and #BeCyberSmart.</p>
                            </div>
                        </div>
                        <div className="tabs-rdf">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="sub-header ">
                                        <Slider {...swipeTabs}>
                                            <div className="swipe-tabs">

                                                <div className="swipe-tab">Wallpaper/Screensaver</div>
                                                <div className="swipe-tab">Awareness Quiz</div>
                                                <div className="swipe-tab">Awareness Pledge</div>
                                                <div className="swipe-tab">Poster Competition</div>
                                                <div className="swipe-tab">Awareness Posters</div>

                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="main-container">
                                        <div className="swipe-tabs-container ">
                                            <div className="swipe-tab-content">
                                                <h5>Wallpaper/Screensaver</h5>
                                                <p><strong> Hygiene is the Vaccine!</strong></p>
                                                <p>This year’s wallpaper/screensaver highlights the importance of practising good cyber habits in our daily life because maintaining Cyber Hygiene is the best protection against cyberthreats and cybercrimes.</p>
                                                <p> This year’s wallpaper/screensaver highlights the importance of practising good cyber habits in our daily life because maintaining Cyber Hygiene is the best protection against cyberthreats and cybercrimes.
                                                    Apply it on your laptops/desktops personally and in & around your organization for the month of October to show your support and promote Cyber Security.
                                                    <strong>Please feel free to add your organization logo to the wallpaper/screensaver and spread the word.</strong>
                                                </p>
                                                <div className="row img-cyber">
                                                    <div className="col-md-4">
                                                        <label className="radio-img">
                                                            <input type="radio" name="layout" value="L" />
                                                            <img className="image" src={process.env.PUBLIC_URL + "/assests/img/image 62.png"} />
                                                        </label>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="radio-img">
                                                            <input type="radio" name="layout" value="L|L" />
                                                            <img className="image" src={process.env.PUBLIC_URL + "/assests/img/image 63.png"} />
                                                        </label>
                                                    </div>
                                                </div>
                                                <button className="yellow-btn toggle skew">Download Now</button>
                                                <div className="yellow-det">FOR PREVIEW ONLY; DOWNLOAD EDITABLE FILES & HI-RES SCREEN SIZES</div>
                                                <div className="cyber-white" id="target">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input type="text" className="cyber-form" placeholder="Your Name" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="email" className="cyber-form" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input type="email" className="cyber-form" placeholder="Email address" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="text" className="cyber-form" placeholder="Designation" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input type="text" className="cyber-form" placeholder="For how many systems (approx) you intend to use the wallpaper? * i.e. 1-10, 100, 500.." />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="w-100">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                    <label className="form-check-label" for="flexCheckDefault">
                                                                        I accept the Terms &amp; Conditions and Privacy Policy
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="bluey-btn skew">Submit</button>
                                                </div>
                                                <h5 className="mt-5 mb-3">Social Media Awareness</h5>
                                                <p>Follow our social media channels to keep up with the campaign updates and much more!</p>
                                                <ul className="social-tt">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i> </a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i> </a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i> </a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin-in"></i> </a></li>
                                                    <li><a href="#"> <i className="fab fa-youtube"></i> </a></li>
                                                </ul>
                                                <h5 className="mt-5 mb-5">Supported By</h5>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (3).png"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (4).png"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (5).png"} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (1).png"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (2).png"} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swipe-tab-content">
                                                <h5>Awareness Quiz</h5>
                                                <p>The objective of this quiz is to spread awareness around Cyber Security Best Practices among us as individuals who access online services. We must impart basic security hygiene to keep using digital services securely and stay safe online.</p>
                                                <p>Learn Cyber Security the fun way and win prizes!</p>
                                                <div className="row img-cyber">
                                                    <div className="col-md-12">
                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 62(1).png"} />
                                                    </div>
                                                </div>
                                                <div className="cyber-white-2">
                                                    <div className="row">
                                                        <div className="col-md-11">
                                                            <h6>Quiz Winners</h6>
                                                            <p><strong>Many congratulations to the winners!</strong></p>
                                                            <ul>
                                                                <li>Somya Ranjan Sethi</li>
                                                                <li>Gaurav Kumar Gautam</li>
                                                                <li>Siddharth Sharma</li>
                                                                <li>Sunita Nargave</li>
                                                                <li>Sanjay Vaghe</li>
                                                            </ul>
                                                            <h6>Important dates</h6>
                                                            <ul>
                                                                <li>Quiz Start Time: 14:00 hrs IST, Thursday, October 21, 2020</li>
                                                                <li>Quiz End Time: 23:59 hrs IST, Sunday, October 31, 2020</li>
                                                            </ul>
                                                            <h6>Terms & Conditions</h6>
                                                            <ul>
                                                                <li> The quiz is hosted on MyGov’s quiz portal. Please login to participate.</li>
                                                                <li>The quiz is available in bilingual format i.e., English and Hindi.</li>
                                                                <li>You can play only once; multiple entries won’t be allowed.</li>
                                                                <li>It is a time bound quiz, so make haste while the clock ticks. You get 240 seconds to play.</li>
                                                                <li>Top 5 players with the highest scores will win prizes.</li>
                                                                <li>Winners will be adjudged based on maximum number of correct answers.</li>
                                                                <li>In case of multiple participants with the same number of correct answers, the participants with the least time taken will win.</li>
                                                                <li>In case two or more players took the same time, the winners will be decided through a lucky draw.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="mt-5 mb-3">Social Media Awareness</h5>
                                                <p>Follow our social media channels to keep up with the campaign updates and much more!</p>
                                                <ul className="social-tt">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i> </a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i> </a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i> </a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin-in"></i> </a></li>
                                                    <li><a href="#"> <i className="fab fa-youtube"></i> </a></li>
                                                </ul>
                                                <h5 className="mt-5 mb-5">Supported By</h5>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (3).png"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (4).png"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (5).png"} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (1).png"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (2).png"} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swipe-tab-content">
                                                <h5>Awareness Pledge</h5>
                                                <p>Take the <strong>‘Cyber Security Awareness Pledge’</strong> under the<strong> ‘Do Your Part, Be Cyber Smart’</strong> initiative to show your support and solidarity in the fight against Cybercrimes. Join hands to remain committed to inculcate cyber hygiene and online safety practices, both at home and at work to Stay Safe Online and encourage others to do the same for a Safer Cyberspace for all.</p>
                                                <div className="row img-cyber">
                                                    <div className="col-md-7">
                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 62(1)(1).png"} />
                                                    </div>
                                                </div>
                                                <button className="yellow-btn skew">TAKE PLEDGE</button>
                                                <h5 className="mt-5 mb-3">Social Media Awareness</h5>
                                                <p>Follow our social media channels to keep up with the campaign updates and much more!</p>
                                                <ul className="social-tt">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i> </a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i> </a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i> </a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin-in"></i> </a></li>
                                                    <li><a href="#"> <i className="fab fa-youtube"></i> </a></li>
                                                </ul>
                                                <h5 className="mt-5 mb-5">Supported By</h5>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (3).png"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (4).png"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (5).png"} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (1).png"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (2).png"} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swipe-tab-content">
                                                <h5>Poster Competition</h5>
                                                <p>As part of the awareness campaign, DSCI with MyGov have organized an ‘Open Poster Making Competition’ with an aim to create a safer cyberspace through public awareness and to explore the creative instinct of the masses.</p>
                                                <div className="cyber-white-2">
                                                    <div className="row">
                                                        <div className="col-md-11">
                                                            <div className="slider-services-22">
                                                                <div className="col-xs-12 col-sm-6 col-md-3">
                                                                    <div className="box-7-67 hang">
                                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 66(1).png"} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-6 col-md-3">
                                                                    <div className="box-7-67 hang">
                                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 64(1).png"} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-6 col-md-3">
                                                                    <div className="box-7-67 hang">
                                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 65(1).png"} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-6 col-md-3">
                                                                    <div className="box-7-67 hang">
                                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 66(1).png"} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-6 col-md-3">
                                                                    <div className="box-7-67 hang">
                                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 65(1).png"} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-6 col-md-3">
                                                                    <div className="box-7-67 hang">
                                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 64(1).png"} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h6>Poster Making Contest Winners</h6>
                                                            <p><strong>Here is the list of top 5 performers who are declared as winners. Congratulations!</strong></p>
                                                            <ul>
                                                                <li>Rishika Jain</li>
                                                                <li>SrutiSwarupaRath</li>
                                                                <li>C. Sowmya</li>
                                                                <li>Kalyani Prafulla Moharil</li>
                                                                <li>Bakul Raut</li>
                                                            </ul>

                                                            <h6>Topics</h6>
                                                            <p><strong>Create poster(s) on any of the below topics to share tips/thoughts/slogans creatively:</strong></p>
                                                            <ul>
                                                                <li>‘Digital Hygiene is the Vaccine' against Cyber threats</li>
                                                                <li> Good Cyber/Internet habits to stay safe online</li>
                                                                <li>The more we share, the more we must care (Social Media Safety)</li>
                                                                <li> Keeping kids safe online</li>
                                                                <li> Protecting oneself from Cyber Bullying</li>
                                                                <li> Mobile application safety and security/fake apps</li>
                                                                <li>Digital Payment Security tips and preventing payment frauds</li>
                                                            </ul>
                                                            <h6>Competition Guidelines:</h6>
                                                            <ul>
                                                                <li>‘Digital Hygiene is the Vaccine' against Cyber threats</li>
                                                                <li> Good Cyber/Internet habits to stay safe online</li>
                                                                <li>The more we share, the more we must care (Social Media Safety)</li>
                                                                <li> Keeping kids safe online</li>
                                                                <li> Protecting oneself from Cyber Bullying</li>
                                                                <li> Mobile application safety and security/fake apps</li>
                                                                <li>Digital Payment Security tips and preventing payment frauds</li>
                                                            </ul>
                                                            <h6>Important dates</h6>
                                                            <ul>
                                                                <li>Quiz Start Time: 14:00 hrs IST, Thursday, October 21, 2020</li>
                                                                <li>Quiz End Time: 23:59 hrs IST, Sunday, October 31, 2020</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="mt-5 mb-3">Social Media Awareness</h5>
                                                <p>Follow our social media channels to keep up with the campaign updates and much more!</p>
                                                <ul className="social-tt">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i> </a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i> </a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i> </a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin-in"></i> </a></li>
                                                    <li><a href="#"> <i className="fab fa-youtube"></i> </a></li>
                                                </ul>
                                                <h5 className="mt-5 mb-5">Supported By</h5>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (3).png"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (4).png"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (5).png"} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (1).png"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (2).png"} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swipe-tab-content">
                                                <h5>Awareness Posters</h5>
                                                <p>As part of the awareness campaign, DSCI with MyGov have organized an ‘Open Poster Making Competition’ with an aim to create a safer cyberspace through public awareness and to explore the creative instinct of the masses.</p>
                                                <div className="cyber-white-2">
                                                    <div className="row">
                                                        <div className="col-md-11">
                                                            <div className="slider-services-22">
                                                                <div className="col-xs-12 col-sm-6 col-md-3">
                                                                    <div className="box-7-67 hang">
                                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 67.png"} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-6 col-md-3">
                                                                    <div className="box-7-67 hang">
                                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 68.png"} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-6 col-md-3">
                                                                    <div className="box-7-67 hang">
                                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 699.png"} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-6 col-md-3">
                                                                    <div className="box-7-67 hang">
                                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 67.png"} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-6 col-md-3">
                                                                    <div className="box-7-67 hang">
                                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 68.png"} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-6 col-md-3">
                                                                    <div className="box-7-67 hang">
                                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 699.png"} />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="yellow-btn skew">DOWNLOAD ALL POSTERS</button>
                                                <h5 className="mt-5 mb-3">Social Media Awareness</h5>
                                                <p>Follow our social media channels to keep up with the campaign updates and much more!</p>
                                                <ul className="social-tt">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i> </a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i> </a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i> </a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin-in"></i> </a></li>
                                                    <li><a href="#"> <i className="fab fa-youtube"></i> </a></li>
                                                </ul>
                                                <h5 className="mt-5 mb-5">Supported By</h5>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (3).png"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (4).png"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (5).png"} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (1).png"} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="box-7-78">
                                                            <img src={process.env.PUBLIC_URL + "/assests/img/image 3122 (2).png"} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

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

export default CyberSecurityAwarenessMonth
