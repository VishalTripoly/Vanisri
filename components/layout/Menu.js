"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [active, setActive] = useState("home");

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
        rootMargin: "-40% 0px -40% 0px", // adjust if needed
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <ul className="navigation clearfix">
      <li className={active === "home" ? "active" : ""}>
        <Link href="#home">Home</Link>
      </li>

      <li className={active === "about" ? "active" : ""}>
        <Link href="#about">About Us</Link>
      </li>

      <li className={active === "sunglass" ? "active" : ""}>
        <Link href="#sunglass">Sunglass</Link>
      </li>

      <li className={active === "spectacles" ? "active" : ""}>
        <Link href="#spectacles">Spectacles</Link>
      </li>

      <li className={active === "contactlenses" ? "active" : ""}>
        <Link href="#contactlenses">Contact Lens</Link>
      </li>

      <li className={active === "contact" ? "active" : ""}>
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
  );
}
