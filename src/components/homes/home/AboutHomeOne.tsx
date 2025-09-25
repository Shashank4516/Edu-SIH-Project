import { Link } from "react-router-dom";

const AboutHomeOne = () => {
  return (
    <>
      <section id="about" className="about-section fix section-padding pt-0">
        <div className="about-wrapper">
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="about-image wow img-custom-anim-left"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <img src="assets/img/about/01.jpg" alt="img" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="about-content">
                <div className="section-title">
                  <h6 className="wow fadeInUp">About CollegeMatch</h6>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    AI-Powered College <br />& Degree Discovery
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Our intelligent platform uses AI to match students with the
                  perfect colleges and degree programs. Take our comprehensive
                  quiz to discover your ideal educational path based on your
                  interests, skills, and career aspirations.
                </p>
                <div className="counter-box-items">
                  <div
                    className="counter-content wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <h2>
                      <span className="count">500</span>+
                    </h2>
                    <p>Colleges & Universities</p>
                  </div>
                  <p className="text wow fadeInUp" data-wow-delay=".5s">
                    Our AI-powered platform helps students discover their
                    perfect college match, ensuring they make informed decisions
                    about their educational future and career path.
                  </p>
                </div>
                <Link
                  to="/register"
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  Start Your Quiz
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="about-image-items">
                <div
                  className="about-image-2 wow img-custom-anim-top"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.5s"
                >
                  <img src="assets/img/about/03.jpg" alt="img" />
                </div>
                <div
                  className="about-image-3 wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <img src="assets/img/about/02.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHomeOne;
