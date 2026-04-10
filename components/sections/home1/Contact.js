'use client'
import React from 'react'
import VideoPopup from "@/components/elements/VideoPopup"

export default function Contact() {
    return (
      <>
        <section className="contact-section p_relative mb-5" id="contact">
          <div className="bg-layer"></div>
          <div className="pattern-layer">
            <div
              className="pattern-1"
              style={{
                backgroundImage: "url(assets/images/shape/shape-7.png)",
              }}
            ></div>
            <div
              className="pattern-2"
              style={{
                backgroundImage: "url(assets/images/shape/shape-8.png)",
              }}
            ></div>
          </div>
          <div className="auto-container">
            <div className="sec-title centred light mb_45">
              <span className="sub-title">Eye Care</span>
              <h2 className="wow slideInLeft" data-wow-delay="00ms">
                Need a Complete Eye Check-up
              </h2>
            </div>
            <div className="support-box p_relative centred">
              <div className="icon-box">
                <img src="assets/images/icons/icon-2.png" alt="" />
              </div>
              <h3 className="wow slideInRight" data-wow-delay="00ms">
                Call: <a href="tel:123045615523">+91 9035011992</a>
              </h3>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 form-column">
                <div className="form-inner">
                  <h3 className="wow slideInUp" data-wow-delay="00ms">
                    Contact us for<span>more information</span>
                  </h3>
                  <form
                    action="contact.html"
                    method="post"
                    className="default-form"
                  >
                    <div className="form-group mb-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required=""
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        type="text"
                        name="number"
                        placeholder="Number"
                        required=""
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div className="form-group mb-4">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div className="form-group message-btn">
                      <button type="submit" className="theme-btn btn-one">
                        Contact Us
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 video-column">
                <div
                  className="video-inner"
                  style={{
                    backgroundImage: "url(assets/images/banner/contact.jpg)",
                  }}
                >
                  <div className="video-btn">
                    <img src={"assets/images/banner/contact.png"} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
