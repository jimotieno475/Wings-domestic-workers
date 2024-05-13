import React from 'react';
import './assets/css/bootstrap.min.css'; // Import CSS file
import './assets/css/fontawsom-all.min.css';
import './assets/plugins/testimonial/css/owl.carousel.min.css';
import './assets/plugins/testimonial/css/owl.theme.min.css';
import './assets/css/style.css';

function Footer (){
        return (
            <div>
<body className='whole'>
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <h2>About Us</h2>
                    <p>
                        Wings Domestic Workers is aleading platform of connecting domestic workers and Employers in kenya
                    </p>
                    <p>We give workers a platform to showcase themselves to the employers to get jobs from them </p>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h2>Jobs you can post here</h2>
                    <ul className="list-unstyled link-list">
                        <li><a ui-sref="about" href="#/about">Shamba boy</a><i className="fa fa-angle-right"></i></li>
                        <li><a ui-sref="portfolio" href="#/portfolio">Cook</a><i className="fa fa-angle-right"></i></li>
                        <li><a ui-sref="products" href="#/products">Cleaner</a><i className="fa fa-angle-right"></i></li>
                        <li><a ui-sref="gallery" href="#/gallery">Lonemorering</a><i className="fa fa-angle-right"></i></li>
                        <li><a ui-sref="contact" href="#/contact">Loundry</a><i className="fa fa-angle-right"></i></li>

                    </ul>
                </div>
                <div className="col-md-4 col-sm-12 map-img">
                    <ul className="list-unstyled link-list">
                    <li><a ui-sref="contact" href="#/contact">Plumbing</a><i className="fa fa-angle-right"></i></li>
                    <li><a ui-sref="contact" href="#/contact">Maid</a><i className="fa fa-angle-right"></i></li>
                    <li><a ui-sref="contact" href="#/contact">Flower Treaming</a><i className="fa fa-angle-right"></i></li>
                    </ul>
                    <h2>Contact Us</h2>
                    <address className="md-margin-bottom-40">
                        Phone: +254 712345678<br/>
                        Email: <a href="mailto:.com" className="">Wingsdomesticworkers@gmail.com</a><br/>
                        Web: <a href="https://smarteyeapps.com/" classNameName="">www.bluedart.in</a>
                    </address>

                </div>
            </div>
        </div>
        

    </footer>
    <div className="copy">
            <div className="container">
                <a href="https://www.smarteyeapps.com/">2024 &copy; All Rights Reserved | Designed and Developed by Jim$Owen</a>

            </div>

        </div>

</body>

            </div>
        );
    }


export default Footer;