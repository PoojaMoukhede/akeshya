"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

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
    <>
      <div
        id="header"
        className={`fixed-top bg-white ${isScrolled ? "scrolled" : ""}`}
      >
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container d-flex align-items-center justify-content-between">
            <a className="navbar-brand m-0 p-0" href="#">
              <Image
                src="/Images/logo.png"
                alt="Logo"
                className="img-fluid"
                width="65"
                height="70"
              />
              AKESHYA
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link href="/main" className="nav-link" passHref>
                  Home
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a> */}
                   <Link href="/about" className="nav-link" passHref>
                    About
                  </Link>
                </li>
               
                <li className="nav-item">
                  <Link href="/service" className="nav-link" passHref>
                    Services
                  </Link>
                </li>
                <li className="nav-item" >
                  <Link
                    href="/contact"
                    passHref
                    className="nav-link getstarted rounded-pill text-center"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
