/*import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { EffectCoverflow } from 'swiper';
import 'swiper/css/autoplay';
/*import "swiper/swiper.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";*/
/*import "./styles.css";*/
/*import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Slider() {

    
    return (
        <div className="col-md-6 d-none d-md-block d-lg-block">
            <div className="box-21-6">
                <h4>Threat Intelligence & Research</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                <section className="swiper-container loading">
                    <div className="swiper-wrapper">




                        <div className="swiper-slide">
                            <img src="assests/img/image-34.png" alt="" className="entity-img" />
                        </div>

                        <img src="assests/img/image333.png" alt=" " className="entity-img" />


                        <img src="assests/img/image-352.png" alt="" className="entity-img" />


                        <img src="assests/img/image-34.png" alt=" " className="entity-img" />
                        <img src="assests/img/image333.png" alt="" className="entity-img" />
                        <img src="assests/img/image-352.png" alt=" " className="entity-img" />

                    </div>
                    <div className="swiper-pagination"></div>

                    <div className="swiper-button-prev swiper-button-white"></div>
                    <div className="swiper-button-next swiper-button-white"></div>


                </section>


            </div >
        </div >

    );
}
export default Slider*/
//import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

export default function Slider() {
    return (
        <>

            <div className="box-21">
                <div className="container-fluid">
                    <div class="container-main">
                        <div class="row">
                            <div className="col-md-6">
                                <div className="w-100 for-mobile-only">
                                    <div className="box-21-1">
                                        <h4>Flagship Events</h4>
                                        <p>As an industry body, we engage with diverse stakeholders, for activities that spin off from our core strategic objectives.</p>
                                    </div>
                                    <div className="row pr-5">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="box-21-2 wobble-horizontal">
                                                <img src="assests/img/Picture2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="box-21-3 wobble-horizontal">
                                                <img src="assests/img/Picture4.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pr-5">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="box-21-4 wobble-horizontal">
                                                <img src="assests/img/Picture3.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="box-21-5 wobble-horizontal">
                                                <img src="assests/img/Picture1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="box-21-6 d-block d-sm-block d-md-none">

                                <h4>Threat Intelligence & Research</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            </div>


                            <Swiper
                                autoplay={true}
                                effect={"coverflow"}
                                grabCursor={true}
                                parallax={true}
                                centeredSlides={true}
                                slidesPerView={2}
                                loop={true}
                                speed={3800}

                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination=/*{{
                    el: '.swiper-pagination',
                    clickable: true,
                }}*/ {true}
                                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                                navigation=
                                {true}
                                /* nextEl: '.swiper-button-next',
                                 prevEl: '.swiper-button-prev',*/


                                className="mySwiper"
                            >

                                <section className="swiper-container loading">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide>
                                            {/*<div className="swiper-slide" style={{ backgroundImage: `url(assests/img/image-34.png)` }} >*/}
                                            <img src="assests/img/image-34.png" alt="" />

                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/*<div className="swiper-slide" style={{ backgroundImage: `url(assests/img/image333.png)` }}>*/}
                                            <img src="assests/img/image333.png" alt=" " />

                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/*<div className="swiper-slide" style={{ backgroundImage: `url(assests/img/image-352.png)` }}>*/}
                                            <img src="assests/img/image-352.png" alt=" " />

                                        </SwiperSlide>

                                        <SwiperSlide>
                                            {/* <div className="swiper-slide" style={{ backgroundImage: `url(assests/img/image-34.png)` }}>*/}
                                            <img src="assests/img/image-34.png" alt=" " />

                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/*<div className="swiper-slide" style={{ backgroundImage: `url(assests/img/image333.png)` }}>*/}
                                            <img src="assests/img/image333.png" alt=" " />

                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/*<div className="swiper-slide" style={{ backgroundImage: `url(assests/img/image-352.png)` }}>*/}
                                            <img src="assests/img/image-352.png" alt=" " />

                                        </SwiperSlide>

                                    </div>
                                    <SwiperSlide>
                                        <div className="swiper-pagination"></div></SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-button-prev swiper-button-white"></div>
                                        <div className="swiper-button-next swiper-button-white"></div>
                                    </SwiperSlide>



                                </section>

                            </Swiper>
                            <a href="#" class="threat wobble-bottom">View All Resource</a>



                        </div>
                    </div>
                </div>
            </div>




        </>
    );
}
