import { Link } from "react-router-dom";
import Count from "../../../common/Count";

 

const HeroHomeOne = () => {
  return (
    <>
        <section className="hero-section hero-1 fix">
            <div className="shape-left">
                <img src="assets/img/hero/shape-left.png" alt="img" />
            </div>
            <div className="shape-right">
                <img src="assets/img/hero/shape-right.png" alt="img" />
            </div>
            <div className="dot-shape float-bob-x">
                <img src="assets/img/hero/dot.png" alt="img" />
            </div>
            <div className="vector-shape float-bob-y">
                <img src="assets/img/hero/vectoe.png" alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content">
                            <span className="wow fadeInUp">Welcome to CollegeMatch</span>
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                AI-Powered College
                                & Degree Discovery
                                Platform
                            </h1>
                            <h3 className="wow fadeInUp" data-wow-delay=".5s">Discover Your Perfect College Match with Our Intelligent Quiz System</h3>
                            <div className="hero-button wow fadeInUp" data-wow-delay=".7s">
                                <Link to="/register" className="theme-btn hover-white">Start Your College Journey</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="assets/img/hero/hero-1.jpg" alt="img" className="img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                        <div className="counter-box float-bob-x">
                            <p>More than</p>
                            <h2><span className="odometer" data-count="500">
                              <Count number={500} text='+' />
                              </span></h2>
                            <p>Colleges & Universities</p>
                        </div>
                        <div className="rating-box float-bob-y">
                            <div className="content">
                                <h2><span className="odometer" data-count="4.8">
                                  <Count number={4} text=".8k" />
                                  </span></h2>
                                <p>10,000+ Students Helped</p>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <img src="assets/img/hero/trustpilot-logopng.png" alt="img" />
                        </div>
                        <div className="circle-img float-bob-y"> 
                            <img src="assets/img/hero/circle.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default HeroHomeOne;