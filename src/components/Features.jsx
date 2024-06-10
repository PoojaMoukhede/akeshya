"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  RiCalendarEventLine,
  RiAdvertisementFill,
  RiDiscLine,
  RiContactsBookLine,
  RiBarChartGroupedFill,
  RiMapPinLine,
  RiTodoLine,
  RiSearchEyeLine,
  RiPlayCircleLine,
  RiCreativeCommonsByLine,
  RiCodeBoxLine,
  RiWindowLine,
} from "react-icons/ri";

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
                <RiWindowLine className="me-2 window line_icon" />
                <h3>
                  <p>Web design</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <RiCodeBoxLine className="me-2 code line_icon" />
                <h3>
                  <p>Development</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <RiCreativeCommonsByLine className="me-2 creative line_icon" />
                <h3>
                  <p>Branding</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <RiPlayCircleLine className="me-2 play line_icon" />
                <h3>
                  <p>Media buying</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <RiSearchEyeLine className="me-2 eye line_icon" />
                <h3>
                  <p>Search engine</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <RiTodoLine className="me-2 todo line_icon" />
                <h3>
                  <p>Brand strategy</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <RiMapPinLine className="me-2 map_pin line_icon" />
                <h3>
                  <p>Local search marketing</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <RiBarChartGroupedFill className="me-2 bar line_icon" />
                <h3>
                  <p>Lead Tracking & Management </p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <RiContactsBookLine className="me-2 cont line_icon" />
                <h3>
                  <p>Contact management</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <RiDiscLine className="me-2 media line_icon" />
                <h3>
                  <p>Media management</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <RiCalendarEventLine className="me-2 calendar line_icon" />
                <h3>
                  <p>Social scheduling</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <RiAdvertisementFill className="me-2 ad line_icon" />
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
