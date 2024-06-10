"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Services.module.css";
import { BiWorld } from "react-icons/bi";
import { FaDribbble } from "react-icons/fa";
import { BiTachometer, BiFile } from "react-icons/bi";
export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div id="services" className="services">
        <div className="container">
          <div className="section-title text-center" data-aos="fade-up">
            <h2 className="text-center fw-bold text-uppercase mb-3">
              Services
            </h2>
            <p className="mb-4">
              Akeshya will serve as your consultant and development partner to
              help you turn your idea into a reality.
            </p>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div
                className={`icon-box ${styles.iconBox}`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon">
                  <FaDribbble className="customeIcon" />
                </div>
                <h4 className="title">
                  <a href="#">Design</a>
                </h4>
                <p className="description">
                  Our web design services can assist you in reclaiming your
                  company&apos;s online image. Your business will flourish on
                  the Internet thanks to the combination of style and technology
                  we provide, as well as our experience.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div
                className={`icon-box ${styles.iconBox}`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon">
                  <BiFile className="customeIcon" />
                </div>
                <h4 className="title">
                  <a href="#">Development</a>
                </h4>
                <p className="description">
                  Our development team can construct platforms to help your
                  business thrive by creating powerful customised solutions
                  tailored to your particular requirements. Akeshya makes use of
                  established and effective web development tools.{" "}
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div
                className={`icon-box ${styles.iconBox}`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon">
                  <BiWorld className="customeIcon" />
                </div>
                <h4 className="title">
                  <a href="#">Marketing</a>
                </h4>
                <p className="description">
                  A beautiful website is the foundation of effective marketing.
                  Our customers achieve success where it counts—in the real
                  world—by combining our proven approach with our passion for
                  improving conversions and increasing ROI.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div
                className={`icon-box ${styles.iconBox}`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon">
                  <BiTachometer className="customeIcon" />
                </div>
                <h4 className="title">
                  <a href="#">Support</a>
                </h4>
                <p className="description">
                  Since the beginning, we at Akeshya have specialised in website
                  maintenance. We recognise the significance of having your
                  business online 24 hours a day, seven days a week, and
                  we&apos;ve created a system to ensure that we&apos;re always
                  available.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
