import { Link } from "react-router-dom";

const PopularCoursesHomeOne = () => {
  return (
    <>
      <section
        id="colleges"
        className="popular-courses-section fix section-padding section-bg"
      >
        <div className="container">
          <div className="section-title-area align-items-end">
            <div className="section-title">
              <h6 className="wow fadeInUp">Featured Colleges</h6>
              <h2 className="wow fadeInUp" data-wow-delay=".3S">
                Discover Top Government Colleges
              </h2>
            </div>
            <ul className="nav">
              <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
                <a href="#All" data-bs-toggle="tab" className="nav-link active">
                  All Colleges
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                <a
                  href="#Engineering"
                  data-bs-toggle="tab"
                  className="nav-link"
                >
                  Engineering
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
                <a href="#Medical" data-bs-toggle="tab" className="nav-link">
                  Medical
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay=".8s">
                <a href="#Arts" data-bs-toggle="tab" className="nav-link">
                  Arts & Science
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div id="All" className="tab-pane fade show active">
              <div className="row">
                <div
                  className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/01.jpg" alt="img" />
                        <h3 className="courses-title">IIT Delhi</h3>
                        <h4 className="topic-title">
                          Indian Institute of Technology
                        </h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Engineering Institute with World-Class
                            Facilities
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Engineering Institute with World-Class
                            Facilities
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/02.jpg" alt="img" />
                        <h3 className="courses-title">AIIMS Delhi</h3>
                        <h4 className="topic-title">
                          All India Institute of Medical Sciences
                        </h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Medical Institute with Advanced Healthcare
                            Training
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Medical Institute with Advanced Healthcare
                            Training
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/03.jpg" alt="img" />
                        <h3 className="courses-title">DU Delhi</h3>
                        <h4 className="topic-title">University of Delhi</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Comprehensive Arts & Science Programs with Research
                            Excellence
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Comprehensive Arts & Science Programs with Research
                            Excellence
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/04.jpg" alt="img" />
                        <h3 className="courses-title">NIT Trichy</h3>
                        <h4 className="topic-title">
                          National Institute of Technology
                        </h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Excellence in Technology Education with Industry
                            Partnerships
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Excellence in Technology Education with Industry
                            Partnerships
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/05.jpg" alt="img" />
                        <h3 className="courses-title">Graphic Design</h3>
                        <h4 className="topic-title">
                          Graphic Design Masterclass
                        </h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Graphics</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            The Complete Graphic Design Masterclass
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Graphics</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Engineering Institute with World-Class
                            Facilities
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>The Complete Graphic Design Masterclass</span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/06.jpg" alt="img" />
                        <h3 className="courses-title">Foundations AI</h3>
                        <h4 className="topic-title">Artificial Intelligence</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Tech & AI</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Foundations of Artificial Intelligence (AI)
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Tech & AI</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Foundations of Artificial Intelligence (AI)
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/07.jpg" alt="img" />
                        <h3 className="courses-title">Leadership</h3>
                        <h4 className="topic-title">Communication Skills</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Effective Communication and Leadership Skills
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Effective Communication and Leadership Skills
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/08.jpg" alt="img" />
                        <h3 className="courses-title">Development</h3>
                        <h4 className="topic-title">Web Development</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Development</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Basic Web Development Bootcamp WordPress
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Development</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Basic Web Development Bootcamp WordPress
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="Design" className="tab-pane fade">
              <div className="row">
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/01.jpg" alt="img" />
                        <h3 className="courses-title">IIT Bombay</h3>
                        <h4 className="topic-title">
                          Indian Institute of Technology
                        </h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Engineering</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Engineering Institute with World-Class
                            Facilities
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Engineering Institute with World-Class
                            Facilities
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/02.jpg" alt="img" />
                        <h3 className="courses-title">IIT Madras</h3>
                        <h4 className="topic-title">
                          Indian Institute of Technology
                        </h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Medical Institute with Advanced Healthcare
                            Training
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Medical Institute with Advanced Healthcare
                            Training
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/03.jpg" alt="img" />
                        <h3 className="courses-title">Programming</h3>
                        <h4 className="topic-title">
                          Advance Machine Learning
                        </h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Comprehensive Arts & Science Programs with Research
                            Excellence
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Comprehensive Arts & Science Programs with Research
                            Excellence
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/04.jpg" alt="img" />
                        <h3 className="courses-title">Marketing</h3>
                        <h4 className="topic-title">Digital Marketing</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Excellence in Technology Education with Industry
                            Partnerships
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Excellence in Technology Education with Industry
                            Partnerships
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/05.jpg" alt="img" />
                        <h3 className="courses-title">Graphic Design</h3>
                        <h4 className="topic-title">
                          Graphic Design Masterclass
                        </h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Graphics</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            The Complete Graphic Design Masterclass
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Graphics</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Engineering Institute with World-Class
                            Facilities
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>The Complete Graphic Design Masterclass</span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/06.jpg" alt="img" />
                        <h3 className="courses-title">Foundations AI</h3>
                        <h4 className="topic-title">Artificial Intelligence</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Tech & AI</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Foundations of Artificial Intelligence (AI)
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Tech & AI</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Foundations of Artificial Intelligence (AI)
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/07.jpg" alt="img" />
                        <h3 className="courses-title">Leadership</h3>
                        <h4 className="topic-title">Communication Skills</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Effective Communication and Leadership Skills
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Effective Communication and Leadership Skills
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/08.jpg" alt="img" />
                        <h3 className="courses-title">Development</h3>
                        <h4 className="topic-title">Web Development</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Development</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Basic Web Development Bootcamp WordPress
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Development</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Basic Web Development Bootcamp WordPress
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="Business" className="tab-pane fade">
              <div className="row">
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/01.jpg" alt="img" />
                        <h3 className="courses-title">AIIMS Delhi</h3>
                        <h4 className="topic-title">
                          All India Institute of Medical Sciences
                        </h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Medical</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Engineering Institute with World-Class
                            Facilities
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Engineering Institute with World-Class
                            Facilities
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/02.jpg" alt="img" />
                        <h3 className="courses-title">IIT Madras</h3>
                        <h4 className="topic-title">
                          Indian Institute of Technology
                        </h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Medical Institute with Advanced Healthcare
                            Training
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Medical Institute with Advanced Healthcare
                            Training
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/03.jpg" alt="img" />
                        <h3 className="courses-title">Programming</h3>
                        <h4 className="topic-title">
                          Advance Machine Learning
                        </h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Comprehensive Arts & Science Programs with Research
                            Excellence
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Comprehensive Arts & Science Programs with Research
                            Excellence
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/04.jpg" alt="img" />
                        <h3 className="courses-title">Marketing</h3>
                        <h4 className="topic-title">Digital Marketing</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Excellence in Technology Education with Industry
                            Partnerships
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Excellence in Technology Education with Industry
                            Partnerships
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/05.jpg" alt="img" />
                        <h3 className="courses-title">Graphic Design</h3>
                        <h4 className="topic-title">
                          Graphic Design Masterclass
                        </h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Graphics</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            The Complete Graphic Design Masterclass
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Graphics</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Engineering Institute with World-Class
                            Facilities
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>The Complete Graphic Design Masterclass</span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/06.jpg" alt="img" />
                        <h3 className="courses-title">Foundations AI</h3>
                        <h4 className="topic-title">Artificial Intelligence</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Tech & AI</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Foundations of Artificial Intelligence (AI)
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Tech & AI</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Foundations of Artificial Intelligence (AI)
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/07.jpg" alt="img" />
                        <h3 className="courses-title">Leadership</h3>
                        <h4 className="topic-title">Communication Skills</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Effective Communication and Leadership Skills
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Effective Communication and Leadership Skills
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/08.jpg" alt="img" />
                        <h3 className="courses-title">Development</h3>
                        <h4 className="topic-title">Web Development</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Development</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Basic Web Development Bootcamp WordPress
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Development</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Basic Web Development Bootcamp WordPress
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="Marketing" className="tab-pane fade">
              <div className="row">
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/01.jpg" alt="img" />
                        <h3 className="courses-title">DU Delhi</h3>
                        <h4 className="topic-title">University of Delhi</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Engineering Institute with World-Class
                            Facilities
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Engineering Institute with World-Class
                            Facilities
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/02.jpg" alt="img" />
                        <h3 className="courses-title">IIT Madras</h3>
                        <h4 className="topic-title">
                          Indian Institute of Technology
                        </h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Medical Institute with Advanced Healthcare
                            Training
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Medical Institute with Advanced Healthcare
                            Training
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/03.jpg" alt="img" />
                        <h3 className="courses-title">Programming</h3>
                        <h4 className="topic-title">
                          Advance Machine Learning
                        </h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Comprehensive Arts & Science Programs with Research
                            Excellence
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Comprehensive Arts & Science Programs with Research
                            Excellence
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/04.jpg" alt="img" />
                        <h3 className="courses-title">Marketing</h3>
                        <h4 className="topic-title">Digital Marketing</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Excellence in Technology Education with Industry
                            Partnerships
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Excellence in Technology Education with Industry
                            Partnerships
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/05.jpg" alt="img" />
                        <h3 className="courses-title">Graphic Design</h3>
                        <h4 className="topic-title">
                          Graphic Design Masterclass
                        </h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Graphics</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            The Complete Graphic Design Masterclass
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Graphics</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Premier Engineering Institute with World-Class
                            Facilities
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>The Complete Graphic Design Masterclass</span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/06.jpg" alt="img" />
                        <h3 className="courses-title">Foundations AI</h3>
                        <h4 className="topic-title">Artificial Intelligence</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Tech & AI</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Foundations of Artificial Intelligence (AI)
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Tech & AI</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Foundations of Artificial Intelligence (AI)
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/07.jpg" alt="img" />
                        <h3 className="courses-title">Leadership</h3>
                        <h4 className="topic-title">Communication Skills</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Effective Communication and Leadership Skills
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Arts & Science</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Effective Communication and Leadership Skills
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="courses-card-main-items">
                    <div className="courses-card-items">
                      <div className="courses-image">
                        <img src="assets/img/courses/08.jpg" alt="img" />
                        <h3 className="courses-title">Development</h3>
                        <h4 className="topic-title">Web Development</h4>
                        <div className="arrow-items">
                          <div className="GlidingArrow">
                            <img src="assets/img/courses/a1.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay1">
                            <img src="assets/img/courses/a2.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay2">
                            <img src="assets/img/courses/a3.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay3">
                            <img src="assets/img/courses/a4.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay4">
                            <img src="assets/img/courses/a5.png" alt="img" />
                          </div>
                          <div className="GlidingArrow delay5">
                            <img src="assets/img/courses/a6.png" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Development</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Basic Web Development Bootcamp WordPress
                          </Link>
                        </h5>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-books"></i>
                            Programs
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="courses-card-items-hover">
                      <div className="courses-content">
                        <ul className="post-cat">
                          <li>
                            <Link to="/courses">Development</Link>
                          </li>
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h5>
                          <Link to="/courses-details">
                            Basic Web Development Bootcamp WordPress
                          </Link>
                        </h5>
                        <h4>$85</h4>
                        <span>
                          Education is only empowers people to pursue career
                        </span>
                        <div className="client-items">
                          <div
                            className="client-img bg-cover"
                            style={{
                              background: `url(assets/img/courses/client-1.png)`,
                            }}
                          ></div>
                          <p>Government Funded</p>
                        </div>
                        <ul className="post-class">
                          <li>
                            <i className="far fa-clock"></i>
                            7h 40min
                          </li>
                          <li>
                            <i className="far fa-user"></i>
                            12,000 Students
                          </li>
                        </ul>
                        <Link
                          to="/courses-details"
                          className="theme-btn yellow-btn"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCoursesHomeOne;
