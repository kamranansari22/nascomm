import React from 'react'

function Box20() {
    return (
        <>
            <div className="box-20">
                <div className="container-fluid">
                    <div className="container-main">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="br-white"></div>
                            </div>
                            <div className="row box-20-1">
                                <div className="col-md-4">
                                    <h4>Centers of Excellence</h4>
                                    <p>As an industry body, we engage with diverse stakeholders, for activities that spin off from our core strategic objectives.</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="box-20-2 float-shadow">
                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 13.png"} alt="" />
                                        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box-20-2 float-shadow">
                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 13(1).png"} alt="" />
                                        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="box-20-2 float-shadow">
                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 13.png"} alt="" />
                                        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box-20-2 float-shadow">
                                        <img src={process.env.PUBLIC_URL + "/assests/img/image 13(3).png"} alt="" />
                                        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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

export default Box20
