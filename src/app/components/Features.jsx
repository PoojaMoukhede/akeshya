'use client'

import Image from "next/image";
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; 

export default function Features() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section id="features" className="features pt-5">
        <div className="container">
          <div className="section-title text-center" data-aos="fade-up">
            <h2 className="mb-4 text-uppercase fw-bold">Our Core Features</h2>
            <p className="mb-4">
              Akeshya is a forward-thinking and intelligent design firm that is
              technically and creatively capable of transforming your brand into
              its best digital self. Our approach to design and development
              results in compelling, engaging branding and immersive digital
              experiences that provide a value for money.
            </p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-3 col-md-4">
              <div className="icon-box">
                <Image
                  src="/icons/ri--window-line.svg"
                  width={32}
                  height={32}
                  alt=""
                  className="me-2"
                />
                <h3>
                  <p>Web design</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <Image
                  src="/icons/ri--code-box-line.svg"
                  width={32}
                  height={32}
                  alt=""
                  className="me-2"
                />
                <h3>
                  <p>Development</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <Image
                  src="/icons/ri--creative-commons-by-line.svg"
                  width={32}
                  height={32}
                  alt=""
                  className="me-2"
                />
                <h3>
                  <p>Branding</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <Image
                  src="/icons/ri--play-circle-line.svg"
                  width={32}
                  height={32}
                  alt=""
                  className="me-2"
                />
                <h3>
                  <p>Media buying</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <Image
                  src="/icons/ri--search-eye-line.svg"
                  width={32}
                  height={32}
                  alt=""
                  className="me-2"
                />
                <h3>
                  <p>Search engine</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <Image
                  src="/icons/ri--todo-line.svg"
                  width={32}
                  height={32}
                  alt=""
                  className="me-2"
                />
                <h3>
                  <p>Brand strategy</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <Image
                  src="/icons/ri--map-pin-line.svg"
                  width={32}
                  height={32}
                  alt=""
                  className="me-2"
                />
                <h3>
                  <p>Local search marketing</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <Image
                  src="/icons/ri--bar-chart-grouped-line.svg"
                  width={32}
                  height={32}
                  alt=""
                  className="me-2"
                />
                <h3>
                  <p>Lead Tracking & Management </p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <Image
                  src="/icons/ri--contacts-book-line.svg"
                  width={32}
                  height={32}
                  alt=""
                  className="me-2"
                />
                <h3>
                  <p>Contact management</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <Image
                  src="/icons/ri--disc-line.svg"
                  width={32}
                  height={32}
                  alt=""
                  className="me-2"
                />
                <h3>
                  <p>Media management</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <Image
                  src="/icons/ri--calendar-event-line.svg"
                  width={32}
                  height={32}
                  alt=""
                  className="me-2"
                />
                <h3>
                  <p>Social scheduling</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <Image
                  src="/icons/ri--advertisement-fill.svg"
                  width={32}
                  height={32}
                  alt=""
                  className="me-2"
                />
                <h3>
                  <p>Ad retargeting</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
