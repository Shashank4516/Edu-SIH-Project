import Count from "../../../common/Count";

const ChooseHomeOne = () => {
  return (
    <>
      <section className="choose-us-section fix section-padding">
        <div className="container">
          <div className="main-choose-us-wrapper">
            <div className="line-shape">
              <img src="assets/img/line-shape.png" alt="" />
            </div>
            <div className="choose-us-top">
              <div className="section-title mb-0">
                <h6 className="wow fadeInUp">Why Choose eduमार्ग</h6>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Find Your Perfect <br /> College Match with <br /> AI-Powered
                  Precision
                </h2>
              </div>
              <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                <div className="icon">
                  <i className="flaticon-satisfaction"></i>
                </div>
                <div className="content">
                  <h2>
                    <span className="odometer" data-count="99">
                      {" "}
                      <Count number={99} text="%" />{" "}
                    </span>
                  </h2>
                  <p>
                    Success Rate - Students find their ideal college match
                    through our platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="choose-us-bottom">
              <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                <div className="icon">
                  <i className="flaticon-graduation"></i>
                </div>
                <div className="content">
                  <p>Students Helped</p>
                  <h2>
                    <span className="odometer" data-count="10">
                      <Count number={10} text=".5k" />
                    </span>
                  </h2>
                  <p>
                    Students successfully matched with their dream colleges and
                    programs.
                  </p>
                </div>
              </div>
              <div
                className="icon-items style-2 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon">
                  <i className="flaticon-instructor"></i>
                </div>
                <div className="content">
                  <p>Colleges & Universities</p>
                  <h2>
                    <span className="odometer" data-count="500">
                      <Count number={500} text="+" />
                    </span>
                  </h2>
                  <p>
                    Top government colleges and universities in our
                    comprehensive database.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseHomeOne;
