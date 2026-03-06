'use client'
import React from 'react'
import Link from "next/link"

export default function Map() {
    return (
      <>
        <section className="google-map-section p_relative">
          <div className="map-inner p_relative d_block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9805296616764!2d77.57386192588724!3d12.973097064843788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae160edc0b8e17%3A0xf3d17419eb9587bd!2sVanisri%20Opticals!5e0!3m2!1sen!2sin!4v1772185812029!5m2!1sen!2sin"
              height={570}
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* <div className="content-inner">
            <div className="auto-container">
              <div className="content-box p_relative d_block">
                <div className="title p_relative d_block">
                  <h3>Working Hours</h3>
                </div>
                <div className="schedule-box p_relative d_block">
                  <ul className="schedule-list clearfix">
                    <li>Mon - Wed: 10:30am - 9:00pm </li>
                    <li>Thu: 10:30am - 9:00pm </li>
                    <li>Fri: 10:30am - 9:00pm </li>
                    <li>Sat - Sun: 10:30am - 9:00pm</li>
                  </ul>
                </div>
                <div className="contact-info p_relative d_block">
                  <h3>Contact Info</h3>
                  <ul className="info-list clearfix">
                    <li>
                      <i className="fas fa-envelope"></i>Email:{" "}
                      <Link href="mailto:sample@example.com">
                        sample@example.com
                      </Link>
                    </li>
                    <li>
                      <i className="icon-3"></i>Call:{" "}
                      <Link href="tel:9035011992">+91 9035011992</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </>
    );
}
