'use client'
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,

    // Pagination
    pagination: {
        el: '.testimonial-pagination',
        clickable: true,
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
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 2,
        },
    }
}

export default function Testimonial() {
    return (
      <>
        <section className="testimonial-section p_relative centred">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-6.png)" }}
          ></div>
          <div className="d-lg-flex justify-content-between d-block">
            <img className='d-none d-lg-block'
              src={"assets/images/banner/glass.png"}
              width={300}
              objectFit="contain"
              alt=""
            />
            <div className="sec-title mb_60">
              <span className="sub-title">Testimonials</span>
              <h2 className="wow slideInDown" data-wow-delay="00ms">
                What Our Client Say <br />
                About Vanisri optical
              </h2>
            </div>
            <img
              src={"assets/images/banner/men.png"}
              width={300}
              objectFit="contain"
              alt=""
            />
          </div>
          <div className="auto-container p-5">
            <Swiper
              {...swiperOptions}
              className="swiper-container two-item-carousel"
            >
              <SwiperSlide>
                <div className="testimonial-block-one">
                  <div className="inner-box p_relative d_block">
                    <p>
                      I was looking for eyewear that reflected my personal
                      style, not just my prescription.”  The collection felt
                      carefully curated, and the consultation was unhurried and
                      thoughtful. I left with frames that feel like an extension
                      of my personality.”
                    </p>
                    <h4>Ananya R.</h4>
                    <span className="designation">Creative Director</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-block-one">
                  <div className="inner-box p_relative d_block">
                    <p>
                      “The space itself feels refined and welcoming.”  There’s a
                      sense of calm expertise the moment you walk in. It’s rare
                      to find such elegance combined with technical precision.”
                    </p>
                    <h4> Meera S</h4>
                    <span className="designation">Architect</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-block-one">
                  <div className="inner-box p_relative d_block">
                    <p>
                      “The precision of their eye testing technology truly
                      impressed me.” The consultation felt clinical yet
                      personal. It’s rare to find such technical accuracy
                      combined with warmth.”
                    </p>
                    <h4>Ramesh S</h4>
                    <span className="designation">Entrepreneur</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-block-one">
                  <div className="inner-box p_relative d_block">
                    <p>
                      “Finding frames that suit both my profession and
                      personality was always difficult.” The curated collection
                      and personalized guidance made the selection effortless. I
                      walked out with eyewear that feels as refined as it
                      looks.”
                    </p>
                    <h4>Priya M</h4>
                    <span className="designation">Architect</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="testimonial-pagination dots-style-one"></div>
          </div>
        </section>
      </>
    );
}
