import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/images/logo.png'
import './assets/css/bootstrap.min.css'; // Import CSS file
import './assets/css/fontawsom-all.min.css';
import './assets/plugins/testimonial/css/owl.carousel.min.css';
import './assets/plugins/testimonial/css/owl.theme.min.css';
import './assets/css/style.css';

function Navbar (){
        return (
    <header>
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 left-item">
                        <ul>
                            <li><i className="fas fa-envelope-square"></i> Wingsdomesticworkers@gmail.com</li>
                            <li><i className="fas fa-phone-square"></i> +254 712345678</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="nav-head" className="header-nav">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12 nav-img">
                        <img src={Logo} alt=""/>
                        <a data-toggle="collapse" data-target="#menu" href="#menu"><i className="fas d-block d-md-none small-menu fa-bars"></i></a>
                    </div>
                    <div id="menu" className="col-md-9 d-none d-md-block nav-item">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            {/* <Link to="/">Blog</Link> */}
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </header>

        );
    }


export default Navbar;