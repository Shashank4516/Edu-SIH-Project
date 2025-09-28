import { useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import OffCanvas from "../../common/OffCanvas";

const HeaderTwo = () => {
  const { sticky } = UseSticky();
  const [openCanvas, setOpenCanvas] = useState(false);

  return (
    <>
      <header className="header-section-2">
        <div className="container">
          <div className="header-top">
            <Link to="/" className="top-logo">
              <img src="assets/img/logo/siksha marg.png" alt="eduमार्ग Logo" />
            </Link>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="search-toggle-box d-md-block"
            >
              <div className="input-area">
                <input type="text" placeholder="Search courses........." />
                <button className="cmn-btn">
                  <i className="far fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          id="header-sticky"
          className={`header-2 ${sticky ? "sticky" : ""}`}
        >
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <Link to="/" className="header-logo">
                  <img src="assets/img/logo/Logo-2.png" alt="eduमार्ग Logo" />
                </Link>
                <div className="header-left">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <NavMenu />
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="icon-items">
                    <i className="fas fa-user"></i>
                    <h6>
                      <Link to="/sign-in">Sign Up</Link>
                    </h6>
                  </div>
                  <div className="header-button">
                    <Link to="/register" className="theme-btn yellow-btn">
                      Get Started
                    </Link>
                  </div>
                  <div className="header__hamburger d-xl-none my-auto">
                    <div
                      className="sidebar__toggle"
                      onClick={() => setOpenCanvas(!openCanvas)}
                    >
                      <i className="fas fa-bars"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffCanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
    </>
  );
};

export default HeaderTwo;
