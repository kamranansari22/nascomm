
import Slider from 'react-slick'




import React from 'react'

function Banner() {



    const sliderSettings = {
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
    }

    {/* const renderArrows = () => {
        return (
            <div className="slider-arrow">
                <button
                    type="button"
                    className="slick-arrow slick-prev"
                    onClick={() => this.slider.slickPrev()}
                >
                    Prev
                </button>
                <button
                    type="button"
                    className="slick-arrow slick-next"
                    onClick={() => this.slider.slickNext()}
                >
                    Next
                </button>
            </div>
        );
    };*/}

    return (
        <>


            <div className="banner {dynamicClass}">

                <div>
                    <Slider {...sliderSettings} >
                        <div>

                            <div>


                                <img src={process.env.PUBLIC_URL + "/assests/img/Group 59.png"} alt="banner" />
                            </div>
                            <div className="banner-content">

                                <img src={process.env.PUBLIC_URL + "/assests/img/banner-logo.png"} alt="banner_img" />
                                <button className="banner-btn">Supported by the office of National Cyber Security Coordinator</button>
                                <h3>Repository of India’s Cybertech Capabilities</h3>
                                <p>Discover Start-ups, Companies, R&D Labs, Academia and Individuals Building India’s Cyber Capabilities</p>
                            </div>

                        </div>
                        <div>

                            <div>


                                <img src={process.env.PUBLIC_URL + "/assests/img/Group78.png"} alt="banner" />
                            </div>


                        </div>
                        <div>

                            <div>
                                <img src={process.env.PUBLIC_URL + "/assests/img/Group449.png"} alt="banner" />
                            </div>


                        </div>
                    </Slider >


                </div>

            </div>


        </>
    )
}

export default Banner
