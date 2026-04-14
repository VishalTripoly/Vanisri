'use client'
import React from 'react'
import CounterUp from "@/components/elements/CounterUp"

export default function Funfact() {
    return (
      <>
        <section className="funfact-section p_relative bg-color-2">
          <div className="auto-container">
            <div className="inner-container">
              <div
                className="counter-block-one wow slideInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box p_relative d_block fs_60">
                    <i className="icon-25"></i>
                  </div>
                  <div className="count-outer count-box">
                    <span className="count-text" data-speed="1500">
                      <CounterUp end={4} />
                    </span>
                  </div>
                  <p>Expert Optometrists</p>
                </div>
              </div>
              <div
                className="counter-block-one wow slideInUp animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box p_relative d_block fs_60">
                    <i className="icon-26"></i>
                  </div>
                  <div className="count-outer count-box">
                    <span className="count-text" data-speed="1500">
                      <CounterUp end={5} />
                    </span>
                  </div>
                  <p>Diffrent Services</p>
                </div>
              </div>
              <div
                className="counter-block-one wow slideInUp animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box p_relative d_block fs_60">
                    <i className="icon-27"></i>
                  </div>
                  <div className="count-outer count-box">
                    <span className="count-text" data-speed="1500">
                      <CounterUp end={30000} />
                    </span>
                  </div>
                  <p>Happy Patients</p>
                </div>
              </div>
              <div
                className="counter-block-one wow slideInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="icon-box p_relative d_block fs_60">
                    <i className="icon-28"></i>
                  </div>
                  <div className="count-outer count-box">
                    <span className="count-text" data-speed="1500">
                      <CounterUp end={6} />
                    </span>
                  </div>
                  <p>Awards Win</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
