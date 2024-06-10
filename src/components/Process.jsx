'use client'

import Image from "next/image";
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; 

export default function Process() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div id="more-services" className="more-services">
        <div className="container">
          <div className="section-title text-center" data-aos="fade-up">
            <h2 className="text-center fw-bold text-uppercase mb-3">
              Our Process
            </h2>
            <p className="mb-3">
              Over the years we&apos;ve evolved a tested method for attaining
              achievement for each one of our clients.
            </p>
          </div>

          <div className="row">
            <div className="col-md-6 d-flex align-items-stretch">
              <div
                className="card"
                // style='background-image: url("assets/img/more-services-1.html");'
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <p className="text-center">1. Planning</p>
                  </h5>
                  <p className="card-text">
                    We help you turn all of your ideas into a digital product
                    that meets all of your requirements. We begin each project
                    by determining its scope and needs. This is done by
                    collaborating closely with you to ensure that we&apos;re all
                    on the same page.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div
                className="card"
                // style='background-image: url("assets/img/more-services-2.html");'
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <p className="text-center">2. Design</p>
                  </h5>
                  <p className="card-text">
                    {" "}
                    We build our websites carefully through a series of
                    workshops, wire-framing, and user experience (UX) sessions,
                    resulting in a site that reinforces trust, conveys important
                    brand messaging, and provides a return on innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch mt-4">
              <div
                className="card"
                // style='background-image: url("assets/img/more-services-3.html");'
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <p className="text-center">3. Development</p>
                  </h5>
                  <p className="card-text">
                    We provide extensive front-end and back-end development that
                    allows your idea to stand alone. Our in-house developers
                    work side-by-side with the artistic team to seek out natural
                    breakpoints inside the content and order practicality based
                    on acknowledged statistics.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch mt-4">
              <div
                className="card"
                // style='background-image: url("assets/img/more-services-4.html");'
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <p className="text-center">4. Marketing</p>
                  </h5>
                  <p className="card-text">
                    We come up with ideas and campaigns to help your business
                    prosper online. Our campaigns and virtual approach have a
                    verified tune report of accomplishing brilliant results,
                    gathering new leads and site visitors in your website and
                    assist them convert.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
