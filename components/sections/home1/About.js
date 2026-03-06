'use client'
import React from 'react'

export default function About() {
    return (
      <>
        {/* <section className="about-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image_block_one">
                  <div className="image-box mr_30 pr_130 pb_100">
                    <div
                      className="shape"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-1.png)",
                      }}
                    ></div>
                    <figure className="image">
                      <img src="assets/images/banner/about.png" alt="" />
                    </figure>
                    <div className="text p_absolute r_0 b_0">
                      <h2>3</h2>
                      <h4>Decades Of Clarity</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                  <div className="content-box ml_30">
                    <div className="sec-title left p_relative d_block mb_25">
                      <span className="sub-title">Who We Are?</span>
                      <h2>The Place Where Clarity Was Born</h2>
                    </div>
                    <div className="text p_relative d_block">
                      <p>
                        Driven by a vision to combine advanced lens technology
                        with curated designer eyewear, the premium optical
                        destination set new benchmarks for quality and service
                        in an emerging landscape.
                      </p>
                    </div>
                    <div className="inner-box">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <h3>Our Mission</h3>
                            <ul className="list-style-one clearfix">
                              <li>High-quality work</li>
                              <li>Straightforward pricing</li>
                              <li>Rapid response times</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <h3>Our Vision</h3>
                            <ul className="list-style-one clearfix">
                              <li>Emergency power solutions</li>
                              <li>Wiring and installation</li>
                              <li>Full-service electrical layout</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="page-title p_relative pb-5 mb-5" id="about">
          <div
            className="bg-layer pb-5"
            style={{
              backgroundImage: "url(/assets//images/banner/Lens-Banner.png)",
              height: "600px",
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
          />
          <div className="auto-container">
            <div className="row">
              <div className="col-sm-6">
                <div className="content-box">
                  <h3 className="wow slideInDown">
                    <img src={"assets/images/icons/line.svg"} width={50} /> KNOW
                    US BETTER
                  </h3>
                  <h1
                    className="sub-title pt-5 wow slideInLeft"
                    data-wow-delay="0s"
                  >
                    Latest Generation <br></br> Photochromatic Lenses
                  </h1>
                  <p></p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="content-box">
                  <h4 className="wow slideInRight">
                    New-generation photochromatic lenses that adapt instantly to
                    changing light.
                  </h4>
                  <h4 className="wow slideInRight pt-3">
                    Smart eyewear designed for stylish and protective.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page-title p_relative pb-5 mb-5">
          <div className="bg-layer pb-5" />
          <div className="auto-container">
            <div className="content-box">
              <h1 className="sub-title text-white"></h1>
              <p></p>
            </div>
          </div>
        </section>
      </>
    );
}
