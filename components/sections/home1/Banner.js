'use client'
import React from 'react'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1199: {
            slidesPerView: 1,
        },
        1350: {
            slidesPerView: 1,
        },
    }
}

export default function Banner() {
    return (
      <>
        <section className="banner-section p_relative" id="home">
          <Swiper
            {...swiperOptions}
            className="swiper-container banner-carousel"
          >
            <SwiperSlide>
              <div className="slide-item p_relative">
                <div className="pattern-layer">
                  <div
                    className="pattern-1"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-2.png)",
                    }}
                  ></div>
                  <div
                    className="pattern-2"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-3.png)",
                    }}
                  ></div>
                  <div
                    className="eye-icon rotate-me"
                    style={{
                      backgroundImage: "url(assets/images/icons/icon-1.png)",
                    }}
                  ></div>
                </div>
                <div className="auto-container">
                  <div className="banner-content p_relative d_block">
                    <div className="content-box p_relative d_block z_5">
                      <h3>Eye Sight and Holistic Vision Care</h3>
                      <h2 className="p_relative d_block fs_70 lh_80 fw_bold">
                        Sharpen your vision with our experts
                      </h2>
                      <p className="p_relative d_block fs_18">
                        Discover personalized experience, complete optical care
                        for all ages in a warm, welcoming environment.
                        Brightest, clearest vision begins at Vanisri Opticals.
                      </p>
                      <div className="btn-box">
                        <Link href="#contact" className="theme-btn btn-one">
                          Contact Now
                        </Link>
                      </div>
                      <ul className="icon-list clearfix">
                        <li>
                          <i className="icon-8"></i>
                        </li>
                        <li>
                          <i className="icon-9"></i>
                        </li>
                        <li>
                          <i className="icon-10"></i>
                        </li>
                        <li>
                          <i className="icon-11"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="image-box">
                      <div className="shape">
                        <div
                          className="shape-1"
                          style={{
                            backgroundImage:
                              "url(assets/images/shape/shape-1.png)",
                          }}
                        ></div>
                        <div className="shape-2"></div>
                      </div>
                      <figure className="image">
                        <img src="assets/images/banner/2.png" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item p_relative">
                <div className="pattern-layer">
                  <div
                    className="pattern-1"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-2.png)",
                    }}
                  ></div>
                  <div
                    className="pattern-2"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-3.png)",
                    }}
                  ></div>
                  <div
                    className="eye-icon rotate-me"
                    style={{
                      backgroundImage: "url(assets/images/icons/icon-1.png)",
                    }}
                  ></div>
                </div>
                <div className="auto-container">
                  <div className="banner-content p_relative d_block">
                    <div className="content-box p_relative d_block z_5">
                      <h3>Advanced Eye Care and Complete Vision Support</h3>
                      <h2 className="p_relative d_block fs_70 lh_80 fw_bold">
                        Experience Clearer Sight with Vision Specialists
                      </h2>
                      <p className="p_relative d_block fs_18">
                        Experience personalized attention and comprehensive
                        optical eye care solutions in a space designed for
                        comfort and trust. Your journey to sharper vision begins
                        at Vanisri Opticals.
                      </p>
                      <div className="btn-box">
                        <Link href="#contact" className="theme-btn btn-one">
                          Contact Now
                        </Link>
                      </div>
                      <ul className="icon-list clearfix">
                        <li>
                          <i className="icon-8"></i>
                        </li>
                        <li>
                          <i className="icon-9"></i>
                        </li>
                        <li>
                          <i className="icon-10"></i>
                        </li>
                        <li>
                          <i className="icon-11"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="image-box">
                      <div className="shape">
                        <div
                          className="shape-1"
                          style={{
                            backgroundImage:
                              "url(assets/images/shape/shape-1.png)",
                          }}
                        ></div>
                        {/* <div className="shape-2"></div> */}
                      </div>
                      <figure className="image">
                        <img src="assets/images/banner/3.png" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-item p_relative">
                <div className="pattern-layer">
                  <div
                    className="pattern-1"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-2.png)",
                    }}
                  ></div>
                  <div
                    className="pattern-2"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-3.png)",
                    }}
                  ></div>
                  <div
                    className="eye-icon rotate-me"
                    style={{
                      backgroundImage: "url(assets/images/icons/icon-1.png)",
                    }}
                  ></div>
                </div>
                <div className="auto-container">
                  <div className="banner-content p_relative d_block">
                    <div className="content-box p_relative d_block z_5">
                      <h3>
                        Precision Vision Better with Optical Professionals
                      </h3>
                      <h2 className="p_relative d_block fs_70 lh_80 fw_bold">
                        Indulge Your Vision with Distinguished Eye Care Experts
                      </h2>
                      <p className="p_relative d_block fs_18">
                        Experience tailored eye care and vision solutions
                        delivered with precision, warmth in an environment built
                        on comfort with personal care. Discover sharper,
                        brighter sight at Vanisri Opticals.
                      </p>
                      <div className="btn-box">
                        <Link href="#contact" className="theme-btn btn-one">
                          Contact Now
                        </Link>
                      </div>
                      <ul className="icon-list clearfix">
                        <li>
                          <i className="icon-8"></i>
                        </li>
                        <li>
                          <i className="icon-9"></i>
                        </li>
                        <li>
                          <i className="icon-10"></i>
                        </li>
                        <li>
                          <i className="icon-11"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="image-box">
                      <div className="shape">
                        <div
                          className="shape-1"
                          style={{
                            backgroundImage:
                              "url(assets/images/shape/shape-1.png)",
                          }}
                        ></div>
                        {/* <div className="shape-2"></div> */}
                      </div>
                      <figure className="image">
                        <img src="assets/images/banner/4.png" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div className="swiper-nav">
              <button className="swiper-button-prev">
                <span className="fal fa-angle-left"></span>
              </button>
              <button className="swiper-button-next">
                <span className="fal fa-angle-right"></span>
              </button>
            </div>
          </Swiper>
        </section>
      </>
    );
}
