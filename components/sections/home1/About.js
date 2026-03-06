'use client'
import React from 'react'

export default function About() {
    return (
      <>
        <section className="page-title p_relative pb-5 mb-5" id="about">
          <div
            className="bg-layer pb-5"
            style={{
              backgroundImage: "url(/assets/images/banner/Lens-Banner.png)",
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
                    <img src={"assets/images/icons/Line.svg"} width={50} /> KNOW
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
              <p className='p-5'></p>
            </div>
          </div>
        </section>
      </>
    );
}
