'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
// import '../globals.css'
import Footer from './Footer';

export default function AboutUS() {
  const router = useRouter();

  useEffect(() => {
      if (typeof window !== 'undefined') {
          import('@srexi/purecounterjs').then((PureCounter) => {
              new PureCounter.default({
                  end: 3835039,
                  duration: 2,
                  element: document.querySelector('.purecounter'),
              });
          });
      }

      AOS.init({
          duration: 1000,
      });

      return () => {
          // Clean up any resources if needed
      };
  }, [router.pathname]);
    // useEffect(() => {
    //     new PureCounter({
    //       end: 3835039, 
    //       duration: 2, 
    //       element: document.querySelector('.purecounter'),
    //     });
    //     AOS.init({
    //       duration: 1000,
    //     });
    //   }, []);
  return (
    <>
        <Header/>
      <div id="about" className="about">
        <div className="container">
          <div className="section-title pb-4" data-aos="fade-up">
            <h2 className="text-center fw-bold text-uppercase">About Us</h2>
          </div>

          <div className="row content">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
              <p>
                We are Akeshya, a firm that specializes in web design and
                marketing. We help transform ideas into reality with a team of
                passionate graphic designers, web developers, and seasoned
                marketing advisors.
              </p>
              <ul className="list-unstyled p-0">
                <li className="position-relative ps-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="position-absolute"
                  >
                    <path
                      fill="currentColor"
                      d="m11.602 13.76l1.412 1.412l8.466-8.466l1.414 1.415l-9.88 9.88l-6.364-6.365l1.414-1.414l2.125 2.125zm.002-2.828l4.952-4.953l1.41 1.41l-4.952 4.953zm-2.827 5.655L7.364 18L1 11.636l1.414-1.414l1.413 1.413l-.001.001z"
                    />
                  </svg>{" "}
                  We started with a simple idea: do what is best for the client.{" "}
                </li>
                <li className="position-relative ps-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="position-absolute"
                  >
                    <path
                      fill="currentColor"
                      d="m11.602 13.76l1.412 1.412l8.466-8.466l1.414 1.415l-9.88 9.88l-6.364-6.365l1.414-1.414l2.125 2.125zm.002-2.828l4.952-4.953l1.41 1.41l-4.952 4.953zm-2.827 5.655L7.364 18L1 11.636l1.414-1.414l1.413 1.413l-.001.001z"
                    />
                  </svg>{" "}
                  Our methodical and individual approach to each project
                  delivers the finest possible results for your media.
                </li>
                <li className="position-relative ps-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="position-absolute"
                  >
                    <path
                      fill="currentColor"
                      d="m11.602 13.76l1.412 1.412l8.466-8.466l1.414 1.415l-9.88 9.88l-6.364-6.365l1.414-1.414l2.125 2.125zm.002-2.828l4.952-4.953l1.41 1.41l-4.952 4.953zm-2.827 5.655L7.364 18L1 11.636l1.414-1.414l1.413 1.413l-.001.001z"
                    />
                  </svg>{" "}
                  Our day-to-day work is to solve your problems utilising the
                  most up-to-date, practical adaptive technology, and we have a
                  lot of fun doing it.
                </li>
              </ul>
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p>
                We&apos;re professional, but we&apos;re also friendly, and
                we&apos;ll always pay attention to your concerns. We expect to
                work with innovative people that have an open mind and are
                dedicated to making every idea a reality. We want to hear from
                you if you&apos;re interested in SEO, have Web Development
                ideas, or require a graphic designer who can match your goals.
              </p>
              <a
                href="#services"
                className="btn-learn-more fw-bold rounded-pill"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="counts" className="counts pt-0 mb-5">
        <div className="container">
          <div className="row">
            <div
              className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
              data-aos="fade-right"
              data-aos-delay="150"
              
            >
              <Image
                src="/Images/counts-img.svg"
                alt=""
                className="img-fluid"
                width={526}
                height={300}
              />
            </div>

            <div
              className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="content d-flex flex-column justify-content-center p-0">
                <div className="row">
                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box p-3 w-100">
                      <Image src="/emoji-smile.svg" alt="" width={36} height={36} />
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="3835039"
                        data-purecounter-duration="2"
                        className="purecounter"
                      ></span>
                      <p className="mb-0">
                        <strong>Organic Reach</strong> (Global)
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box p-3 w-100">
                    <Image src="/journal-richtext.svg" alt="" width={36} height={36}/>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="85"
                        data-purecounter-duration="3"
                        className="purecounter"
                      ></span>
                      <p className="mb-0">
                        <strong>Campaigns</strong>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box p-3 w-100">
                    <Image src="/clock.svg" alt="" width={36} height={36}/>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="14081"
                        data-purecounter-duration="3"
                        className="purecounter"
                      ></span>
                      <p className="mb-0">
                        <strong>Watch Hours</strong> (Asia){" "}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box p-3 w-100">
                    <Image src="/globe.svg" alt="" width={36} height={36}/>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="17"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        <p className="mb-0">%</p>
                      </span>
                      <p className="mb-0">
                        <strong>Excellent CTR %</strong> (Asia)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
