'use client'
import React from 'react'
import Link from "next/link"

export default function SearchPopup({ isPopup, handlePopup }) {
    return (
      <>
        <div
          id="search-popup"
          className={`search-popup ${isPopup ? "popup-visible" : ""}`}
        >
          <div className="popup-inner">
            <div className="upper-box clearfix auto-container">
              <div className="row d-flex justify-content-center">
                <div className="col-sm-6">
                  <figure className="logo-box pull-left">
                    <Link href="/">
                      <img
                        src="assets/images/logo.png"
                        alt=""
                        width={150}
                      />
                    </Link>
                  </figure>
                  <div
                    className="close-search pull-right"
                    onClick={handlePopup}
                  >
                    <span className="far fa-times"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay-layer"></div>
            <div className="auto-container">
              <div className="search-form">
                <form
                  action="contact.html"
                  method="post"
                  className="default-form"
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-sm-6">
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required=""
                        />
                      </div>
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          name="number"
                          placeholder="Number"
                          required=""
                        />
                      </div>
                      <div className="form-group mb-4">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required=""
                        />
                      </div>
                      <div className="form-group mb-4">
                        <textarea
                          name="message"
                          placeholder="Message" rows={4} cols={10}
                        ></textarea>
                      </div>
                      <div className="form-group message-btn">
                        <button type="submit" className="theme-btn btn-one">
                          Make Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
