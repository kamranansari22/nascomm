import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";







function Box21() {
    {/*const sliderSettings = {
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
    }*/}

    return (
        <>
            <div className="box-21">
                <div className="container-fluid">
                    <div className="container-main">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="w-100 for-mobile-only">
                                    <div className="box-21-1">
                                        <h4>Flagship Events</h4>
                                        <p>As an industry body, we engage with diverse stakeholders, for activities that spin off from our core strategic objectives.</p>
                                    </div>
                                    <div className="row pr-5">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="box-21-2 wobble-horizontal">
                                                <img src={process.env.PUBLIC_URL + "/assests/img/Picture2.png"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="box-21-3 wobble-horizontal">
                                                <img src={process.env.PUBLIC_URL + "/assests/img/Picture4.png"} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pr-5">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="box-21-4 wobble-horizontal">
                                                <img src={process.env.PUBLIC_URL + "/assests/img/Picture3.png"} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="box-21-5 wobble-horizontal">
                                                <img src={process.env.PUBLIC_URL + "/assests/img/Picture1.png"} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 d-none d-md-block d-lg-block">
                                <div className="box-21-6">
                                    <h4>Threat Intelligence & Research</h4>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

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
                                                    <div className="swiper-slide" style={{ backgroundImage: `url(assests/img/image-34.png)` }} >
                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image-34.png"} alt="" />
                                                    </div>

                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide" style={{ backgroundImage: `url(assests/img/image333.png)` }}>
                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image333.png"} alt=" " />
                                                    </div>

                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide" style={{ backgroundImage: `url(assests/img/image-352.png)` }}>
                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image-352.png"} alt=" " />
                                                    </div>

                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    {/* <div className="swiper-slide" style={{ backgroundImage: `url(assests/img/image-34.png)` }}>*/}
                                                    <img src={process.env.PUBLIC_URL + "/assests/img/image-34.png"} alt=" " />

                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide" style={{ backgroundImage: `url(assests/img/image333.png)` }}>
                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image333.png"} alt=" " />
                                                    </div>

                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide" style={{ backgroundImage: `url(assests/img/image-352.png)` }}>
                                                        <img src={process.env.PUBLIC_URL + "/assests/img/image-352.png"} alt=" " />
                                                    </div>

                                                </SwiperSlide>

                                            </div>

                                            <div className="swiper-pagination"></div>

                                            <div className="swiper-button-prev swiper-button-white"></div>
                                            <div className="swiper-button-next swiper-button-white"></div>

                                        </section>
                                    </Swiper>
                                    <a href="/" className="threat skew">View All Resource</a>
                                </div>


                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box21
