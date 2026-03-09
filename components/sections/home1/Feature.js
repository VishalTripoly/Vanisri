'use client'
import React from 'react'
import Link from "next/link"

export default function Feature() {
    return (
      <>
        <section className="feature-section p_relative pb-5 pt-3">
          <div className="auto-container">
            <div className="inner-container p_relative d_block">
              <div
                className="shape-layer"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-17.png)",
                }}
              ></div>
              <div className="title-box p_relative d_block centred">
                <h2 className="wow slideInLeft" data-wow-delay="00ms">
                  Benefits with Vanisri Opticals
                </h2>
                <p className="wow slideInRight" data-wow-delay="00ms">
                  Your eyes are unique, so we make personalized optical eyewear
                  when you’re settling for a one-size fit.
                </p>
              </div>
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block d-flex">
                  <div
                    className="feature-block-one wow fadeInUp d-flex"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box p_relative d_block">
                      <div className="icon-box p_relative d_block">
                        <i className="icon-12"></i>
                      </div>
                      <h3>
                        <Link href="/">Qualified Optometrists</Link>
                      </h3>
                      <p>
                        We diagnose your eye health professionally through eye
                        examination that actually fit exact vision problems and
                        prescribe accurate solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block d-flex">
                  <div
                    className="feature-block-one wow fadeInUp d-flex"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box p_relative d_block">
                      <div className="icon-box p_relative d_block">
                        <i className="icon-13"></i>
                      </div>
                      <h3>
                        <Link href="/">Modern Equipment</Link>
                      </h3>
                      <p>
                        Advanced modern equipment gives us deeper insights into
                        your eye health, helping us solve complex vision
                        problems that basic testing would miss entirely.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block d-flex">
                  <div
                    className="feature-block-one wow fadeInUp d-flex"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box p_relative d_block">
                      <div className="icon-box p_relative d_block">
                        <i className="icon-14"></i>
                      </div>
                      <h3>
                        <Link href="/">Eye Examination</Link>
                      </h3>
                      <p>
                        Our comprehensive eye examinations uncover the real
                        cause of your vision problems
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block d-flex">
                  <div
                    className="feature-block-one wow fadeInUp d-flex"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box p_relative d_block">
                      <div className="icon-box p_relative d_block">
                        <i className="icon-15"></i>
                      </div>
                      <h3>
                        <Link href="/">Individual Approach</Link>
                      </h3>
                      <p>
                        We listen to your specific concerns and craft solutions
                        for you, not push what's easiest to sell
                      </p>
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
