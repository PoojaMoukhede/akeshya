import Image from "next/image";
import Header from "../components/Header";
import AboutUS from "../components/AboutUS";
import Services from "../components/Services";
import Process from "../components/Process";
import Features from "../components/Features";
import Contact from "../components/Contact";

export default function Main() {
  return (
    <>
      <Header />
      <div id="hero" className="d-flex align-items-center w-100 mt-5">
        <div className="container ">
          <div className="d-flex">
            <div className="row">
              <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">Grow your business with Akeshya</h1>
                <h2 data-aos="fade-up" data-aos-delay="400">
                  We are team of talented website designers, developers &
                  digital marketeers
                </h2>
                <div data-aos="fade-up" data-aos-delay="800">
                  <a href="#about" className="btn-get-started scrollto">
                    Get Started
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="fade-left"
                data-aos-delay="98"
              >
                <Image
                  width={580}
                  height="600"
                  src="/Images/hero-img.png"
                  className="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="clients" className="clients clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6">
              <Image
                src="/Images/client-1.png"
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
                width={98}
                height={98}
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <Image
                src="/Images/client-2.png"
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="100"
                width={98}
                height={98}
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <Image
                src="/Images/client-3.png"
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="98"
                width={98}
                height={98}
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <Image
                src="/Images/client-4.png"
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="300"
                width={98}
                height={98}
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <Image
                src="/Images/client-5.png"
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="400"
                width={98}
                height={98}
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <Image
                src="/Images/client-6.png"
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="500"
                width={98}
                height={98}
              />
            </div>
          </div>
        </div>
      </div>
      <AboutUS />
      <Services />
      <Process />
      <Features />
      <Contact />
    </>
  );
}
