import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="home__footer" style={{ backgroundColor: "#231f1e" }}>
      <div className="container ">
        <footer className="text-center text-lg-start text-white">
          <div className="container p-4 pb-0">
            <section>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6
                    className="mb-4 font-weight-bold fs-4"
                    style={{ color: "rgb(251, 196, 31)" }}
                  >
                    BeExpo
                  </h6>
                  <p>
                    Bee pollen is a superfood which contains enzymes, vitamins,
                    minerals, amino acids and protein, increasing their bio
                    availability. It carries perfectly sweet and earthy flavor.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Products
                  </h6>
                  <p>
                    <Link to="/bee" className="text-white text-decoration-none">
                      Bee
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/honey"
                      className="text-white text-decoration-none"
                    >
                      Honey
                    </Link>
                  </p>
                  <p>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UCEmLDNOhzqTKWP9SbCo0PPA"
                      className="text-white text-decoration-none"
                    >
                      Our YouTube
                    </a>
                  </p>
                  <p>
                    <Link
                      to="/ingredients"
                      className="text-white text-decoration-none"
                    >
                      Moom
                    </Link>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <a
                      target="_blank"
                      href="https://t.me/sulaymon_abdukarimov"
                      className="text-white text-decoration-none"
                    >
                      My Account
                    </a>
                  </p>
                  <p>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/watch?v=q8XlAZ1IfqM&list=PL9QoKzgc5yTrNLxy8To6T4qbtBuZyUhJL"
                      className="text-white text-decoration-none"
                    >
                      Special
                    </a>
                  </p>
                  <p>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/watch?v=Tp7qzOZGLCs&list=PL9QoKzgc5yTq93sTNNUWlPQU48niIFVom"
                      className="text-white text-decoration-none"
                    >
                      Shipping Rates
                    </a>
                  </p>
                  <p>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/c/aUZBEKISTANBEEKEEPERS/about"
                      className="text-white text-decoration-none"
                    >
                      Help
                    </a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> Andijon,Asaka 102
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i>{" "}
                    asalarichilik@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3">+998 90 386 68 35</i>
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i>+998 91 494 68 42
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            <div className="software text-center">
              © {new Date().getFullYear()} Made by
              <a
                target="_blank"
                className="text-white text-decoration-none p-1"
                href="https://www.linkedin.com/in/sulaymon-abdukarimov-1a0a331b9/"
              >
                Sulaymon Abdukarimov
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
