import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LandingImg from './assets/images/landing4 .png';
import Cleaner from './assets/images/services/cleaner1.jpg';
import Cooking from './assets/images/services/cook 1.avif';
import LawnMowing from './assets/images/services/loan $ flower.jpg';
import Carcleaning from './assets/images/services/car wash 1.avif';
import Maid from './assets/images/services/maid 2.jpg';
import Laundry from './assets/images/services/loungry1.jpg';
import Plumbing from './assets/images/services/plumber 1.jpg';
import Shambaboy from './assets/images/services/shamba 1.jpg'
import './assets/css/bootstrap.min.css'; // Import CSS file
import './assets/css/fontawsom-all.min.css';
import './assets/plugins/testimonial/css/owl.carousel.min.css';
import './assets/plugins/testimonial/css/owl.theme.min.css';
import './assets/css/style.css';

function Home (){
    const navigate=useNavigate()
    // const redirectToLogin = () => {
    //     navigate('/login');}
  return (
            <div>
     <body className='whole'>
        <Navbar/>
    <div className="slider">
        <div className="container">
            <div className="slider-titl row">
                <div className="col-md-6 slidgb">
                     <h1>We Promise keep you so fresh and so Clean with best services</h1>
                    <p>Book services from the workers here and for workers search for Employers here.</p>
                    <div className="bnkji">
                    <button  onClick={() => navigate('/login')} className="btn btn-info"  >Book A Worker</button>
                    <button  onClick={() => navigate('/workerlogin')} className="btn btn-info"  >Register as a Worker</button>
                    </div>
                </div>
                <div className="col-md-6 slid-img">
                    <img src={LandingImg} alt=""/>
                </div> 
            </div>
        </div>
    </div>
    <div>
         <section className="latest-features">
            <div className="container">
                <div className="inner-title">
    
                    <h2> Latest Features & Services</h2>
                    <p>Take a look at some of latest features and services provided by our team</p>
                </div>
    
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={Cleaner} alt=""/>
                           <div className="bn-dgt">
                            <i className="fas fa-hospital-alt"></i>
                            <h5>House Cleaning</h5>
                            <p>The workers provide quality work to the employees with the best cleaning skills they can clean Offices , Homes , Hospitals and all work places.</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={Cooking} alt=""/>
                           <div className="bn-dgt">
                            <i className="fas fa-user-md"></i>
                            <h5>Cooking</h5>
                            <p>Our Cooks makes the best meals in homes ,events ,hotels  or anywhere they can be required to Cook.</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={LawnMowing} alt=""/>
                           <div className="bn-dgt">
                            <i className="fas fa-briefcase-medical"></i>
                            <h5>Lawn Mowing</h5>
                            <p> Our Workers provide good servicess of Loan Mowing with good machines and grass disposing if necessary in your compound.</p>
                            </div>
                        </div>
                    </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={Carcleaning} alt=""/>
                           <div className="bn-dgt">
                                <i className="fas fa-briefcase-medical"></i>
                                <h5>Car Cleaning</h5>
                                <p> Our car cleaners give you services at the comfort of your home or you can take your car to their car washes.</p>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={Maid} alt=""/>
                           <div className="bn-dgt">
                                <i className="fas fa-briefcase-medical"></i>
                                <h5>Maid</h5>
                                <p> our workers provide good maid services cooking ,laundry and cleaning with high quality and descipline.</p>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={Laundry} alt=""/>
                           <div className="bn-dgt">
                                <i className="fas fa-briefcase-medical"></i>
                                <h5>Laundry</h5>
                                <p> You will be provided with the best laundry services from our workers from washing ,drying and ironing if needed.</p>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={Plumbing} alt=""/>
                           <div className="bn-dgt">
                                <i className="fas fa-briefcase-medical"></i>
                                <h5>Plumbing</h5>
                                <p> We have the best plumbers you can ever want in kenya you will be given the best services.</p>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-feature">
                           <img src={Shambaboy} alt=""/>
                           <div className="bn-dgt">
                                <i className="fas fa-briefcase-medical"></i>
                                <h5>Farm Worker /Shamba Boy</h5>
                                <p>We have very skilled farm workers who will give you very good services .</p>
                             </div>
                        </div>
                    </div>
                </div>
                    
            </div>
    
        </section>
        </div>

<div>
    <section className="packages">
        <div className="container">
           <div className="inner-title">

                <h2>Our Packages</h2>
                <p>Take a look at some of our Packages</p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="product-box ultimate">
                        <div className="product-popular">
                            Most Popular
                        </div>
                        <div className="product-header">
                            <h4>
                                Workers Package
                            </h4>
                            <p>
                                Pay to join the workers
                            </p>
                        </div>
                        <div className="product-price">
                            1000ksh<span className="term">/Unlimited</span>
                        </div>
                        <div className="product-features">
                            <ul className="smal">
                                <li>
                                    Paid through M-pesa
                                </li>
                                <li>
                                    Need to pay to join
                                </li>
                            </ul>
                        </div>
                        <div className="product-order">
                            <a className="btn btn-info" href="products-cloud-hosting.html#cloud-starter-monthly">
                                <i className="fas fa-shopping-cart icon-left"></i>Order Now
                            </a>
                        </div>
                    </div>
                </div>




                </div>
            </div>
        
    </section>
    </div>
       <div>
        <section className="with-medical">
        <div className="container">
           <div className="inner-title">

                <h2>About Us</h2>
                <p>Take a look at some of our key features</p>
            </div>
            <div className="row">
               
                <div className="col-lg-6 col-md-12 txtr">
                    <h4>Why choose Workers  from <br/>
                     <span>Wings Domestic Workers </span>   
                    </h4>
                    <p>We are always give the best services in kenya in all places in the country From the best workers in the county always prefer us all the time.</p>
                   <ul>
                       <li><i className="fa fa-check"></i> Our Workers come i time .</li>
                       <li><i className="fa fa-check"></i> Our workers do the best jobs always .</li>
                       <li><i className="fa fa-check"></i> We have workers to do all jobs at your home .</li>
                       <li><i className="fa fa-check"></i> Best services in kenya always .</li>
                   </ul>
                </div>
                
                <div className="col-lg-6 col-md-12">
                       <div className="row">
                           <div className="col-md-6">
                               <div className="count-bx">
                                   <h4>22K</h4>
                                   <p>Services Done</p>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="count-bx">
                                   <h4>11K</h4>
                                   <p>Total Clients</p>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="count-bx">
                                   <h4>465</h4>
                                   <p>Projects Done</p>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="count-bx">
                                   <h4>14Y</h4>
                                   <p>Experiance</p>
                               </div>
                           </div>
                       </div>
                </div>
                
            </div>
        </div>
    </section>
    </div>
<di>
    <section className="custom-msg">
        <div className="container">
           <div className=" cust-msg">
                <h2>Always report to us incase of any incoveniences</h2>
                <p>Always report to us inace of any inconveniences from the workers<br/> or the boss our team will folow up and will do the best to solve it</p>
                <div className="btn btn-warning">Report to Us</div>
           </div>
           
        </div>
    </section>
    </di>
<Footer/>
</body>

            </div>
        );
    }


export default Home;