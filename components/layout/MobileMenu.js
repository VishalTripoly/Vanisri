"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileMenu({ handleMobileMenu, handlePopup }) {
  const [active, setActive] = useState("home");

  // 🔥 Scroll Detection
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // 🔥 Handle Click
  const handleClick = (id) => {
    setActive(id);
    handleMobileMenu(); // close mobile menu after click
  };

  return (
    <div className="mobile-menu">
      <div className="close-btn" onClick={handleMobileMenu}>
        <span className="fas fa-times" />
      </div>

      <nav className="menu-box">
        <div className="nav-logo">
          <Link href="/">
            <img src="/assets/images/logo.png" alt="logo" />
          </Link>
        </div>

        <ul className="navigation clearfix">
          <li className={active === "home" ? "active" : ""}>
            <Link href="#home" onClick={() => handleClick("home")}>
              Home
            </Link>
          </li>

          <li className={active === "about" ? "active" : ""}>
            <Link href="#about" onClick={() => handleClick("about")}>
              About Us
            </Link>
          </li>

          <li className={active === "sunglass" ? "active" : ""}>
            <Link href="#sunglass" onClick={() => handleClick("sunglass")}>
              Sunglass
            </Link>
          </li>

          <li className={active === "spectacles" ? "active" : ""}>
            <Link href="#spectacles" onClick={() => handleClick("spectacles")}>
              Spectacles
            </Link>
          </li>

          <li className={active === "contactlenses" ? "active" : ""}>
            <Link
              href="#contactlenses"
              onClick={() => handleClick("contactlenses")}
            >
              Contact Lens
            </Link>
          </li>

          <li className={active === "contact" ? "active" : ""}>
            <Link href="#contact" onClick={() => handleClick("contact")}>
              Contact
            </Link>
          </li>
          <li className="p-2 ms-3">
            <Link
              href="/"
              className="theme-btn btn-one w-50 h-50 search-toggler"
              onClick={handlePopup}
            >
              Appointment
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
