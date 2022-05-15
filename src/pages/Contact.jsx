import React from "react";

function Contact() {
  return (
    <div className="container">
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4 detail_nomi">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      required
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      required
                      placeholder="Your email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-4">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      required
                      placeholder=" Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="text-center text-md-left mt-4 mb-5">
                <button type="submit" className="btn btn-primary w-50">
                  Send
                </button>
              </div>
            </form>

            <div className="status"></div>
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Andijon,Asaka 102,Uzbekistan</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+998 91 494 68 42</p>
              </li>

              <li>
                <i classNameName="fas fa-envelope mt-4 fa-2x"></i>
                <p> asalarichilik@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
