'use client'

import Image from "next/image";
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; 

export default function Contact() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  return (
    <>
      <section id="contact" className="contact mb-4">
        <div className="container">
          <div className="section-title text-center" data-aos="fade-up">
            <h2 className="mb-4 text-uppercase fw-bold">Contact Us</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="contact-about">
                <h3>Akeshya</h3>
                <p>
                  Designers, developers & marketeers capable of delivering
                  solutions according to your needs,
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 mt-4 mt-md-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="info">
                <div className="d-flex gap-2">
                  <Image
                    src="/ri--map-pin-line.svg"
                    alt=""
                    width={36}
                    height={36}
                  />
                  <p>
                    26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh
                    524004
                  </p>
                </div>

                <div className="d-flex gap-2">
                  <Image
                    src="/ri--mail-send-line.svg"
                    alt=""
                    width={35}
                    height={35}
                  />

               
                    <p>info@akeshya.com</p>
             
                </div>

                <div className="d-flex gap-2">
                  <Image
                    src="/ri--phone-line.svg"
                    alt=""
                    width={36}
                    height={36}
                  />

                  <p>+91 94942 40922 </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-5 col-md-12"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <form className="email-form" method="POST" name="contact">
                {/* <input type="hidden" name="form-name" value="contact" /> */}
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
