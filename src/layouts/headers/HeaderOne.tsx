import NavMenu from "./NavMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseSticky from "../../hooks/UseSticky";
import OffCanvas from "../../common/OffCanvas";
import MarqueeOne from "../../common/MarqueeOne";
import { useAuth } from "../../contexts/AuthContext";

const HeaderOne = () => {
  const { sticky } = UseSticky();
  const { currentUser, logout } = useAuth();

  const [openCanvas, setOpenCanvas] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <>
      <MarqueeOne />
      <header
        id="header-sticky"
        className={`header-1 ${sticky ? "sticky" : ""}`}
      >
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <Link to="/" className="header-logo">
                    <img src="assets/img/logo/Logo-2.png" alt="eduमार्ग Logo" />
                  </Link>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                </div>
                <div className="header-button">
                  {currentUser ? (
                    <>
                      <span className="user-welcome me-3">
                        Welcome,{" "}
                        {currentUser.displayName ||
                          currentUser.email?.split("@")[0]}
                        !
                      </span>
                      <button
                        onClick={handleLogout}
                        className="theme-btn yellow-btn"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/sign-in" className="theme-btn style-2">
                        <i className="far fa-user"></i> Sign Up
                      </Link>
                      <Link to="/register" className="theme-btn yellow-btn">
                        Get Started
                      </Link>
                    </>
                  )}
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <div
                      className="header-bar"
                      onClick={() => setOpenCanvas(!openCanvas)}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
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

export default HeaderOne;
