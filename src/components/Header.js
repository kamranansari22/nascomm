import React from 'react'
import { menuArr } from './menuArr'
import { menuArr1 } from './menuArr'
import { Link } from 'react-router-dom'


function Head() {



    return (
        <>

            <div className="top-header d-none-3">
                <div className="container-fluid">
                    <div className="container container-main">
                        <div className="row">
                            <div className="col-md-2 col-6">
                                <Link to="/">
                                    <img src={process.env.PUBLIC_URL + "/assests/img/DSCI-logo-color.png"} alt="logo" className="logo" /></Link>
                            </div>
                            <div className="col-md-4 col-4 d-none d-lg-block d-md-block d-xl-block">
                                <nav className="navbar navbar-expand-md navbar-light bg-trans">
                                    <div className="container-fluid p-0">
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                                {menuArr.map(menu => {
                                                    return <li key={menu.id} className="nav-item dropdown">
                                                        <Link className="nav-link dropdown-toggle" to={menu.link} >
                                                            {menu.title}
                                                        </Link>
                                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            {menuArr1.map(menu => {
                                                                return <li key={menu.id}><a className="dropdown-item" href={menu.link}>{menu.title}</a></li>


                                                            })}
                                                        </ul>


                                                    </li>
                                                })}





                                                {/*<li className="nav-item">
                                                    <Link className="nav-link" to="/news">News</Link>
                                                        </li>*/}

                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-md-6 col-6">
                                <div className="float-end right-sidee">
                                    <ul>
                                        <li id="toggle-search22"><i className="fas fa-search ml-22"></i></li>
                                        <input style={{ display: "none" }} id='searchBar2' name='search' type='search' placeholder='Search&hellip;' />
                                        <li className="nav-item dropdown">
                                            <Link to="/login" className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fas fa-user-alt mr-3"></i> <span className="mobile-only-2">Login</span>
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><Link className="dropdown-item" to="/login"> <i className="fas fa-user-alt mr-3"></i>Member Login</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Head
