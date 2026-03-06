'use client'
import React from 'react'
import Link from "next/link"

export default function Footer1() {
    return (
      <>
        <footer className="main-footer p_relative">
          <div className="widget-section ">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
                  <div className="about-widget footer-widget mr_40">
                    <div className="widget-title">
                      <h3>About</h3>
                    </div>
                    <div className="widget-content">
                      <p>
                        Established in 2000, we are Bangalore's premium eyewear
                        destinations, offering professional and personalized
                        vision care. We curate an immersive optical experience
                        that begins with meticulous eye diagnostics and flows
                        seamlessly.
                      </p>
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
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="links-widget footer-widget ml_100">
                    <div className="widget-title">
                      <h3>Support</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="links-list clearfix">
                        <li>
                          <Link href="/">Appointments</Link>
                        </li>
                        <li>
                          <Link href="/">FAQs</Link>
                        </li>
                        <li>
                          <Link href="/">Orders</Link>
                        </li>
                        <li>
                          <Link href="/">Shipping</Link>
                        </li>
                        <li>
                          <Link href="/">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="/">Terms of Service</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="contact-widget footer-widget ml_50">
                    <div className="widget-title">
                      <h3>Contacts</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="info clearfix">
                        <li>
                          Address: 1, 11th Cross, Anjaneya Temple, Kilari Rd,
                          Balepete, Chickpet, Bengaluru, Karnataka 560053
                        </li>
                        <li>
                          <Link href="tel:9035011992">
                            Call Us - +919035011992
                          </Link>
                        </li>
                        <li>
                          <Link href="mailto:vanisriopticalsh@gmail.com">
                            vanisriopticalsh@gmail.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom centred">
            <div className="auto-container">
              <div className="copyright">
                <p>
                  <Link href="/">Vanisri</Link> &copy;{" "}
                  {new Date().getFullYear()} All Right Reserved. Designed by{" "}
                  <Link href="https://www.digitaltripolystudio.com/">
                    DigitalTripolyStudio
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}
