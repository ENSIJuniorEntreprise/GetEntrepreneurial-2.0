import React, { useState, useEffect } from "react";
import logo from "./../../Assets/logo.png";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("/");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("current", currentPage);
  }, [currentPage]);

  useEffect(() => {
    const currentPath = location.pathname;
    setCurrentPage(getPageNameFromPath(currentPath));
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 780) {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getPageNameFromPath = (path) => {
    const pageName = path.substring(1);
    return pageName || "/";
  };

  return (
    <nav className="Nav-container">
      <img
        className="logo"
        src={logo}
        alt=""
        onClick={() => {
          navigate("/");
          setCurrentPage("home");
          scrollToTop();
        }}
      />
      <div
        className={isMobile ? "Nav-elements-mobile" : "Nav-elements"}
        onClick={() => setIsMobile(false)}
      >
        <div
          className={`nav ${currentPage === "/" ? "current-page" : ""}`}
          onClick={() => {
            navigate("/");
            setCurrentPage("/");
            scrollToTop();
          }}
        >
          Accueil{" "}
        </div>

        <div
          className="nav nav-about"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div
            className={`nav ${currentPage === "program" ? "current-page" : ""}`}
            onClick={() => {
              navigate("/program");
              setCurrentPage("program");
              scrollToTop();
            }}
          >
            À Propos{" "}
          </div>
          <span className="arrow-down">▼</span>
          {isDropdownOpen && (
            <div className="dropdown">
              <div
                className="dropdown-item"
                onClick={() => {
                  navigate("/program?section=Theme");
                  scrollToTop();
                }}
              >
                Thème
              </div>
              <div
                className="dropdown-item"
                onClick={() => {
                  navigate("/program?section=Panels");
                  scrollToTop();
                }}
              >
                Panels
              </div>
              <div
                className="dropdown-item"
                onClick={() => {
                  navigate("/program?section=Workshops");
                  scrollToTop();
                }}
              >
                Workshops
              </div>
            </div>
          )}
        </div>

        <div
          className={`nav ${currentPage === "glance" ? "current-page" : ""}`}
          onClick={() => {
            navigate("/glance");
            setCurrentPage("glance");
            scrollToTop();
          }}
        >
          Légacy{" "}
        </div>

        <div
          className={`nav ${currentPage === "Register" ? "current-page" : ""}`}
          onClick={() => {
            navigate("/Register");
            setCurrentPage("Register");
            scrollToTop();
          }}
        >
          Inscription{" "}
        </div>
      </div>

      <button className="Nav-btn" onClick={() => setIsMobile(!isMobile)}>
        <FaBars
          style={{
            fontSize: "1.5rem", // Adjust the size as needed
          }}
        />
      </button>
    </nav>
  );
}

export default NavBar;
