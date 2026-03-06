'use client'
import React from 'react'

export default function Chooseus() {
    return (
      <>
        <section className="chooseus-section p_relative">
          <div
            className="bg-layer"
            style={{
              backgroundImage: "url(assets/images/background/chooseus-bg.jpg)",
            }}
          ></div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-6 content-column">
                <div className="content_block_three">
                  <div className="content-box ml_30">
                    <div className="sec-title left mb_25">
                      <span className="sub-title">Why Choose Us</span>
                      <h2 className="wow slideInLeft">
                        Great Reasons For People Choose Vanisri optical
                      </h2>
                    </div>
                    <div className="text">
                      <p className="wow slideInRight">
                        Precision is the foundation of everything we do. Our
                        advanced vision assessment is to detect subtle
                        variations, ensuring prescriptions that are engineered
                        for clarity, comfort, and long-term visual performance.
                      </p>
                    </div>
                    <div className="inner-box">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item p_relative d_block">
                            <h4 className="wow slideInLeft ">Quality Staff</h4>
                            <p className="wow slideInLeft">
                              Our team comprises experienced optical
                              professionals trained in precision vision care
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item p_relative d_block">
                            <h4 className="wow slideInRight  ">
                              {" "}
                              Quality Assistance
                            </h4>
                            <p className="wow slideInRight">
                              Every step of consultation to after-sales, we
                              provide consistent and dependable support.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item p_relative d_block">
                            <h4 className="wow slideInLeft">
                              Affordable Price
                            </h4>
                            <p className="wow slideInLeft">
                              Superior and precise vision care should be
                              accessible without compromising on quality.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item p_relative d_block">
                            <h4 className="wow slideInRight">
                              Optimized Solutions
                            </h4>
                            <p className="wow slideInRight">
                              Our approach combines advanced diagnostics with
                              tailored lens technology.
                            </p>
                          </div>
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
}
