import { Link } from "react-router-dom";

const PopularCoursesHomeOne = () => {
  return (
    <>
      <section
        id="colleges"
        className="popular-courses-section fix section-padding section-bg"
      >
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <h6 className="wow fadeInUp">Featured Colleges</h6>
              <h2 className="wow fadeInUp" data-wow-delay=".3S">
                Discover Top Government Colleges
              </h2>
            </div>
          </div>
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
                    <h4>Free</h4>
                    <span>
                      Top engineering institute with world-class research
                      facilities
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
                        <i className="far fa-books"></i>
                        Programs
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
                      Learn More
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
                        Premier Medical Institute for Healthcare Excellence
                      </Link>
                    </h5>
                    <div className="client-items">
                      <div
                        className="client-img bg-cover"
                        style={{
                          background: `url(assets/img/courses/client-2.png)`,
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
                        8,500 Students
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="courses-card-items-hover">
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
                        Premier Medical Institute for Healthcare Excellence
                      </Link>
                    </h5>
                    <h4>Free</h4>
                    <span>
                      Leading medical college with state-of-the-art facilities
                    </span>
                    <div className="client-items">
                      <div
                        className="client-img bg-cover"
                        style={{
                          background: `url(assets/img/courses/client-2.png)`,
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
                        8,500 Students
                      </li>
                    </ul>
                    <Link
                      to="/courses-details"
                      className="theme-btn yellow-btn"
                    >
                      Learn More
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
                        Prestigious University with Diverse Academic Programs
                      </Link>
                    </h5>
                    <div className="client-items">
                      <div
                        className="client-img bg-cover"
                        style={{
                          background: `url(assets/img/courses/client-3.png)`,
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
                        15,000 Students
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
                        Prestigious University with Diverse Academic Programs
                      </Link>
                    </h5>
                    <h4>Free</h4>
                    <span>
                      Renowned university offering diverse undergraduate and
                      graduate programs
                    </span>
                    <div className="client-items">
                      <div
                        className="client-img bg-cover"
                        style={{
                          background: `url(assets/img/courses/client-3.png)`,
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
                        15,000 Students
                      </li>
                    </ul>
                    <Link
                      to="/courses-details"
                      className="theme-btn yellow-btn"
                    >
                      Learn More
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
                        Top-Tier Engineering Institute with Research Excellence
                      </Link>
                    </h5>
                    <div className="client-items">
                      <div
                        className="client-img bg-cover"
                        style={{
                          background: `url(assets/img/courses/client-4.png)`,
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
                        9,200 Students
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="courses-card-items-hover">
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
                        Top-Tier Engineering Institute with Research Excellence
                      </Link>
                    </h5>
                    <h4>Free</h4>
                    <span>
                      Premier engineering college known for innovation and
                      research
                    </span>
                    <div className="client-items">
                      <div
                        className="client-img bg-cover"
                        style={{
                          background: `url(assets/img/courses/client-4.png)`,
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
                        9,200 Students
                      </li>
                    </ul>
                    <Link
                      to="/courses-details"
                      className="theme-btn yellow-btn"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="1.0s"
            >
              <div className="courses-card-main-items">
                <div className="courses-card-items">
                  <div className="courses-image">
                    <img src="assets/img/courses/05.jpg" alt="img" />
                    <h3 className="courses-title">JNU Delhi</h3>
                    <h4 className="topic-title">Jawaharlal Nehru University</h4>
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
                        <Link to="/courses">Social Sciences</Link>
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
                        Leading Research University for Social Sciences
                      </Link>
                    </h5>
                    <div className="client-items">
                      <div
                        className="client-img bg-cover"
                        style={{
                          background: `url(assets/img/courses/client-5.png)`,
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
                        8,000 Students
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="courses-card-items-hover">
                  <div className="courses-content">
                    <ul className="post-cat">
                      <li>
                        <Link to="/courses">Social Sciences</Link>
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
                        Leading Research University for Social Sciences
                      </Link>
                    </h5>
                    <h4>Free</h4>
                    <span>
                      Premier university known for social sciences and research
                      excellence
                    </span>
                    <div className="client-items">
                      <div
                        className="client-img bg-cover"
                        style={{
                          background: `url(assets/img/courses/client-5.png)`,
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
                        8,000 Students
                      </li>
                    </ul>
                    <Link
                      to="/courses-details"
                      className="theme-btn yellow-btn"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="1.2s"
            >
              <div className="courses-card-main-items">
                <div className="courses-card-items">
                  <div className="courses-image">
                    <img src="assets/img/courses/06.jpg" alt="img" />
                    <h3 className="courses-title">IISc Bangalore</h3>
                    <h4 className="topic-title">Indian Institute of Science</h4>
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
                        <Link to="/courses">Science & Research</Link>
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
                        World-Class Research Institute for Pure Sciences
                      </Link>
                    </h5>
                    <div className="client-items">
                      <div
                        className="client-img bg-cover"
                        style={{
                          background: `url(assets/img/courses/client-6.png)`,
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
                        3,500 Students
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="courses-card-items-hover">
                  <div className="courses-content">
                    <ul className="post-cat">
                      <li>
                        <Link to="/courses">Science & Research</Link>
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
                        World-Class Research Institute for Pure Sciences
                      </Link>
                    </h5>
                    <h4>Free</h4>
                    <span>
                      India's premier research institute for science and
                      technology
                    </span>
                    <div className="client-items">
                      <div
                        className="client-img bg-cover"
                        style={{
                          background: `url(assets/img/courses/client-6.png)`,
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
                        3,500 Students
                      </li>
                    </ul>
                    <Link
                      to="/courses-details"
                      className="theme-btn yellow-btn"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="1.4s"
            >
              <div className="courses-card-main-items">
                <div className="courses-card-items">
                  <div className="courses-image">
                    <img src="assets/img/courses/07.jpg" alt="img" />
                    <h3 className="courses-title">NLSIU Bangalore</h3>
                    <h4 className="topic-title">
                      National Law School of India University
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
                        <Link to="/courses">Law</Link>
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
                        Premier Law University with Excellence in Legal
                        Education
                      </Link>
                    </h5>
                    <div className="client-items">
                      <div
                        className="client-img bg-cover"
                        style={{
                          background: `url(assets/img/courses/client-7.png)`,
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
                        1,200 Students
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="courses-card-items-hover">
                  <div className="courses-content">
                    <ul className="post-cat">
                      <li>
                        <Link to="/courses">Law</Link>
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
                        Premier Law University with Excellence in Legal
                        Education
                      </Link>
                    </h5>
                    <h4>Free</h4>
                    <span>
                      India's top law school with outstanding legal education
                    </span>
                    <div className="client-items">
                      <div
                        className="client-img bg-cover"
                        style={{
                          background: `url(assets/img/courses/client-7.png)`,
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
                        1,200 Students
                      </li>
                    </ul>
                    <Link
                      to="/courses-details"
                      className="theme-btn yellow-btn"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="1.6s"
            >
              <div className="courses-card-main-items">
                <div className="courses-card-items">
                  <div className="courses-image">
                    <img src="assets/img/courses/08.jpg" alt="img" />
                    <h3 className="courses-title">ISB Hyderabad</h3>
                    <h4 className="topic-title">Indian School of Business</h4>
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
                        <Link to="/courses">Business</Link>
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
                        World-Renowned Business School for Management Excellence
                      </Link>
                    </h5>
                    <div className="client-items">
                      <div
                        className="client-img bg-cover"
                        style={{
                          background: `url(assets/img/courses/client-8.png)`,
                        }}
                      ></div>
                      <p>Private Institution</p>
                    </div>
                    <ul className="post-class">
                      <li>
                        <i className="far fa-books"></i>
                        Programs
                      </li>
                      <li>
                        <i className="far fa-user"></i>
                        2,500 Students
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="courses-card-items-hover">
                  <div className="courses-content">
                    <ul className="post-cat">
                      <li>
                        <Link to="/courses">Business</Link>
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
                        World-Renowned Business School for Management Excellence
                      </Link>
                    </h5>
                    <h4>₹25L</h4>
                    <span>
                      Top-ranked business school with global recognition
                    </span>
                    <div className="client-items">
                      <div
                        className="client-img bg-cover"
                        style={{
                          background: `url(assets/img/courses/client-8.png)`,
                        }}
                      ></div>
                      <p>Private Institution</p>
                    </div>
                    <ul className="post-class">
                      <li>
                        <i className="far fa-books"></i>
                        Programs
                      </li>
                      <li>
                        <i className="far fa-user"></i>
                        2,500 Students
                      </li>
                    </ul>
                    <Link
                      to="/courses-details"
                      className="theme-btn yellow-btn"
                    >
                      Learn More
                    </Link>
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
