'use client'
import React from 'react'
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"


export default function Header1({ scroll, handleMobileMenu, handlePopup }) {
    return (
      <>
        {/* main header */}
        <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
          <div className="header-top">
            <div className="auto-container">
              <div className="top-inner">
                <div className="left-column">
                  <ul className="info clearfix">
                    <li>
                      <i className="icon-1"></i>Email:{" "}
                      <Link href="mailto:vanisriopticals@gmail.com">
                        vanisriopticals@gmail.com
                      </Link>
                    </li>
                    <li>
                      <i className="icon-2"></i> Balepete, Chickpet
                    </li>
                    <li>
                      <i className="icon-3"></i>Call:{" "}
                      <Link href="tel:+919035011992">+919035011992</Link>
                    </li>
                  </ul>
                </div>
                <div className="right-column">
                  <div className="schedule">
                    <i className="icon-4"></i>Sun-Thu 09:30AM-07:00PM
                  </div>
                  <ul className="social-links clearfix">
                    <li>
                      <Link href="https://www.facebook.com/vanisriopticals/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com/@vanisrioptical5663/">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/vanisriopticals/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="header-lower">
            <div className="auto-container">
              <div className="outer-box">
                <div className="logo-box">
                  <figure className="logo">
                    <Link href="/">
                      <img src="assets/images/logo.png" alt="" width={200} />
                    </Link>
                  </figure>
                </div>
                <div className="menu-area clearfix">
                  <div
                    className="mobile-nav-toggler"
                    onClick={handleMobileMenu}
                  >
                    <i className="icon-bar"></i>
                    <i className="icon-bar"></i>
                    <i className="icon-bar"></i>
                  </div>
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <Menu />
                    </div>
                  </nav>
                </div>
                <div className="nav-right">
                  <div className="btn-box search-toggler" onClick={handlePopup}>
                    <Link href="/" className="theme-btn btn-one">
                      Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}
          >
            <div className="auto-container">
              <div className="outer-box">
                <div className="logo-box">
                  <figure className="logo">
                    <Link href="/">
                      <img src="assets/images/logo.png" alt="" width={200} />
                    </Link>
                  </figure>
                </div>
                <div className="menu-area clearfix">
                  <nav className="main-menu clearfix">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <Menu />
                    </div>
                  </nav>
                </div>
                <div className="nav-right">
                  <div className="btn-box search-toggler" onClick={handlePopup}>
                    <Link href="/" className="theme-btn btn-one">
                      Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <MobileMenu handleMobileMenu={handleMobileMenu} />
        </header>
      </>
    );
}
