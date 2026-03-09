'use client'
import React from 'react'
import Link from "next/link"

export default function Shopdetails() {
  return (
    <>
      <section className="feature-section p_relative py-5">
        <div className="auto-container">
          <div className="inner-container p_relative d_block">
            <div
              className="shape-layer"
              style={{
                backgroundImage: "url(assets/images/shape/shape-17.png)",
              }}
            ></div>
            <div
              className="bg-layer pb-5 position-relative"
              style={{
                backgroundImage: "url(assets/images/banner/about.png)",
                height: "580px",
                backgroundRepeat: "no-repeat",
                width: "100%",
                backgroundSize: "auto",
                borderRadius:"20px",
              }}
            />
            <div className="auto-container position-absolute" style={{top:"0px",}}>
              <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6">
                  <div className="content-box px-3">
                    <h5 className="wow slideInDown text-white pt-5 mt-5">
                      #ThreeDecadesOfClarity
                    </h5>
                    <h5 className="wow slideInLeft pt-5 text-white">
                      The Place Where Clarity Was Born
                    </h5>
                    <h5 className="wow slideInRight pt-5 text-white">
                      Driven by a vision to combine advanced lens technology
                      with curated designer eyewear, the premium optical
                      destination set new benchmarks for quality and service in
                      an emerging landscape.
                    </h5>
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
