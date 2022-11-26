import React from 'react'
import './styles.css'
import Slider from 'react-slick'
import $ from 'jquery'
import "jquery-ui-dist/jquery-ui"
import { useEffect } from 'react'

function GrandChallenge() {

    useEffect(() => {
        $(function () {
            'use strict';

            var $swipeTabsContainer = $('.swipe-tabs'),
                $swipeTabs = $('.swipe-tab'),
                $swipeTabsContentContainer = $('.swipe-tabs-container'),
                currentIndex = 0,
                activeTabClassName = 'active-tab';

            $swipeTabsContainer.on('init', function (event, slick) {
                $swipeTabsContentContainer.removeClass('invisible');
                $swipeTabsContainer.removeClass('invisible');

                currentIndex = slick.getCurrent();
                $swipeTabs.removeClass(activeTabClassName);
                $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
            });

            $swipeTabsContainer.slick({
                //slidesToShow: 3.25,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                infinite: false,
                autoplaySpeed: 4000,
                swipeToSlide: true,
                touchThreshold: 10
            });

            $swipeTabsContentContainer.slick({
                asNavFor: $swipeTabsContainer,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: false,
                infinite: false,
                swipeToSlide: true,
                draggable: false,
                touchThreshold: 10
            });


            $swipeTabs.on('click', function (event) {
                // gets index of clicked tab
                currentIndex = $(this).data('slick-index');
                $swipeTabs.removeClass(activeTabClassName);
                $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
                $swipeTabsContainer.slick('slickGoTo', currentIndex);
                $swipeTabsContentContainer.slick('slickGoTo', currentIndex);
            });

            //initializes slick navigation tabs swipe handler
            $swipeTabsContentContainer.on('swipe', function (event, slick, direction) {
                currentIndex = $(this).slick('slickCurrentSlide');
                $swipeTabs.removeClass(activeTabClassName);
                $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
            });
        });


    }, [])
    const tabs_rdf = {
        padding: '70px 0px 0px',
        zIndex: '9',
        position: 'relative'
    }

    const swipe_tab = {
        height: '100px',
        color: '#525252',
        fontSize: '12px',
        background: '#fff',
        marginRight: '20px',
        padding: '20px',
        justifyContent: 'center'
    }



    const swipeTabsContainer = {

        //slidesToShow: 3.25,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        infinite: false,
        autoplaySpeed: 4000,
        swipeToSlide: true,
        touchThreshold: 10
    }

    const swipeTabsContentContainer = {

        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        infinite: false,
        swipeToSlide: true,
        draggable: false,
        touchThreshold: 10
    }

    const sliderServices_22 = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1025,
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
            <div className="banner-inner-pagess">

                <img src={process.env.PUBLIC_URL + "/assests/img/Rectangle5-116.png"} alt=" " />

            </div>

            <div className="cyber-sec cyber-sec-month">
                <div className="container-fluid">
                    <div className="container-main">
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Cyber Security Grand Challenge</h4>
                                <p>MeitY, in partnership with DSCI, has launched the Cyber Security Grand Challenge to provide impetus towards product innovation in the Cyber Security start-up ecosystem. This initiative seeks to nurture start-ups that diversify the industry and boost the development of niche and advanced solutions. The Grand Challenge for Cyber Security is designed to promote a culture of innovation and entrepreneurship by building key cybersecurity capabilities in the country.</p>
                                <p>Registrations are now open. We invite start-ups and budding entrepreneurs who comply with the start-up definition as defined by DIPP to participate in the Grand Challenge. Individuals who are not yet registered can register as a start-up and participate. Please visit the portal to check the complete eligibility criteria.</p>
                                <p className="mt-md-5">Grand Challenge is a 9 months long process under various stages. Under it, participants need to create solutions around 6 defined Problem Statement areas which include, microservices, IoT, Biometrics, Hardware Security, etc. A unique feature, the IPR of the product being developed as part of the challenge will be owned by the respective startup and not MeitY or DSCI.</p>
                                <p>Participants will compete in teams in three different stages: Idea, Minimal Viable Product (MVP) and Final Product Building. In the first stage, teams will propose implementable ideas to solve identified Cyber Security Problem statement(s). During the course of the event, participating teams would be provided with handholding monetary support and mentorship by Cyber Security experts.</p>
                                <p>In the Idea stage, 12 shortlisted teams will receive INR 5 Lakh each and 6 teams will receive INR 10 Lakh each in the MVP stage. Multiple mentorship workshops would also be conducted to guide the participants throughout the grand challenge. The winning team with the best judged solution will receive a grand prize of INR 1 Crore whereas 1st runner up and 2nd runner up will receive INR 60 Lakh and INR 40 Lakh respectively</p>
                                <p>Budding entrepreneurs are invited to submit their ideas in a chance to fast track their growth, be mentored by the best and win remarkable prizes. Industry experts are invited to contribute to the national cybersecurity building initiative and explore an opportunity to mentor the best talent in the country.</p>
                                <button className="bluey-btn mt-5 skew">Know More</button>
                            </div>
                        </div>
                        <div className="tabs-rdf" style={tabs_rdf} >
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="sub-header ">
                                        <Slider {...swipe_tab}>
                                            <div className="swipe-tabs">


                                                <div className="swipe-tab">Winners</div>
                                                <div className="swipe-tab">Awards and Outcome</div>
                                                <div className="swipe-tab">Problem Statements</div>
                                                <div className="swipe-tab">MVP Stage Shortlists</div>
                                                <div className="swipe-tab">Idea Stage Shortlists</div>

                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="main-container">
                                        <div className="swipe-tabs-container ">




                                            <div className="swipe-tab-content">

                                                <h5>Winners</h5>
                                                <img src={process.env.PUBLIC_URL + "/assests/img/image 70.png"} className="img-grand" />

                                            </div>
                                            <div className="swipe-tab-content">

                                                <h5>Awards and Outcome</h5>
                                                <img src={process.env.PUBLIC_URL + "/assests/img/image 72.png"} className="img-grand2" />

                                            </div>
                                            <div className="swipe-tab-content">

                                                <h5>Problem Statements</h5>
                                                <img src={process.env.PUBLIC_URL + "/assests/img/image 73.png"} className="img-grand" />

                                            </div>
                                            <div className="swipe-tab-content">

                                                <h5>MVP Stage Shortlists</h5>
                                                <img src={process.env.PUBLIC_URL + "/assests/img/image 74.png"} className="img-grand" />

                                            </div>
                                            <div className="swipe-tab-content">

                                                <h5>Idea Stage Shortlists</h5>
                                                <img src={process.env.PUBLIC_URL + "/assests/img/image 75.png"} className="img-grand" />

                                            </div>




                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <button className="bluey-btn2 w-100 skew">Visit Challenge Portal</button>
                        <h6 className="text-center grand-contact">Contact Details</h6>
                        <p className="text-center">in case of any queries, please write to: <strong>grand-challenge@meity.gov.in</strong></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GrandChallenge
