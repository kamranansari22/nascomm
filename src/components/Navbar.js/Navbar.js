import React from 'react'

import { menuItems } from './menuItems'
import MenuItem from './MenuItem'



const Navbar = () => {

    return (
        <>
            <div className="top-header d-none-2">
                <div className="container-fluid">
                    <div className="container-main">
                        <div className="row">
                            <div className="col-md-10 col-10">
                                <nav className="navbar navbar-expand-lg navbar-light bg-transs">
                                    <div className="container-fluid p-0">
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent22" aria-controls="navbarSupportedContent22" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <a className="navbar-brand" href="/"><img src="assests/img/DSCI-logo-color.png" alt="logo" className="logo" /></a>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent22">
                                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                                {menuItems.map((menu, index) => {
                                                    return <MenuItem items={menu} key={index} />;



                                                })}

                                            </ul>
                                        </div>
                                    </div>
                                </nav>

                            </div>

                            <div className="col-md-2 col-2">
                                <div className="float-end right-sidee">
                                    <ul>
                                        <li id="toggle-search2"><i className="fas fa-search ml-22"></i></li>
                                        <input style={{ display: "none" }} id='searchBar' name='search' type='search' placeholder='Search&hellip;' />

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Top-Header */}
            <header className="main-nav">
                <div className="container container-main">
                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-10">
                            <nav className="navbar navbar-expand-lg navbar-light bg-transs">
                                <div className="container-fluid p-0">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                            {menuItems.map((menu, index) => {
                                                return <MenuItem items={menu} key={index} />;


                                            })}

                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
};

export default Navbar;