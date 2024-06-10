"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="header"
      className={`fixed-top bg-white ${isScrolled ? "scrolled" : ""}`}
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-white " id='navHead'>
        <div className="container d-flex align-items-center justify-content-between w-100">
          <Link href="/" className="navbar-brand d-flex align-items-center w-25">
            <Image
              src="/Images/logo.png"
              alt="Logo"
              className="img-fluid logo"
              width="65"
              height="65"
            />
            <h1 className='m-0 p-0'>
              AKESHYA
              </h1>
          </Link>
          <button
            className="navbar-toggler border-0 w-25"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse w-50" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link child">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link href="/about" className="nav-link child">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link href="/service" className="nav-link child">
                  Services
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  href="/contact"
                  className="nav-link getstarted rounded-pill text-center lastChild"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
