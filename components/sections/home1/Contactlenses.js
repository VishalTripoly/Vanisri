"use client";

import Link from "next/link";


export default function Contactlenses() {
 
  return (
    <>
      {/* Page Title */}
      <section className="page-title p_relative" id="contactlenses">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(/assets//images/lens/Contact-Lens.png)",
          }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h1 className="sub-title text-white"></h1>
            <p></p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-page-section p_relative pt-5 pb-3">
        <div className="auto-container">
          <div className="sec-title mb_60 text-center">
            <span className="sub-title ">Contact Lenses</span>
            <h2 className="wow slideInDown" data-wow-delay="00ms">
              Contact Lenses
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
              {/* Item 1 */}
              <div className="col-lg-2 col-md-6 col-sm-12 feature-block d-flex masonry-item small-column all in-down one-second pb-4 masonry-item small-column all pb-4 pb-4">
                <div className="project-block-one">
                  <figure className="image-box">
                    <img src="/assets/images/lens/01.png" alt="" />
                  </figure>
                </div>
              </div>

              {/* Item 2 */}
              <div className="col-lg-2 col-md-6 col-sm-12 feature-block d-flex masonry-item small-column all in-down one-second pb-4 masonry-item small-column all pb-4">
                <div className="project-block-one">
                  <figure className="image-box">
                    <img src="/assets/images/lens/02.png" alt="" />
                  </figure>
                </div>
              </div>

              {/* Item 3 */}
              <div className="col-lg-2 col-md-6 col-sm-12 feature-block d-flex masonry-item small-column all in-down one-second pb-4 masonry-item small-column all pb-4">
                <div className="project-block-one">
                  <figure className="image-box">
                    <img src="/assets/images/lens/03.png" alt="" />
                  </figure>
                </div>
              </div>

              {/* Item 4 */}
              <div className="col-lg-2 col-md-6 col-sm-12 feature-block d-flex masonry-item small-column all in-down one-second pb-4 masonry-item small-column all pb-4">
                <div className="project-block-one">
                  <figure className="image-box">
                    <img src="/assets/images/lens/04.png" alt="" />
                  </figure>
                </div>
              </div>

              {/* Item 5 */}
              <div className="col-lg-2 col-md-6 col-sm-12 feature-block d-flex masonry-item small-column all in-down one-second pb-4 masonry-item small-column all pb-4">
                <div className="project-block-one">
                  <figure className="image-box">
                    <img src="/assets/images/lens/coppervision.png" alt="" />
                  </figure>
                </div>
              </div>

              {/* Item 6 */}
              <div className="col-lg-2 col-md-6 col-sm-12 feature-block d-flex masonry-item small-column all in-down one-second pb-4 masonry-item small-column all pb-4">
                <div className="project-block-one">
                  <figure className="image-box">
                    <img src="/assets/images/lens/aspire.png" alt="" />
                  </figure>
                </div>
              </div>
              {/* Item 7 */}
              <div className="col-lg-2 col-md-6 col-sm-12 feature-block d-flex masonry-item small-column all in-down one-second pb-4 ">
                <div className="project-block-one">
                  <figure className="image-box">
                    <img src="/assets/images/lens/bash.png" alt="" />
                  </figure>
                </div>
              </div>
              {/* Item 8 */}
              <div className="col-lg-2 col-md-6 col-sm-12 feature-block d-flex masonry-item small-column all in-down one-second pb-4 ">
                <div className="project-block-one">
                  <figure className="image-box">
                    <img src="/assets/images/lens/freshlook.png" alt="" />
                  </figure>
                </div>
              </div>
              {/* Item 9 */}
              <div className="col-lg-2 col-md-6 col-sm-12 feature-block d-flex masonry-item small-column all in-down one-second pb-4 ">
                <div className="project-block-one">
                  <figure className="image-box">
                    <img src="/assets/images/lens/alcori.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
