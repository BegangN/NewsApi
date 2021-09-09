import React from 'react';

export default function Header() {
    return (
        <>
            <div>
                {/* Navigation area - bootstrap 4*/}
                <div id="home"></div>
                <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light bg-white static-top">
                    <div className="container">
                        <a href="#home" className="navbar-brand">
                            <img className="img-fluid" src="./assets/images/logo.png"  alt="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a href="#home" className="nav-link font-weight-bold">Home</a></li>
                                <li className="nav-item">
                                    <a className="nav-link font-weight-bold" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-weight-bold" href="#news">News</a>
                                </li>

                                <li className="mr-5 nav-item">
                                    <a className="nav-link font-weight-bold " href="#contact">Contact</a>
                                </li>
                                <li className="mr-5 nav-item">

                                    <span className="fa fa-search form-control-feedback"></span>


                                </li>


                            </ul>


                        </div>

                    </div>


                </nav>
                {/* banner area with text and buttons  */}
                <div className="header container-fluid">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-6 mt-3">
                                <img  src="./assets/images/banner.png" height="500px" width="100%" alt="banner " />
                            </div>
                            <div className="col-md-6 pt-5">
                                <h2 className="mt-5 pt-5 font-weight-bold text-uppercase text-black">NY Times Most Popular Articles</h2>

                                <p className="mt-4 text-black">Financial planners and portfolio managers are
                                    agents on behalf of their principals and are given responsibility for the principals' assets.
                                    A lessee may be in charge of protecting and safeguarding assets that do not belong to them.
                                    Even though the lessee is tasked with the job of taking care of the assets.</p>
                                <button className="btn btn-dark btn-lg round mt-3">Read News</button>

                            </div>

                        </div>
                    </div>

                </div>


            </div>
        </>
    );
}
