'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link";

export default function Spectacles() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <section className="page-title p_relative " id="spectacles">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(assets/images/Spectacles/spectacles.png)",
          }}
        ></div>
        <div className="auto-container">
          <div className="content-box">
            <h1 className="sub-title text-white"></h1>
          </div>
        </div>
      </section>
      <section className="portfolio-page-section p_relative pt-5 pb-3">
        <div className="auto-container">
          <div className="sec-title mb_60 text-center">
            <span className="sub-title ">Spectacles</span>
            <h2 className="wow slideInDown" data-wow-delay="00ms">
              Spectacles
            </h2>
          </div>
          <div className="sortable-masonry">
            <div
              className="shape-layer"
              style={{
                backgroundImage: "url(assets/images/shape/shape-17.png)",
              }}
            ></div>
            <div className="items-container row clearfix">
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/versace.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="assets/images/project/project-10.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/versace-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second ">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/rayban.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="assets/images/project/project-11.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/rayban-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/scott.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/scott-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/prada.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/prada-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/sprint.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/sprint-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second ">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/idee.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="assets/images/project/project-11.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/idee-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second ">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/fastrack.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/fastrack-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="assets/images/Spectacles/unitedcolor.png"
                        alt=""
                      />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/unitedcolor-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/tomford.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/tomford-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second ">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/police.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="assets/images/project/project-11.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/police-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second ">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/guess.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/guess-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/Mk.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/Mk-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/vogue.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/vogue-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second ">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/gucci.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="assets/images/project/project-11.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/gucci-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second ">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/FC.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/FC-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/mavi.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/mavi-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/emporium.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/emporium-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second ">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="assets/images/Spectacles/silhovette.png"
                        alt=""
                      />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="assets/images/project/project-11.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/silhovette-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second ">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="assets/images/Spectacles/davidjones.png"
                        alt=""
                      />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/davidjones-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="assets/images/Spectacles/intense focus.png"
                        alt=""
                      />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/intense focus-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="assets/images/Spectacles/Calvin Klein.png"
                        alt=""
                      />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/Calvin Klein-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/oakley.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/oakley-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second ">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/fila.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="assets/images/project/project-11.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/fila-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second ">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="assets/images/Spectacles/pepejeans.png"
                        alt=""
                      />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/pepejeans-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="assets/images/Spectacles/roenstock.png"
                        alt=""
                      />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/roenstock-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/stepper.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/stepper-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second ">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="assets/images/Spectacles/Tommy Hilfigher.png"
                        alt=""
                      />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="assets/images/project/project-11.jpg"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/Tommy Hilfigher-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second ">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="assets/images/Spectacles/mont blanc.png"
                        alt=""
                      />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/mont blanc-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/pairs.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/pairs-glass.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6 feature-block  masonry-item small-column all in-down one-second product paeditaric equipment">
                <div className="project-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/Spectacles/careera.png" alt="" />
                    </figure>
                    <div className="view-btn pt-5">
                      <Link
                        href="/"
                        className="lightbox-image"
                        data-fancybox="gallery"
                      >
                        <img
                          src="assets/images/Spectacles/careera-glass.png"
                          alt=""
                        />
                      </Link>
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
