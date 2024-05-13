import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './assets/css/bootstrap.min.css'; // Import CSS file
import './assets/css/fontawsom-all.min.css';
import './assets/plugins/testimonial/css/owl.carousel.min.css';
import './assets/plugins/testimonial/css/owl.theme.min.css';
import './assets/css/style.css';

function ContactUs (){
        return (
            <div>
     <body className='whole'>
     <Navbar />
            <div className="page-nav no-margin row">
                <div className="container">
                    <div className="row">
                        <h2>Contact Us</h2>
                        <ul>
                            <li> <a href="#"><i className="fas fa-home"></i> Home</a></li>
                            <li><i className="fas fa-angle-double-right"></i> Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row no-margin">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249759.19784092825!2d79.10145254589841!3d12.009924873581818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1448883859107"
        height="450"
        frameBorder="0"
        style={{ width: '100%', border: '0' }}
        allowFullScreen
        title="Google Maps"
    ></iframe>
</div>


            <div className="row contact-rooo no-margin">
                <div className="container">
                    <div className="row">
                        <div style={{ padding: '20px' }} className="col-sm-6">
                            <h2 style={{ fontSize: '18px' }}>Contact Form</h2>
                            <div className="row">
                                <div style={{ paddingTop: '10px' }} className="col-sm-3"><label>Enter Name :</label></div>
                                <div className="col-sm-8"><input type="text" placeholder="Enter Name" name="name" className="form-control input-sm" /></div>
                            </div>
                            <div className="row">
                                <div style={{ paddingTop: '10px' }} className="col-sm-3"><label>Email Address :</label></div>
                                <div className="col-sm-8"><input type="text" placeholder="Enter Email Address" name="email" className="form-control input-sm" /></div>
                            </div>
                            <div className="row">
                                <div style={{ paddingTop: '10px' }} className="col-sm-3"><label>Mobile Number :</label></div>
                                <div className="col-sm-8"><input type="text" placeholder="Enter Mobile Number" name="mobile" className="form-control input-sm" /></div>
                            </div>
                            <div className="row">
                                <div style={{ paddingTop: '10px' }} className="col-sm-3"><label>Message :</label></div>
                                <div className="col-sm-8"><textarea rows="5" placeholder="Enter Your Message" name="message" className="form-control input-sm" /></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <button className="btn btn-info btn-sm">Send Message</button>
                                </div>
                            </div>
                        </div>
                        </div>
    </div>
    </div>
        
<Footer/>

</body>

            </div>
        );
    }


export default ContactUs;