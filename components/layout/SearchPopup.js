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
              <figure className="logo-box pull-left">
                <Link href="/">
                  <img src="assets/images/search-logo.svg" alt="" width={100} />
                </Link>
              </figure>
              <div className="close-search pull-right" onClick={handlePopup}>
                <span className="far fa-times"></span>
              </div>
            </div>
            <div className="overlay-layer"></div>
            <div className="auto-container w-50">
              <div className="search-form">
                <form
                  action="contact.html"
                  method="post"
                  className="default-form"
                >
                  <h2 className='mb-4'>Make an Appointment</h2>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
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
                    <input
                      type="text"
                      name="date"
                      placeholder="Appointment date"
                      id="datepicker"
                    />
                  </div>
                  <div className="form-group message-btn">
                    <button type="submit" className="theme-btn btn-one">
                      Make Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
