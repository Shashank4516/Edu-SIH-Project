const FeatureHomeOne = () => {
  return (
    <>
      <section className="feature-section">
        <div className="row gx-0 row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 justify-content-center">
          <div className="col wow fadeInUp">
            <div className="feature-box-items">
              <div className="icon">
                <i className="flaticon-teacher"></i>
              </div>
              <div className="content">
                <h3>AI-Powered Quiz</h3>
                <p>
                  Take our intelligent quiz to discover your perfect college and
                  degree match
                </p>
              </div>
            </div>
          </div>
          <div className="col wow fadeInUp" data-wow-delay=".6s">
            <div className="feature-box-items">
              <div className="icon">
                <i className="flaticon-membership"></i>
              </div>
              <div className="content">
                <h3>Degree Recommendations</h3>
                <p>
                  Get personalized degree recommendations based on your
                  interests and goals
                </p>
              </div>
            </div>
          </div>
          <div className="col wow fadeInUp" data-wow-delay=".8s">
            <div className="feature-box-items">
              <div className="icon">
                <i className="flaticon-group"></i>
              </div>
              <div className="content">
                <h3>Career Guidance</h3>
                <p>
                  Receive expert career guidance and pathway recommendations for
                  your future
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureHomeOne;
